import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react";

export default function OuderProfielPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Mijn Profiel</h1>
          <p className="text-sage-600">Beheer je persoonlijke gegevens.</p>
        </div>
        <Button variant="outline">
          <Edit2 className="h-4 w-4 mr-2" />
          Profiel bewerken
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardContent className="pt-8 flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-sage-200 flex items-center justify-center mb-4">
              <User className="h-16 w-16 text-sage-400" />
            </div>
            <h2 className="text-xl font-bold text-sage-900">Maria Janssen</h2>
            <p className="text-sage-500">Ouder</p>
            <div className="mt-6 w-full space-y-3">
              <div className="flex items-center text-sm text-sage-600">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                maria.janssen@example.com
              </div>
              <div className="flex items-center text-sm text-sage-600">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                06 12345678
              </div>
              <div className="flex items-center text-sm text-sage-600">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                Amsterdam
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Over mijn situatie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-sage-400 uppercase tracking-wider">Achtergrond</p>
              <p className="text-sage-700 leading-relaxed">
                Mijn zoon Liam (6) is sinds 2 maanden uit huis geplaatst. Ik heb moeite met de communicatie met de gezinsvoogd en voel me vaak niet gehoord tijdens de evaluaties.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-sage-400 uppercase tracking-wider">Hulpvraag aan Buddy</p>
              <p className="text-sage-700 leading-relaxed">
                Ik zoek vooral iemand die me kan helpen met het voorbereiden van de gesprekken en die met me mee kan kijken naar de verslagen die worden geschreven.
              </p>
            </div>
            <div className="pt-4 border-t border-sage-100">
              <p className="text-xs text-sage-400">Geregistreerd sinds 10 maart 2024</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
