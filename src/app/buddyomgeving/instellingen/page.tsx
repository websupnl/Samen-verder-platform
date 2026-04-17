import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Settings, Bell, Lock, User, Eye } from "lucide-react";

export default function BuddyInstellingenPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Instellingen</h1>
        <p className="text-sage-600">Beheer je accountvoorkeuren en meldingen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <nav className="space-y-1">
            {[
              { label: 'Profiel', icon: User, active: true },
              { label: 'Meldingen', icon: Bell, active: false },
              { label: 'Privacy & Veiligheid', icon: Lock, active: false },
              { label: 'Zichtbaarheid', icon: Eye, active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  item.active 
                    ? 'bg-primary text-white' 
                    : 'text-sage-600 hover:bg-sage-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                Persoonlijke Informatie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-sage-700">Voornaam</label>
                  <input type="text" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-sage-700">Achternaam</label>
                  <input type="text" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="de Vries" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">E-mailadres</label>
                <input type="email" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="sarah.devries@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">Telefoonnummer</label>
                <input type="tel" className="w-full p-2 border border-sage-200 rounded-lg" defaultValue="06 12345678" />
              </div>
              <Button className="mt-4">Wijzigingen opslaan</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Wachtwoord wijzigen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">Huidig wachtwoord</label>
                <input type="password" className="w-full p-2 border border-sage-200 rounded-lg" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sage-700">Nieuw wachtwoord</label>
                <input type="password" className="w-full p-2 border border-sage-200 rounded-lg" placeholder="••••••••" />
              </div>
              <Button variant="secondary" className="mt-4">Wachtwoord updaten</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
