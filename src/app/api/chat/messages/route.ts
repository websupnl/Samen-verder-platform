import { NextRequest, NextResponse } from 'next/server';
import { getMessages, addMessage } from '@/lib/chat-service';
import { openai, SYSTEM_PROMPT } from '@/lib/openai';
import { isValidUUID } from '@/lib/utils';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
  }

  if (!isValidUUID(sessionId)) {
    return NextResponse.json({ error: 'Invalid Session ID format' }, { status: 400 });
  }

  try {
    const messages = await getMessages(sessionId);
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, senderType, sessionId } = body;

    if (!text || !senderType || !sessionId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidUUID(sessionId)) {
      return NextResponse.json({ error: 'Invalid Session ID format' }, { status: 400 });
    }

    // Save user message
    const newMessage = await addMessage(sessionId, senderType, text);

    // If it's a user message, trigger AI response
    if (senderType === 'user') {
      // Get conversation history for OpenAI
      const history = await getMessages(sessionId);
      
      const openaiMessages = [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...history.map((m: any) => ({
          role: (m.sender_type === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
          content: m.content
        }))
      ];

      try {
        const response = await openai.chat.completions.create({
          model: 'gpt-4o', // Using a good model for the demo
          messages: openaiMessages,
          max_tokens: 500,
        });

        const aiContent = response.choices[0]?.message?.content || "Ik ben even sprakeloos. Kan ik je nog ergens anders mee helpen?";
        
        // Save AI response
        await addMessage(sessionId, 'ai', aiContent);
      } catch (aiError) {
        console.error('OpenAI Error:', aiError);
        // Fallback response if OpenAI fails
        await addMessage(sessionId, 'ai', "Ik heb even moeite met verbinden. Maar ik ben er voor je. Wat zit je dwars?");
      }
    }

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Failed to process message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
