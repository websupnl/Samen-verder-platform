import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { isValidUUID } from './utils';

export type SenderType = 'user' | 'buddy' | 'ai';

export interface ChatMessageRecord {
  id: string;
  session_id: string;
  sender_type: SenderType;
  content: string;
  created_at: string;
}

export interface ChatSessionRecord {
  id: string;
  sessionId: string;
  user_id: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  last_message: string | null;
  last_message_at: string | null;
}

type LocalChatStore = {
  sessions: Array<{
    id: string;
    user_id: string | null;
    status: string;
    created_at: string;
    updated_at: string;
  }>;
  messages: ChatMessageRecord[];
};

const localStorePath = path.join(process.cwd(), 'data', 'local-chat-store.json');
const shouldUseLocalStore = () => !process.env.DATABASE_URL;

async function getSql() {
  const db = await import('./db');
  return db.sql;
}

async function readLocalStore(): Promise<LocalChatStore> {
  try {
    const raw = await readFile(localStorePath, 'utf8');
    return JSON.parse(raw) as LocalChatStore;
  } catch {
    return { sessions: [], messages: [] };
  }
}

async function writeLocalStore(store: LocalChatStore) {
  await mkdir(path.dirname(localStorePath), { recursive: true });
  await writeFile(localStorePath, JSON.stringify(store, null, 2), 'utf8');
}

function sessionWithLastMessage(store: LocalChatStore, sessionId: string): ChatSessionRecord | null {
  const session = store.sessions.find((item) => item.id === sessionId);
  if (!session) return null;

  const messages = store.messages
    .filter((message) => message.session_id === sessionId)
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  const lastMessage = messages.at(-1);

  return {
    ...session,
    sessionId: session.id,
    last_message: lastMessage?.content || null,
    last_message_at: lastMessage?.created_at || null,
  };
}

export async function createSession(userId?: string) {
  if (userId && !isValidUUID(userId)) {
    throw new Error(`Invalid userId provided to createSession: ${userId}`);
  }

  const id = uuidv4();

  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    const now = new Date().toISOString();
    store.sessions.push({
      id,
      user_id: userId || null,
      status: 'nieuw',
      created_at: now,
      updated_at: now,
    });
    await writeLocalStore(store);
    return id;
  }

  const sql = await getSql();
  await sql`
    INSERT INTO chat_sessions (id, user_id, status)
    VALUES (${id}, ${userId || null}, 'nieuw')
  `;
  return id;
}

export async function getMessages(sessionId: string): Promise<ChatMessageRecord[]> {
  if (!isValidUUID(sessionId)) {
    console.warn(`Invalid sessionId provided to getMessages: ${sessionId}`);
    return [];
  }

  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    return store.messages
      .filter((message) => message.session_id === sessionId)
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  }

  const sql = await getSql();
  const messages = await sql`
    SELECT id, session_id, sender_type, content, created_at
    FROM chat_messages
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
  `;
  return messages as ChatMessageRecord[];
}

export async function addMessage(sessionId: string, senderType: SenderType, content: string): Promise<ChatMessageRecord> {
  if (!isValidUUID(sessionId)) {
    throw new Error(`Invalid sessionId provided to addMessage: ${sessionId}`);
  }

  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    const now = new Date().toISOString();

    if (!store.sessions.some((session) => session.id === sessionId)) {
      store.sessions.push({
        id: sessionId,
        user_id: null,
        status: 'nieuw',
        created_at: now,
        updated_at: now,
      });
    }

    const message: ChatMessageRecord = {
      id: uuidv4(),
      session_id: sessionId,
      sender_type: senderType,
      content,
      created_at: now,
    };

    store.messages.push(message);
    store.sessions = store.sessions.map((session) =>
      session.id === sessionId ? { ...session, updated_at: now, status: senderType === 'user' ? 'actief' : session.status } : session
    );
    await writeLocalStore(store);
    return message;
  }

  const id = uuidv4();
  const sql = await getSql();
  const [message] = await sql`
    INSERT INTO chat_messages (id, session_id, sender_type, content)
    VALUES (${id}, ${sessionId}, ${senderType}, ${content})
    RETURNING *
  `;

  await sql`
    UPDATE chat_sessions
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = ${sessionId}
  `;

  return message as ChatMessageRecord;
}

export async function getAllSessions(): Promise<ChatSessionRecord[]> {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    return store.sessions
      .map((session) => sessionWithLastMessage(store, session.id))
      .filter((session): session is ChatSessionRecord => Boolean(session))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  }

  const sql = await getSql();
  const sessions = await sql`
    SELECT
      s.id,
      s.id as "sessionId",
      s.user_id,
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
  return sessions as ChatSessionRecord[];
}

export async function updateSessionStatus(sessionId: string, status: string) {
  if (!isValidUUID(sessionId)) {
    throw new Error(`Invalid sessionId provided to updateSessionStatus: ${sessionId}`);
  }

  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    store.sessions = store.sessions.map((session) =>
      session.id === sessionId ? { ...session, status, updated_at: new Date().toISOString() } : session
    );
    await writeLocalStore(store);
    return;
  }

  const sql = await getSql();
  await sql`
    UPDATE chat_sessions
    SET status = ${status}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${sessionId}
  `;
}
