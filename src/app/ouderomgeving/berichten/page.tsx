"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send, User, Bot } from 'lucide-react';
import { isValidUUID } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'buddy' | 'ai';
  created_at: string;
}

const QUICK_PROMPTS = [
  "Ik weet niet waar ik moet beginnen",
  "Ik snap de brieven niet goed",
  "Ik ben boos en weet niet wat ik moet doen",
  "Welke vragen kan ik stellen?",
  "Wat gebeurt er meestal na een uithuisplaatsing?"
];

export default function OuderBerichtenPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedId = localStorage.getItem('chat_session_id');
      if (storedId && isValidUUID(storedId)) {
        setSessionId(storedId);
      } else {
        // Clear invalid ID if it exists
        if (storedId) localStorage.removeItem('chat_session_id');

        const initSession = async () => {
          try {
            const res = await fetch('/api/chat/sessions', { method: 'POST' });
            if (res.ok) {
              const { sessionId } = await res.json();
              localStorage.setItem('chat_session_id', sessionId);
              setSessionId(sessionId);
            }
          } catch (error) {
            console.error("Failed to init session", error);
          }
        };
        initSession();
      }
    }
  }, []);

  useEffect(() => {
    if (sessionId) {
      const fetchMessages = async () => {
        try {
          const res = await fetch(`/api/chat/messages?sessionId=${sessionId}`);
          if (res.ok) {
            const data = await res.json();
            setMessages(data);
          }
        } catch (error) {
          console.error("Failed to fetch messages", error);
        }
      };

      fetchMessages();
      const interval = setInterval(fetchMessages, 3000);
      return () => clearInterval(interval);
    }
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || !sessionId) return;

    setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          senderType: 'user',
          sessionId
        }),
      });

      if (res.ok) {
        const savedMessage = await res.json();
        setMessages(prev => [...prev, savedMessage]);
      }
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sage-900">Berichten</h1>
        <p className="text-sage-600">Gesprek met je buddy.</p>
      </div>

      <Card className="flex-grow flex flex-col overflow-hidden">
        <CardHeader className="bg-primary text-white p-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <CardTitle className="text-lg">Voorbeeldgesprek met een buddy</CardTitle>
            </div>
            <p className="text-xs text-white/80 mt-1">
              In deze demo worden reacties automatisch gegenereerd. In de praktijk worden gesprekken opgepakt door echte buddy&apos;s.
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto p-6 space-y-4 bg-sage-50/30">
          {messages.length === 0 && (
            <div className="text-center py-12 text-sage-500">
              <Bot className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium text-sage-900 mb-2">Hoe kunnen we je vandaag helpen?</p>
              <p className="text-sm max-w-md mx-auto mb-8">Dit voorbeeldgesprek laat zien hoe een eerste laagdrempelig contactmoment eruit kan zien.</p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-sm bg-white border border-sage-200 hover:border-primary hover:text-primary transition-all px-4 py-2 rounded-full text-sage-600 shadow-sm"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex ${m.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[75%] p-4 rounded-2xl text-sm shadow-sm ${
                  m.sender_type === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1 space-x-1 opacity-70 text-[10px] uppercase font-bold tracking-wider">
                  {m.sender_type === 'user' ? (
                    <><span>Jij</span><User className="h-3 w-3" /></>
                  ) : (
                    <><span>Buddy (Demo)</span><Bot className="h-3 w-3" /></>
                  )}
                </div>
                {m.content}
                <div className="text-[9px] mt-1 text-right opacity-50">
                   {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-sage-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="h-1.5 w-1.5 bg-sage-300 rounded-full animate-bounce" />
                  <div className="h-1.5 w-1.5 bg-sage-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="h-1.5 w-1.5 bg-sage-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 bg-white border-t">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }} 
            className="flex space-x-4"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Typ je bericht..."
              className="flex-grow p-4 rounded-xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none"
            />
            <Button type="submit" className="h-12 px-6 rounded-xl bg-primary" disabled={!inputText.trim()}>
              <Send className="h-5 w-5 mr-2" />
              Verstuur
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
