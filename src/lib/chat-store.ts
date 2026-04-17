import fs from 'fs';
import path from 'path';

const STORE_PATH = path.join(process.cwd(), 'chat_messages.json');

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'buddy';
  timestamp: string;
  sessionId: string;
}

export function getMessages(sessionId: string): Message[] {
  try {
    if (!fs.existsSync(STORE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(STORE_PATH, 'utf-8');
    const allMessages: Message[] = JSON.parse(data);
    return allMessages.filter(m => m.sessionId === sessionId);
  } catch (error) {
    console.error('Error reading chat store:', error);
    return [];
  }
}

export function addMessage(message: Message) {
  try {
    let allMessages: Message[] = [];
    if (fs.existsSync(STORE_PATH)) {
      const data = fs.readFileSync(STORE_PATH, 'utf-8');
      allMessages = JSON.parse(data);
    }
    allMessages.push(message);
    fs.writeFileSync(STORE_PATH, JSON.stringify(allMessages, null, 2));
  } catch (error) {
    console.error('Error writing to chat store:', error);
  }
}

export function getAllSessions(): { sessionId: string; lastMessage: string; timestamp: string }[] {
  try {
    if (!fs.existsSync(STORE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(STORE_PATH, 'utf-8');
    const allMessages: Message[] = JSON.parse(data);
    
    const sessionsMap = new Map<string, { sessionId: string; lastMessage: string; timestamp: string }>();
    
    allMessages.forEach(m => {
      const existing = sessionsMap.get(m.sessionId);
      if (!existing || new Date(m.timestamp) > new Date(existing.timestamp)) {
        sessionsMap.set(m.sessionId, {
          sessionId: m.sessionId,
          lastMessage: m.text,
          timestamp: m.timestamp
        });
      }
    });
    
    return Array.from(sessionsMap.values()).sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  } catch (error) {
    console.error('Error reading chat store:', error);
    return [];
  }
}
