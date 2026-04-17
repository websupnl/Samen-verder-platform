"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, ClipboardList, TrendingUp, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from 'next/link';

interface ChatSession {
  sessionId: string;
  lastMessage: string;
  timestamp: string;
}

export default function BuddyDashboard() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await fetch('/api/chat/sessions');
        if (res.ok) {
          const data = await res.json();
          setSessions(data);
        }
      } catch (error) {
        console.error("Failed to fetch sessions", error);
      }
    };

    fetchSessions();
    const interval = setInterval(fetchSessions, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Buddy Dashboard</h1>
          <p className="text-sage-600">Beheer je matches en bekijk je voortgang.</p>
        </div>
        <Button>Nieuwe rapportage</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Actieve Matches</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">2</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Uren deze maand</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">8.5</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Rapporten</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">12</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Impact Score</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">9.4</p>
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
              {[
                { name: "Maria Jansen", status: "Wekelijks contact", last: "2 dagen geleden" },
                { name: "Pieter Bakker", status: "Maandelijks contact", last: "5 dagen geleden" },
              ].map((match, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl hover:bg-sage-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-sage-200" />
                    <div>
                      <p className="font-bold text-sage-900">{match.name}</p>
                      <p className="text-xs text-sage-500">{match.status}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Details</Button>
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
