import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Calendar, Heart, ArrowRight } from "lucide-react";

export default function OuderDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Dashboard</h1>
        <p className="text-sage-600">Een overzicht van uw recente activiteiten en match.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-white">
          <CardHeader>
            <CardTitle className="text-lg">Mijn Buddy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-white/20" />
              <div>
                <p className="font-bold">Sarah de Vries</p>
                <p className="text-xs text-sage-100">Sinds 12 maart 2024</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full bg-white text-primary hover:bg-sage-50">
              Bericht sturen
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Volgende afspraak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sage-900">Donderdag 18 april</p>
                <p className="text-sm text-sage-600">14:00 - Wandelen in het park</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ongelezen berichten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <p className="text-sage-900 font-medium">2 nieuwe berichten</p>
            </div>
            <Button variant="link" className="p-0 h-auto mt-4 text-primary">
              Naar berichten <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold text-sage-900 mt-12 mb-4">Recente activiteit</h2>
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y divide-sage-100">
            {[
              { text: "Sarah heeft je een bericht gestuurd", time: "2 uur geleden", icon: MessageSquare },
              { text: "Nieuwe afspraak gepland voor donderdag", time: "Gisteren", icon: Calendar },
              { text: "Je profiel is bijgewerkt", time: "2 dagen geleden", icon: Heart },
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between p-4 hover:bg-sage-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-8 rounded-full bg-sage-100 text-primary flex items-center justify-center">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-sage-700">{item.text}</span>
                </div>
                <span className="text-xs text-sage-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
