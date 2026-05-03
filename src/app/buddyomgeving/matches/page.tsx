"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, ClipboardList, Filter, MessageCircle, Search, Users } from "lucide-react";
import Link from "next/link";
import { demoMatches } from "@/lib/buddy-demo-data";

export default function MatchesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Mijn Matches</h1>
          <p className="text-sage-600">Ouders die aan jou gekoppeld zijn of waarmee een kennismaking loopt.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoMatches.map((match) => (
          <Card key={match.id} className="bg-white overflow-hidden border-sage-100 hover:border-primary/20 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-sage-100 flex items-center justify-center text-primary font-bold text-lg">
                    {match.initials}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{match.label}</CardTitle>
                    <p className="text-xs text-sage-500">{match.location} · {match.situation}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  match.status === "Kennismaking gepland" ? "bg-blue-50 text-blue-600" : "bg-sage-50 text-sage-600"
                }`}>
                  {match.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {match.needs.map((need) => (
                    <span key={need} className="px-2 py-1 bg-sage-50 text-sage-600 rounded-lg text-xs">
                      {need}
                    </span>
                  ))}
                </div>

                <div className="rounded-2xl bg-sage-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Volgende stap</p>
                  <p className="text-sm text-sage-700">{match.nextStep}</p>
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
                    <ClipboardList className="h-4 w-4 mr-2" />
                    Dossier
                  </Button>
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/buddyomgeving/chat/${match.sessionId}`}>Chatten</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-sage-50/50 border-dashed border-sage-200 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
            <Users className="h-8 w-8 text-sage-400" />
          </div>
          <h3 className="font-bold text-sage-900 mb-1">Nieuwe match?</h3>
          <p className="text-sm text-sage-500 mb-6">Nieuwe aanvragen verschijnen hier pas na een intake en veiligheidscheck.</p>
          <Button variant="outline" size="sm">
            Beschikbaarheid aanpassen
          </Button>
        </Card>
      </div>
    </div>
  );
}
