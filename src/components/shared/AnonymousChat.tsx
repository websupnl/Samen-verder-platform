"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'buddy';
  timestamp: string;
}

export function AnonymousChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate or get session ID
    if (typeof window !== 'undefined') {
      const storedId = localStorage.getItem('chat_session_id');
      if (storedId) {
        setTimeout(() => setSessionId(storedId), 0);
      } else {
        const newId = Math.random().toString(36).substring(2, 11);
        localStorage.setItem('chat_session_id', newId);
        setTimeout(() => setSessionId(newId), 0);
      }
    }

    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-anonymous-chat', handleOpenChat);
    return () => window.removeEventListener('open-anonymous-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (isOpen && sessionId) {
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
  }, [isOpen, sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      sender: 'user' as const,
      sessionId,
    };

    setInputText('');

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userMessage),
      });

      if (res.ok) {
        const savedMessage = await res.json();
        setMessages(prev => [...prev, savedMessage]);
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="mb-4 bg-white p-4 rounded-2xl shadow-xl border border-primary/10 max-w-[250px] animate-bounce">
          <p className="text-sm font-medium text-sage-900">
            Direct anoniem chatten met een Buddy? Klik hier!
          </p>
        </div>
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full shadow-2xl bg-primary hover:bg-primary-dim flex items-center justify-center transition-transform hover:scale-110"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] h-[600px] flex flex-col">
      <Card className="flex-grow flex flex-col shadow-2xl border-primary/20 overflow-hidden">
        <CardHeader className="bg-primary text-white p-4 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            <CardTitle className="text-lg">Anonieme Chat</CardTitle>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 bg-sage-50/30">
          {messages.length === 0 && (
            <div className="text-center py-8 text-sage-500">
              <Bot className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p className="text-sm">Stel je vraag en een buddy zal je zo snel mogelijk helpen.</p>
            </div>
          )}
          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                  m.sender === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center mb-1 space-x-1 opacity-70 text-[10px] uppercase font-bold tracking-wider">
                  {m.sender === 'user' ? (
                    <><span>Jij</span><User className="h-3 w-3" /></>
                  ) : (
                    <><span>Buddy</span><Bot className="h-3 w-3" /></>
                  )}
                </div>
                {m.text}
                <div className="text-[9px] mt-1 text-right opacity-50">
                  {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
              placeholder="Typ je bericht..."
              className="flex-grow p-3 rounded-xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none"
            />
            <Button type="submit" size="icon" className="h-11 w-11 rounded-xl bg-primary">
              <Send className="h-5 w-5" />
            </Button>
          </form>
          <p className="text-[10px] text-center mt-3 text-sage-400">
            Dit gesprek is volledig anoniem en veilig.
          </p>
        </div>
      </Card>
    </div>
  );
}
