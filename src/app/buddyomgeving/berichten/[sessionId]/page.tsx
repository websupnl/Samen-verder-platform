"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send, ArrowLeft, User, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { getDemoMessages } from '@/lib/buddy-demo-data';
import {
  createChatMessage,
  getChatHistory,
  setChatHistory,
  type ChatClientMessage,
} from '@/lib/chat-client';

export default function BuddyChatDetailPage() {
  const { sessionId } = useParams();
  const router = useRouter();
  const sessionKey = sessionId?.toString() || '';
  const [messages, setMessages] = useState<ChatClientMessage[]>(() => {
    if (!sessionKey) return [];
    const storedMessages = getChatHistory(sessionKey);
    if (storedMessages.length > 0) return storedMessages;
    return sessionKey.startsWith('demo-') ? getDemoMessages(sessionKey) : [];
  });
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversationLabel = sessionKey === 'demo-bezoekregeling' ? 'Ouder uit Drachten' : 'Ouder uit Leeuwarden';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionKey) return;

    const buddyMessage = createChatMessage(inputText, 'buddy');
    setMessages(prev => {
      const next = [...prev, buddyMessage];
      setChatHistory(sessionKey, next);
      return next;
    });
    setInputText('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold text-sage-900">Gesprek met {conversationLabel}</h1>
          <p className="text-xs text-sage-500">ID: {sessionKey}</p>
        </div>
      </div>

      <Card className="flex-grow flex flex-col overflow-hidden">
        <CardHeader className="border-b bg-sage-50/50 py-3 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-sage-700">Ouder is online</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs h-8">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
              Markeer als afgerond
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto p-6 space-y-4">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800 mb-6">
            <strong>Buddy-instructie:</strong> Amy heeft het eerste contact opgevangen. In deze demo speelt Amy de buddy en reageert zij op vragen van ouders.
          </div>

          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex ${m.sender_type === 'buddy' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] p-3 rounded-2xl text-sm shadow-sm ${
                  m.sender_type === 'buddy' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : m.sender_type === 'ai'
                    ? 'bg-sage-50 text-sage-900 border border-sage-100 rounded-tl-none'
                    : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1 space-x-1 opacity-70 text-[10px] uppercase font-bold tracking-wider">
                  {m.sender_type === 'buddy' ? (
                    <><span>Jij (Buddy)</span></>
                  ) : m.sender_type === 'ai' ? (
                    <><span>Amy (Buddy)</span><HeartHandshake className="h-3 w-3" /></>
                  ) : (
                    <><span>Ouder</span><User className="h-3 w-3" /></>
                  )}
                </div>
                {m.content}
                <div className="text-[9px] mt-1 text-right opacity-50">
                  {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Typ je reactie als buddy..."
              className="flex-grow p-3 rounded-xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none"
            />
            <Button type="submit" size="icon" className="h-11 w-11 rounded-xl bg-primary">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
