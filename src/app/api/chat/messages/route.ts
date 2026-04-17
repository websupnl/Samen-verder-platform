import { NextRequest, NextResponse } from 'next/server';
import { getMessages, addMessage, Message } from '@/lib/chat-store';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
  }

  const messages = getMessages(sessionId);
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { text, sender, sessionId } = body;

  if (!text || !sender || !sessionId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const newMessage: Message = {
    id: Math.random().toString(36).substring(2, 11),
    text,
    sender,
    sessionId,
    timestamp: new Date().toISOString(),
  };

  addMessage(newMessage);

  // Simple auto-reply logic for demo purposes
  if (sender === 'user') {
    setTimeout(() => {
      const reply: Message = {
        id: Math.random().toString(36).substring(2, 11),
        text: "Bedankt voor je bericht. Er komt zo snel mogelijk een buddy bij je in de chat. Waar kan ik je op dit moment mee helpen?",
        sender: 'buddy',
        sessionId,
        timestamp: new Date().toISOString(),
      };
      addMessage(reply);
    }, 2000);
  }

  return NextResponse.json(newMessage);
}
