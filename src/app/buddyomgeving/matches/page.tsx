"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Search, Filter, MessageCircle, Calendar, ExternalLink } from "lucide-react";
import Link from 'next/link';

const matches = [
  {
    id: 1,
    name: "Maria Jansen",
    age: 42,
    location: "Amsterdam",
    status: "Wekelijks contact",
    lastContact: "2 dagen geleden",
    since: "Maart 2024",
    needs: ["Administratie", "Taalbeheersing"],
    image: "MJ"
  },
  {
    id: 2,
    name: "Pieter Bakker",
    age: 35,
    location: "Utrecht",
    status: "Maandelijks contact",
    lastContact: "5 dagen geleden",
    since: "Januari 2024",
    needs: ["Netwerk opbouwen", "Coaching"],
    image: "PB"
  },
  {
    id: 3,
    name: "Hassan Al-Saeed",
    age: 29,
    location: "Rotterdam",
    status: "In kennismaking",
    lastContact: "Vandaag",
    since: "April 2024",
    needs: ["Werk zoeken", "CV hulp"],
    image: "HA"
  }
];

export default function MatchesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Mijn Matches</h1>
          <p className="text-sage-600">Overzicht van alle personen die je momenteel begeleidt.</p>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage-400" />
            <input 
              type="text" 
              placeholder="Zoeken..." 
              className="pl-10 pr-4 py-2 bg-white border border-sage-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="bg-white overflow-hidden border-sage-100 hover:border-primary/20 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-sage-100 flex items-center justify-center text-primary font-bold text-lg">
                    {match.image}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{match.name}</CardTitle>
                    <p className="text-xs text-sage-500">{match.location} • {match.age} jaar</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  match.status === 'In kennismaking' ? 'bg-blue-50 text-blue-600' : 'bg-sage-50 text-sage-600'
                }`}>
                  {match.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {match.needs.map((need, i) => (
                    <span key={i} className="px-2 py-1 bg-sage-50 text-sage-600 rounded-lg text-xs">
                      {need}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-sage-50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sage-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Sinds
                    </span>
                    <span className="font-medium text-sage-900">{match.since}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sage-500 flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> Laatst contact
                    </span>
                    <span className="font-medium text-sage-900">{match.lastContact}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Dossier
                  </Button>
                  <Button size="sm" className="w-full">
                    Chatten
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Placeholder for adding new match/becoming available */}
        <Card className="bg-sage-50/50 border-dashed border-sage-200 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
            <Users className="h-8 w-8 text-sage-400" />
          </div>
          <h3 className="font-bold text-sage-900 mb-1">Nieuwe Match?</h3>
          <p className="text-sm text-sage-500 mb-6">Er zijn momenteel geen nieuwe aanvragen die bij jouw profiel passen.</p>
          <Button variant="outline" size="sm">
            Bekijk wachtlijst
          </Button>
        </Card>
      </div>
    </div>
  );
}
