import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([]);
}

export async function POST(req: NextRequest) {
  try {
    await req.json().catch(() => null);
    return NextResponse.json({ sessionId: crypto.randomUUID() });
  } catch (error) {
    console.error('Failed to create session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
