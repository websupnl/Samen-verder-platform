import { NextResponse } from 'next/server';
import { getAllSessions } from '@/lib/chat-store';

export async function GET() {
  const sessions = getAllSessions();
  return NextResponse.json(sessions);
}
