import { sql } from './db';
import { v4 as uuidv4 } from 'uuid';

export async function createSession(userId?: string) {
  const id = uuidv4();
  await sql`
    INSERT INTO chat_sessions (id, user_id, status)
    VALUES (${id}, ${userId || null}, 'nieuw')
  `;
  return id;
}

export async function getMessages(sessionId: string) {
  const messages = await sql`
    SELECT id, session_id, sender_type, content, created_at
    FROM chat_messages
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
  `;
  return messages;
}

export async function addMessage(sessionId: string, senderType: 'user' | 'buddy' | 'ai', content: string) {
  const id = uuidv4();
  const [message] = await sql`
    INSERT INTO chat_messages (id, session_id, sender_type, content)
    VALUES (${id}, ${sessionId}, ${senderType}, ${content})
    RETURNING *
  `;
  
  // Update session updated_at
  await sql`
    UPDATE chat_sessions
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = ${sessionId}
  `;
  
  return message;
}

export async function getAllSessions() {
  const sessions = await sql`
    SELECT 
      s.id, 
      s.status, 
      s.created_at, 
      s.updated_at,
      m.content as last_message,
      m.created_at as last_message_at
    FROM chat_sessions s
    LEFT JOIN (
      SELECT DISTINCT ON (session_id) session_id, content, created_at
      FROM chat_messages
      ORDER BY session_id, created_at DESC
    ) m ON s.id = m.session_id
    ORDER BY s.updated_at DESC
  `;
  return sessions;
}

export async function updateSessionStatus(sessionId: string, status: string) {
  await sql`
    UPDATE chat_sessions
    SET status = ${status}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${sessionId}
  `;
}
