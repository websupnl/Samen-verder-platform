import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bell, Lock, Eye, Globe } from "lucide-react";

export default function OuderInstellingenPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Instellingen</h1>
        <p className="text-sage-600">Beheer je account en voorkeuren.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notificaties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sage-900">E-mail notificaties</p>
                <p className="text-sm text-sage-500">Ontvang een mail bij nieuwe berichten van je buddy.</p>
              </div>
              <div className="h-6 w-11 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-sage-50">
              <div>
                <p className="font-medium text-sage-900">Browser meldingen</p>
                <p className="text-sm text-sage-500">Toon meldingen op je bureaublad.</p>
              </div>
              <div className="h-6 w-11 bg-sage-200 rounded-full relative">
                <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary" />
              Beveiliging
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">Wachtwoord wijzigen</Button>
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">Account verwijderen</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
