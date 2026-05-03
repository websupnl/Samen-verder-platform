"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, X, HeartHandshake, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import {
  appendChatMessage,
  createChatMessage,
  getChatHistory,
  getOrCreateChatSessionId,
  setChatHistory,
  type ChatClientMessage,
} from '@/lib/chat-client';

const QUICK_PROMPTS = [
  "Ik weet niet waar ik moet beginnen",
  "Ik snap de brieven niet goed",
  "Ik ben boos en weet niet wat ik moet doen",
  "Welke vragen kan ik stellen?",
  "Wat gebeurt er meestal na een uithuisplaatsing?"
];

export function AnonymousChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState<string>(() => (typeof window === 'undefined' ? '' : getOrCreateChatSessionId()));
  const [messages, setMessages] = useState<ChatClientMessage[]>(() =>
    typeof window === 'undefined' || !sessionId ? [] : getChatHistory(sessionId)
  );
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-anonymous-chat', handleOpenChat);
    return () => window.removeEventListener('open-anonymous-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || !sessionId) return;

    setInputText('');
    setIsTyping(true);

    try {
      const userMessage = createChatMessage(text, 'user');
      const nextMessages = [...messages, userMessage];
      setMessages(nextMessages);
      setChatHistory(sessionId, nextMessages);

      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          senderType: 'user',
          history: messages,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const amyMessage = data.amyMessage;
        if (amyMessage) {
          setMessages(prev => [...prev, amyMessage]);
          appendChatMessage(sessionId, amyMessage);
        }
      }
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsTyping(false);
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat venster */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-full sm:max-w-[400px] h-[calc(100svh-7rem)] sm:h-[600px] flex flex-col origin-bottom-right"
          >
            <Card className="flex-grow flex flex-col shadow-2xl border-primary/20 overflow-hidden rounded-3xl">
              <CardHeader className="bg-primary text-white p-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/favicon en icon voor logo.png"
                    alt="Samen Verder"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-xl"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-400 rounded-full" />
                      <CardTitle className="text-base font-headline">Samen Verder — Chat</CardTitle>
                    </div>
                    <p className="text-xs text-white/80 mt-0.5">Anoniem · Geen aanmelding nodig</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors ml-2"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </CardHeader>

              <CardContent className="flex-grow overflow-y-auto p-5 space-y-4 bg-sage-50/30">
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-xs text-amber-800 leading-relaxed">
                  <strong>Let op:</strong> Acute onveiligheid of crisis? Bel 112, Veilig Thuis of je eigen hulpverlener.
                </div>

                {messages.length === 0 && (
                  <div className="text-center py-8 text-sage-500">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartHandshake className="h-8 w-8 text-primary opacity-80" />
                    </div>
                    <p className="text-base font-semibold text-sage-900 mb-1">Waar kan ik je mee helpen?</p>
                    <p className="text-sm text-sage-500 px-4 leading-relaxed">
                      Stel een vraag, of begin gewoon met wat er nu door je hoofd gaat.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => handleSendMessage(prompt)}
                          className="text-xs bg-white border border-sage-200 hover:border-primary hover:text-primary transition-all px-4 py-2.5 rounded-2xl text-sage-600 shadow-sm text-left"
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
                          <><span>Amy</span><HeartHandshake className="h-3 w-3" /></>
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

              <div className="p-4 bg-white border-t border-sage-100">
                <form onSubmit={onFormSubmit} className="flex gap-2">
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
                    <Send className="h-5 w-5 text-white" />
                  </Button>
                </form>
                <p className="text-[10px] text-sage-400 mt-2.5 text-center">
                  In deze demo reageert een Buddy automatisch.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Knop-rij: tooltip links, knop rechts */}
      <div className="flex items-end justify-end gap-3">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.2 }}
              className="relative hidden sm:block bg-white rounded-2xl shadow-xl border border-outline-variant/20 p-4 w-[230px] mb-2"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2.5 right-2.5 text-sage-400 hover:text-sage-700 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <p className="text-sm font-bold text-on-background mb-1 pr-4">
                Zit je met vragen?
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Chat anoniem met een buddy. Geen aanmelding, geen naam — gewoon een luisterend oor.
              </p>
              {/* Staartje naar rechts */}
              <div className="absolute -right-2 bottom-5 w-4 h-4 bg-white border-t border-r border-outline-variant/20 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-surface-container-highest hover:bg-surface-variant'
              : 'bg-primary hover:bg-primary-dim hover:scale-105 active:scale-95'
          }`}
        >
          {isOpen ? (
            <X className="h-7 w-7 text-on-surface" />
          ) : (
            <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              forum
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
