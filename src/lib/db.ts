import { neon } from '@neondatabase/serverless';
import { SCHEMA_SQL } from './db-schema';

const getSql = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn('DATABASE_URL is not set. Database operations will fail.');
    return ((strings: any, ...values: any[]) => {
      throw new Error('DATABASE_URL is not set');
    }) as any;
  }
  return neon(url);
};

const _sql = getSql();

/**
 * A wrapper around neon's sql that adds auto-initialization of the database
 * if a table is missing.
 */
export const sql = (async (strings: any, ...values: any[]) => {
  try {
    // If it's a tagged template literal
    if (Array.isArray(strings) && (strings as any).raw) {
      return await _sql(strings as any, ...values);
    }
    // If it's a plain string query
    return await _sql(strings, values[0]);
  } catch (error: any) {
    const isTableMissing = 
      error.code === '42P01' || 
      (error.message && error.message.includes('does not exist'));

    if (isTableMissing) {
      console.log('Table missing, attempting auto-initialization...');
      try {
        await initializeDatabase();
        // Retry the original query
        if (Array.isArray(strings) && (strings as any).raw) {
          return await _sql(strings as any, ...values);
        }
        return await _sql(strings, values[0]);
      } catch (initError) {
        console.error('Auto-initialization failed:', initError);
        throw error; // Throw the original error
      }
    }
    throw error;
  }
}) as any;

export async function initializeDatabase() {
  console.log('Initializing database schema...');
  try {
    // Split the schema SQL by semicolons and execute each statement
    const statements = SCHEMA_SQL.split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt !== '');
    
    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      await _sql(statement);
    }
    console.log('Database schema initialized successfully!');
    return { success: true };
  } catch (error) {
    console.error('Failed to initialize database schema:', error);
    throw error;
  }
}

// Types for our database
export type UserRole = 'ouder' | 'buddy' | 'beheerder';

export interface User {
  id: string;
  email: string | null;
  role: UserRole;
  created_at: Date;
}

export interface Profile {
  user_id: string;
  first_name: string;
  last_name: string;
  bio?: string;
}

export interface ChatSession {
  id: string;
  user_id: string | null;
  status: 'nieuw' | 'actief' | 'wacht_op_opvolging' | 'afgerond';
  created_at: Date;
  updated_at: Date;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  sender_type: 'user' | 'buddy' | 'ai';
  content: string;
  created_at: Date;
}
