import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Settings, Shield, Bell, Database, Globe, Lock } from "lucide-react";

export default function BeheerInstellingenPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Systeeminstellingen</h1>
        <p className="text-sage-600">Configureer het platform en beheer systeemparameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-2">
          {[
            { label: 'Algemeen', icon: Settings, active: true },
            { label: 'Beveiliging', icon: Shield, active: false },
            { label: 'Meldingen', icon: Bell, active: false },
            { label: 'Database', icon: Database, active: false },
            { label: 'Regionale instellingen', icon: Globe, active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                item.active 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-sage-600 hover:bg-sage-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Informatie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">Platform Naam</label>
                <input type="text" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="Samen Verder" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">Contact E-mail (Systeem)</label>
                <input type="email" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="system@samenverder.nl" />
              </div>
              <div className="flex items-center space-x-2 py-2">
                <input type="checkbox" id="maintenance" className="h-4 w-4 rounded border-sage-300 text-primary focus:ring-primary" />
                <label htmlFor="maintenance" className="text-sm text-sage-700 font-medium">Onderhoudsmodus inschakelen</label>
              </div>
              <Button>Systeeminstellingen bijwerken</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">API Configuratie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-sage-50 rounded-xl border border-sage-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-sage-400 uppercase tracking-wider">Production API Key</span>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px]">Reveal</Button>
                </div>
                <div className="font-mono text-sm text-sage-600 truncate">
                  sk_live_51HzPjSJQ6R9aW1X...
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">Rotate Keys</Button>
                <Button variant="outline" size="sm">API Documentation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
