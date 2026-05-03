"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, ClipboardList, TrendingUp, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { demoMatches, demoSessions } from '@/lib/buddy-demo-data';
import { getChatHistory } from '@/lib/chat-client';

interface ChatSession {
  sessionId: string;
  lastMessage: string;
  timestamp: string;
}

export default function BuddyDashboard() {
  const [sessions] = useState<ChatSession[]>(() =>
    demoSessions.map((session) => {
      const storedMessages = getChatHistory(session.sessionId);
      const lastMessage = storedMessages.at(-1);

      return {
        sessionId: session.sessionId,
        lastMessage: lastMessage?.content || session.last_message,
        timestamp: lastMessage?.created_at || session.last_message_at,
      };
    })
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Buddy Dashboard</h1>
          <p className="text-sage-600">Beheer je matches, openstaande vragen en contactmomenten.</p>
        </div>
        <Button>Nieuwe rapportage</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Actieve matches</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">{demoMatches.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Contactmomenten</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">3</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Afspraken te checken</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">2</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Open vragen</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">4</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Mijn Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demoMatches.map((match) => (
                <div key={match.id} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl hover:bg-sage-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-sage-200 flex items-center justify-center text-primary font-bold text-sm">{match.initials}</div>
                    <div>
                      <p className="font-bold text-sage-900">{match.label}</p>
                      <p className="text-xs text-sage-500">{match.status} · {match.nextStep}</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/buddyomgeving/chat/${match.sessionId}`}>Open</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Openstaande Anonieme Chats</CardTitle>
            <MessageCircle className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.length === 0 ? (
                <div className="text-center py-8 text-sage-500">
                  <p>Geen actieve anonieme chats op dit moment.</p>
                </div>
              ) : (
                sessions.map((session) => (
                  <div key={session.sessionId} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl hover:bg-sage-50 transition-all">
                    <div className="flex-grow min-w-0 mr-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Sessie: {session.sessionId}</span>
                        <span className="text-[10px] text-sage-400">
                          {new Date(session.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-sm text-sage-700 truncate">{session.lastMessage}</p>
                    </div>
                    <Link href={`/buddyomgeving/chat/${session.sessionId}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary-dim">
                        Beantwoorden <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
