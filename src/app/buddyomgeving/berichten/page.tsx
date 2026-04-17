"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MessageSquare, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Session {
  id: string;
  status: string;
  created_at: string;
  updated_at: string;
  last_message: string | null;
  last_message_at: string | null;
}

export default function BuddyBerichtenPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await fetch('/api/chat/sessions');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setSessions(data);
          } else {
            // Fallback for demo
            setSessions([
              { 
                id: 'demo-1', 
                status: 'actief', 
                created_at: new Date(Date.now() - 3600000).toISOString(), 
                updated_at: new Date().toISOString(), 
                last_message: 'Bedankt voor de hulp gisteren, dat waardeer ik enorm.', 
                last_message_at: new Date().toISOString() 
              },
              { 
                id: 'demo-2', 
                status: 'nieuw', 
                created_at: new Date(Date.now() - 7200000).toISOString(), 
                updated_at: new Date(Date.now() - 7200000).toISOString(), 
                last_message: 'Ik heb een vraag over de zitting van aanstaande donderdag.', 
                last_message_at: new Date(Date.now() - 7200000).toISOString() 
              }
            ]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch sessions", error);
        // Fallback for demo on error
        setSessions([
          { 
            id: 'demo-1', 
            status: 'actief', 
            created_at: new Date(Date.now() - 3600000).toISOString(), 
            updated_at: new Date().toISOString(), 
            last_message: 'Bedankt voor de hulp gisteren, dat waardeer ik enorm.', 
            last_message_at: new Date().toISOString() 
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
    const interval = setInterval(fetchSessions, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Chatoverzicht</h1>
          <p className="text-sage-600">Beheer de binnengekomen chatverzoeken en actieve gesprekken.</p>
        </div>
      </div>

      {sessions.length === 0 ? (
        <Card className="bg-sage-50/50 border-dashed border-2">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="h-12 w-12 text-sage-300 mb-4" />
            <p className="text-sage-500 font-medium">Nog geen chatgesprekken gevonden.</p>
            <p className="text-sage-400 text-sm">Zodra een ouder een chat start, verschijnt deze hier.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Link key={session.id} href={`/buddyomgeving/chat/${session.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-sage-100 flex items-center justify-center text-primary">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-bold text-sage-900 uppercase text-xs tracking-wider">
                            Anonieme Ouder
                          </p>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            session.status === 'nieuw' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {session.status}
                          </span>
                        </div>
                        <p className="text-sm text-sage-600 line-clamp-1 mt-1">
                          {session.last_message || "Nog geen berichten"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right hidden sm:block">
                        <div className="flex items-center text-xs text-sage-400 space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {session.last_message_at 
                              ? new Date(session.last_message_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                              : new Date(session.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            }
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-sage-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
