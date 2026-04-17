import { neon } from '@neondatabase/serverless';

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

export const sql = getSql();

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
