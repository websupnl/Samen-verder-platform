import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heart, Star, Calendar, ShieldCheck } from "lucide-react";

export default function OuderBuddyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Mijn Buddy</h1>
        <p className="text-sage-600">Informatie over je gekoppelde buddy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Jouw Buddy: Sarah de Vries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="h-12 w-12" />
              </div>
              <div>
                <p className="text-lg font-bold text-sage-900">Sarah de Vries</p>
                <p className="text-sage-600">Ervaringsdeskundige Buddy</p>
                <div className="flex items-center mt-2 space-x-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="text-xs text-sage-400 ml-2">(12 ouders geholpen)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-sage-900">Over Sarah</h3>
              <p className="text-sage-600 leading-relaxed">
                &quot;Ik ben Sarah en ik weet hoe het voelt als de wereld stilstaat door een uithuisplaatsing. Ik ben er niet om de regels te veranderen, maar om naast je te staan, te luisteren en je te helpen de juiste vragen te stellen.&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-sage-50 border border-sage-100">
                <p className="text-xs font-bold text-primary uppercase mb-1">Beschikbaarheid</p>
                <p className="text-sm text-sage-700">Maandag, Woensdag, Donderdag</p>
              </div>
              <div className="p-4 rounded-xl bg-sage-50 border border-sage-100">
                <p className="text-xs font-bold text-primary uppercase mb-1">Expertise</p>
                <p className="text-sm text-sage-700">Jeugdbescherming, Communicatie</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Veiligheid & Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
              <p className="text-xs text-sage-600">Sarah heeft een geverifieerd profiel en een VOG.</p>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-xs text-sage-600">Gemiddelde reactietijd: binnen 4 uur op werkdagen.</p>
            </div>
            <div className="pt-4">
              <p className="text-[10px] text-sage-400 italic">
                Samen Verder controleert alle buddy&apos;s zorgvuldig op ervaring en integriteit.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
