import { neon } from '@neondatabase/serverless';
import { SCHEMA_SQL } from './db-schema';

const getSql = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn('DATABASE_URL is not set. Database operations will fail.');
    // Return a dummy function or throw later
    return ((strings: TemplateStringsArray, ...values: any[]) => {
      throw new Error('DATABASE_URL is not set');
    }) as any;
  }
  return neon(url);
};

const _sql = getSql();

export const sql = (async (strings: any, ...values: any[]) => {
  try {
    // If it's a tagged template literal
    if (Array.isArray(strings) && (strings as any).raw) {
      return await _sql(strings as any, ...values);
    }
    // If it's a plain string query
    return await _sql.query(strings, values);
  } catch (error: any) {
    if (error.code === '42P01') { // undefined_table
      console.log('Table missing, attempting auto-initialization...');
      try {
        await initializeDatabase();
        // Retry the original query
        if (Array.isArray(strings) && (strings as any).raw) {
          return await _sql(strings as any, ...values);
        }
        return await _sql.query(strings, values);
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
    // Note: This is a simple splitter and might fail on complex SQL, but works for our schema
    const statements = SCHEMA_SQL.split(';').filter(stmt => stmt.trim() !== '');
    for (const statement of statements) {
      await _sql.query(statement);
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
