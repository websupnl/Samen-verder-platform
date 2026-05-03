import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIFallbackReply, hasOpenAIKey, openai, SYSTEM_PROMPT } from '@/lib/openai';
import { type ChatClientMessage, createChatMessage } from '@/lib/chat-client';

export async function GET() {
  return NextResponse.json([]);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, senderType, history = [] } = body;

    if (!text || !senderType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const userMessage: ChatClientMessage = createChatMessage(text, senderType);
    let amyMessage: ChatClientMessage | null = null;

    if (senderType === 'user') {
      const openaiMessages = [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...history.map((m: ChatClientMessage) => ({
          role: (m.sender_type === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
          content: m.content,
        })),
        { role: 'user' as const, content: text },
      ];

      try {
        if (!hasOpenAIKey) {
          throw new Error('OPENAI_API_KEY is not set');
        }

        const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: openaiMessages,
          temperature: 0.7,
          max_tokens: 450,
        });

        const amyContent = response.choices[0]?.message?.content || getOpenAIFallbackReply();
        amyMessage = createChatMessage(amyContent, 'ai');
      } catch (aiError) {
        console.error('OpenAI Error:', aiError);
        amyMessage = createChatMessage(getOpenAIFallbackReply(), 'ai');
      }
    }

    return NextResponse.json({ message: userMessage, amyMessage });
  } catch (error) {
    console.error('Failed to process message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
