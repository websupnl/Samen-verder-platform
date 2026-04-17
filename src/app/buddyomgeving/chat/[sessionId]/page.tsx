"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Send, ArrowLeft, Bot, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'buddy';
  timestamp: string;
}

export default function BuddyChatPage() {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const buddyMessage = {
      text: inputText,
      sender: 'buddy' as const,
      sessionId,
    };

    setInputText('');

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buddyMessage),
      });

      if (res.ok) {
        const savedMessage = await res.json();
        setMessages(prev => [...prev, savedMessage]);
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/buddyomgeving">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-sage-900 font-headline">Anonieme Chat</h1>
          <p className="text-sm text-sage-500">Sessie: {sessionId}</p>
        </div>
      </div>

      <Card className="h-[600px] flex flex-col shadow-xl border-sage-100 overflow-hidden">
        <CardHeader className="bg-white border-b p-4 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-green-500 font-medium">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Actief Gesprek</span>
          </div>
          <div className="flex items-center space-x-1 text-sage-400 text-xs">
            <Clock className="h-3 w-3" />
            <span>Laatste bericht: {messages.length > 0 ? new Date(messages[messages.length-1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow overflow-y-auto p-6 space-y-6 bg-sage-50/20">
          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex ${m.sender === 'buddy' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] p-4 rounded-3xl text-sm shadow-sm ${
                  m.sender === 'buddy' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-2 space-x-1 opacity-70 text-[10px] uppercase font-bold tracking-wider">
                  {m.sender === 'buddy' ? (
                    <><span>Jij (Buddy)</span><Bot className="h-3 w-3" /></>
                  ) : (
                    <><span>Gebruiker</span><User className="h-3 w-3" /></>
                  )}
                </div>
                <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                <div className="text-[9px] mt-2 text-right opacity-50">
                  {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex space-x-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Schrijf je antwoord naar de ouder..."
              rows={1}
              className="flex-grow p-4 rounded-2xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none resize-none transition-all focus:bg-white focus:shadow-inner"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as unknown as React.FormEvent);
                }
              }}
            />
            <Button type="submit" size="icon" className="h-[52px] w-[52px] rounded-2xl bg-primary hover:bg-primary-dim self-end">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </form>
          <p className="text-[10px] text-center mt-3 text-sage-400">
            Dit is een anonieme chat. Je bent nu zichtbaar als &apos;Buddy&apos;.
          </p>
        </div>
      </Card>
    </div>
  );
}
