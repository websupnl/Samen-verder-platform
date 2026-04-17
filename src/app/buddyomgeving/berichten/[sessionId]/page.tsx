"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send, ArrowLeft, User, Bot, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'buddy' | 'ai';
  created_at: string;
}

export default function BuddyChatDetailPage() {
  const { sessionId } = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sessionId) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/chat/messages?sessionId=${sessionId}`);
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.error("Failed to fetch messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionId) return;

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          senderType: 'buddy',
          sessionId
        }),
      });

      if (res.ok) {
        const savedMessage = await res.json();
        setMessages(prev => [...prev, savedMessage]);
        setInputText('');
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold text-sage-900">Gesprek met Anonieme Ouder</h1>
          <p className="text-xs text-sage-500">ID: {sessionId}</p>
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
            <strong>Buddy-instructie:</strong> De AI heeft het eerste contact opgevangen. Je kunt nu het gesprek overnemen. De AI stopt met reageren zodra jij een bericht stuurt.
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
                    ? 'bg-amber-50 text-sage-900 border border-amber-100 rounded-tl-none italic'
                    : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1 space-x-1 opacity-70 text-[10px] uppercase font-bold tracking-wider">
                  {m.sender_type === 'buddy' ? (
                    <><span>Jij (Buddy)</span></>
                  ) : m.sender_type === 'ai' ? (
                    <><span>AI Assistent (Demo)</span><Bot className="h-3 w-3" /></>
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
