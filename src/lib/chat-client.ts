export type ChatSenderType = 'user' | 'buddy' | 'ai';

export interface ChatClientMessage {
  id: string;
  content: string;
  sender_type: ChatSenderType;
  created_at: string;
}

const SESSION_ID_KEY = 'chat_session_id';
const HISTORY_PREFIX = 'chat_history:';

function canUseLocalStorage() {
  return typeof window !== 'undefined';
}

export function getOrCreateChatSessionId() {
  if (!canUseLocalStorage()) return '';

  const existingId = localStorage.getItem(SESSION_ID_KEY);
  if (existingId) return existingId;

  const sessionId = crypto.randomUUID();
  localStorage.setItem(SESSION_ID_KEY, sessionId);
  return sessionId;
}

export function getChatHistory(sessionId: string): ChatClientMessage[] {
  if (!canUseLocalStorage() || !sessionId) return [];

  try {
    const raw = localStorage.getItem(`${HISTORY_PREFIX}${sessionId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChatClientMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function setChatHistory(sessionId: string, messages: ChatClientMessage[]) {
  if (!canUseLocalStorage() || !sessionId) return;
  localStorage.setItem(`${HISTORY_PREFIX}${sessionId}`, JSON.stringify(messages));
}

export function appendChatMessage(sessionId: string, message: ChatClientMessage) {
  const messages = getChatHistory(sessionId);
  messages.push(message);
  setChatHistory(sessionId, messages);
}

export function createChatMessage(content: string, sender_type: ChatSenderType): ChatClientMessage {
  return {
    id: crypto.randomUUID(),
    content,
    sender_type,
    created_at: new Date().toISOString(),
  };
}
