"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle, User, HeartHandshake, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showTooltip, setShowTooltip] = useState(true);
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

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-full max-w-[400px] h-[600px] flex flex-col origin-bottom-right"
          >
            <Card className="flex-grow flex flex-col shadow-2xl border-primary/20 overflow-hidden rounded-3xl">
              <CardHeader className="bg-primary text-white p-5 flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <div className="h-2.5 w-2.5 bg-green-400 rounded-full" />
                    <CardTitle className="text-xl font-headline">Chat met een Buddy</CardTitle>
                  </div>
                  <p className="text-xs text-white/90 leading-tight mt-1">
                    Je staat er niet alleen voor. We zijn er om te luisteren.
                  </p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors ml-2"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </CardHeader>
              
              <CardContent className="flex-grow overflow-y-auto p-5 space-y-4 bg-sage-50/30">
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-xs text-amber-800 mb-2 leading-relaxed">
                  <p><strong>Let op:</strong> Is er sprake van acute onveiligheid of crisis? Neem direct contact op met 112, Veilig Thuis of je eigen hulpverlener.</p>
                </div>
                
                {messages.length === 0 && (
                  <div className="text-center py-10 text-sage-500">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartHandshake className="h-8 w-8 text-primary opacity-80" />
                    </div>
                    <p className="text-base font-semibold text-sage-900 mb-2">Hoe kunnen we je helpen?</p>
                    <p className="text-sm px-6 leading-relaxed">Heb je vragen of wil je gewoon even je verhaal kwijt? Een Buddy denkt graag met je mee.</p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => handleSendMessage(prompt)}
                          className="text-xs bg-white border border-sage-200 hover:border-primary hover:text-primary transition-all px-4 py-2.5 rounded-2xl text-sage-600 shadow-sm text-left max-w-full"
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
                      className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                        m.sender_type === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-white text-sage-900 border border-sage-100 rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-center mb-1.5 space-x-1.5 opacity-70 text-[11px] uppercase font-bold tracking-wider">
                        {m.sender_type === 'user' ? (
                          <><span>Jij</span><User className="h-3 w-3" /></>
                        ) : (
                          <><span>Buddy</span><HeartHandshake className="h-3 w-3" /></>
                        )}
                      </div>
                      {m.content}
                      <div className="text-[10px] mt-2 text-right opacity-60">
                        {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-sage-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                      <div className="flex space-x-1.5">
                        <div className="h-2 w-2 bg-sage-300 rounded-full animate-bounce" />
                        <div className="h-2 w-2 bg-sage-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="h-2 w-2 bg-sage-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              <div className="p-5 bg-white border-t border-sage-100">
                <form onSubmit={onFormSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Typ je bericht..."
                    className="flex-grow p-3.5 rounded-2xl bg-sage-50 border-none focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="h-12 w-12 rounded-2xl bg-primary hover:bg-primary-dim shadow-md transition-all active:scale-95" 
                    disabled={!inputText.trim()}
                  >
                    <Send className="h-5.5 w-5.5 text-white" />
                  </Button>
                </form>
                <p className="text-[10px] text-sage-400 mt-3 text-center">
                  In deze demo reageert een Buddy automatisch.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-0 mb-2 mr-2 bg-white p-4 rounded-2xl shadow-xl border border-primary/10 w-[220px] pointer-events-none"
            >
              <p className="text-sm font-medium text-sage-900 leading-snug">
                Direct anoniem chatten met een Buddy? Klik hier!
              </p>
              <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-primary/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <Button 
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-sage-200 hover:bg-sage-300' : 'bg-primary hover:bg-primary-dim hover:scale-105 active:scale-95'
          }`}
        >
          {isOpen ? (
            <X className="h-8 w-8 text-sage-700" />
          ) : (
            <MessageCircle className="h-8 w-8 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
}
