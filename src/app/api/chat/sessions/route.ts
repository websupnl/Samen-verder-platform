import { NextRequest, NextResponse } from 'next/server';
import { getAllSessions, createSession } from '@/lib/chat-service';

export async function GET() {
  try {
    const sessions = await getAllSessions();
    return NextResponse.json(sessions);
  } catch (error) {
    console.error('Failed to fetch sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let userId = null;
    try {
      const body = await req.json();
      userId = body?.userId;
    } catch (e) {
      // Ignore empty body
    }
    const sessionId = await createSession(userId);
    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error('Failed to create session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
