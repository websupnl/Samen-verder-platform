"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send, ArrowLeft, User, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';

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
          if (data && data.length > 0) {
            setMessages(data);
          } else if (sessionId?.toString().startsWith('demo-')) {
            // Fallback for demo sessions
            setMessages([
              { 
                id: 'm1', 
                content: 'Hallo, ik heb een vraag over hoe ik me moet voorbereiden op het gesprek met de jeugdbeschermer.', 
                sender_type: 'user', 
                created_at: new Date(Date.now() - 3600000).toISOString() 
              },
              { 
                id: 'm2', 
                content: 'Dat is een heel begrijpelijke vraag. Ik kan je daar zeker bij helpen. Heb je al documenten ontvangen?', 
                sender_type: 'ai', 
                created_at: new Date(Date.now() - 3500000).toISOString() 
              },
              { 
                id: 'm3', 
                content: 'Ja, ik heb een stapel papier gekregen maar ik snap er niet veel van.', 
                sender_type: 'user', 
                created_at: new Date(Date.now() - 3400000).toISOString() 
              }
            ]);
          }
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

    const textToSend = inputText;
    setInputText('');

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToSend,
          senderType: 'buddy',
          sessionId
        }),
      });

      if (res.ok) {
        const savedMessage = await res.json();
        setMessages(prev => [...prev, savedMessage]);
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
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-sage-900 font-headline">Gesprek met ouder</h1>
          <p className="text-sm text-sage-500 font-body">Sessie ID: {sessionId}</p>
        </div>
      </div>

      <Card className="flex-grow flex flex-col overflow-hidden rounded-3xl border-sage-200/50 shadow-sm">
        <CardHeader className="border-b bg-sage-50/50 p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-sage-700 font-headline">Ouder is online</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs h-9 rounded-xl border-sage-200">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Markeer als afgerond
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto p-6 space-y-4 bg-white">
          <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl text-sm text-primary-dim mb-6 leading-relaxed">
            <div className="flex items-center mb-1 font-bold">
              <HeartHandshake className="h-4 w-4 mr-2" />
              Buddy-instructie
            </div>
            <p>De AI heeft het eerste contact opgevangen. Je kunt nu het gesprek overnemen. Zodra jij reageert, neemt de AI een stapje terug.</p>
          </div>

          {messages.length === 0 ? (
             <div className="text-center py-12 text-sage-400 italic font-body">
               Nog geen berichten in dit gesprek.
             </div>
          ) : messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex ${m.sender_type === 'buddy' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                  m.sender_type === 'buddy' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : m.sender_type === 'ai'
                    ? 'bg-amber-50/50 text-sage-900 border border-amber-100 rounded-tl-none italic'
                    : 'bg-sage-50 text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1.5 space-x-1.5 opacity-70 text-[11px] uppercase font-bold tracking-wider">
                  {m.sender_type === 'buddy' ? (
                    <><span>Jij (Buddy)</span><HeartHandshake className="h-3 w-3" /></>
                  ) : m.sender_type === 'ai' ? (
                    <><span>AI Buddy Assist</span><Sparkles className="h-3 w-3" /></>
                  ) : (
                    <><span>Ouder</span><User className="h-3 w-3" /></>
                  )}
                </div>
                <div className="whitespace-pre-wrap">{m.content}</div>
                <div className="text-[10px] mt-2 text-right opacity-60 font-medium">
                  {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-6 bg-white border-t border-sage-100">
          <form onSubmit={handleSendMessage} className="flex space-x-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Typ je bericht aan de ouder..."
              rows={1}
              className="flex-grow p-4 rounded-2xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none resize-none transition-all focus:bg-white focus:shadow-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as unknown as React.FormEvent);
                }
              }}
            />
            <Button type="submit" className="h-[52px] px-8 rounded-2xl bg-primary hover:bg-primary-dim shadow-md active:scale-95 transition-all">
              <Send className="h-5 w-5 mr-2" />
              <span className="font-bold">Verstuur</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
