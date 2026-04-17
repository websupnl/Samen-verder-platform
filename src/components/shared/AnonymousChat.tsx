"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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

export function AnonymousChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate or get session ID
    if (typeof window !== 'undefined') {
      const storedId = localStorage.getItem('chat_session_id');
      if (storedId) {
        setSessionId(storedId);
      } else {
        // Create new session via API
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
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || !sessionId) return;

    const userMessage = {
      content: text,
      sender_type: 'user' as const,
      sessionId,
    };

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
      // In a real app, AI response would come via the same or another request
      // Polling will pick it up, but we keep typing indicator for a bit
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
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
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <CardTitle className="text-lg">Voorbeeldgesprek met een buddy</CardTitle>
            </div>
            <p className="text-[10px] text-white/80 leading-tight mt-1">
              In deze demo worden reacties automatisch gegenereerd. In de praktijk worden gesprekken opgepakt door echte buddy&apos;s.
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors ml-2">
            <X className="h-6 w-6" />
          </button>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 bg-sage-50/30">
          <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl text-[11px] text-amber-800 mb-2">
            <strong>Let op:</strong> Is er sprake van acute onveiligheid of crisis? Neem direct contact op met 112, Veilig Thuis of je eigen hulpverlener.
          </div>
          
          {messages.length === 0 && (
            <div className="text-center py-8 text-sage-500">
              <Bot className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p className="text-sm font-medium text-sage-900 mb-1">Hoe kunnen we je helpen?</p>
              <p className="text-xs px-4">Heb je vragen of weet je niet waar je moet beginnen? Dit voorbeeldgesprek laat zien hoe een eerste laagdrempelig contactmoment eruit kan zien.</p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[11px] bg-white border border-sage-200 hover:border-primary hover:text-primary transition-all px-3 py-2 rounded-full text-sage-600 shadow-sm"
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
                className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
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
              <div className="bg-white border border-sage-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
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
          <form onSubmit={onFormSubmit} className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Typ je bericht..."
              className="flex-grow p-3 rounded-xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none"
            />
            <Button type="submit" size="icon" className="h-11 w-11 rounded-xl bg-primary" disabled={!inputText.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
