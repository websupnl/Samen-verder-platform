import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, ArrowRight, Heart, AlertCircle, CheckCircle2 } from "lucide-react";

export default function BeheerMatchesPage() {
  const activeMatches = [
    { id: 1, ouder: "Maria Jansen", buddy: "Sarah de Vries", started: "12 mar 2024", lastContact: "2 dagen geleden", health: "Goed" },
    { id: 2, ouder: "Pieter Bakker", buddy: "Jan de Groot", started: "05 apr 2024", lastContact: "Vandaag", health: "Aandacht nodig" },
  ];

  const pendingRequests = [
    { id: 3, ouder: "Karin Smit", location: "Utrecht", registered: "18 apr 2024", preferences: "Ervaring met autisme" },
    { id: 4, ouder: "Johan Visser", location: "Amsterdam", registered: "17 apr 2024", preferences: "Geen voorkeur" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Match Beheer</h1>
        <p className="text-sage-600">Monitor actieve koppelingen en maak nieuwe matches.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-primary" />
                Actieve Matches
              </div>
              <span className="text-xs font-normal text-sage-500">{activeMatches.length} Koppelingen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeMatches.map((match) => (
                <div key={match.id} className="p-4 border border-sage-100 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sage-900">{match.ouder}</span>
                      <ArrowRight className="h-4 w-4 text-sage-400" />
                      <span className="font-bold text-sage-900">{match.buddy}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      match.health === 'Goed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {match.health}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-sage-500">
                    <div>Gestart: {match.started}</div>
                    <div>Laatst: {match.lastContact}</div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="w-full">Bekijk Dossier</Button>
                    <Button variant="ghost" size="sm" className="w-full text-red-600 hover:bg-red-50">Beëindig Match</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                Nieuwe Aanvragen
              </div>
              <span className="text-xs font-normal text-sage-500">{pendingRequests.length} Wachtend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((req) => (
                <div key={req.id} className="p-4 border border-sage-100 rounded-2xl bg-orange-50/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-sage-900">{req.ouder}</h4>
                      <p className="text-xs text-sage-500">{req.location} • Geregistreerd: {req.registered}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-dim">Match Vinden</Button>
                  </div>
                  <div className="text-sm text-sage-700 bg-white/50 p-2 rounded-lg mt-2">
                    <span className="font-medium">Wens:</span> {req.preferences}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
