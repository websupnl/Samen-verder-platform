"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { User, Users, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AanmeldenPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"ouder" | "buddy" | null>(null);

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-16rem)] justify-center py-12">
      <div className="mx-auto max-w-xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-2 rounded-full flex-1 mx-1 ${s <= step ? 'bg-primary' : 'bg-sage-100'}`}
              />
            ))}
          </div>
          <p className="text-center text-xs text-sage-500 font-medium">STAP {step} VAN 3</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-sage-900">Welkom bij Samen Verder</h1>
              <p className="mt-2 text-sage-600">Laten we beginnen met de eerste stap. Wie bent u?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => { setRole("ouder"); setStep(2); }}
                className={`flex items-center p-6 rounded-3xl border-2 transition-all text-left ${role === 'ouder' ? 'border-primary bg-sage-50' : 'border-sage-100 bg-white hover:border-sage-200'}`}
              >
                <div className="h-12 w-12 rounded-full bg-sage-100 text-primary flex items-center justify-center mr-4">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sage-900">Ik ben een ouder</h3>
                  <p className="text-sm text-sage-600">Ik ben op zoek naar ondersteuning en een buddy.</p>
                </div>
              </button>

              <button 
                onClick={() => { setRole("buddy"); setStep(2); }}
                className={`flex items-center p-6 rounded-3xl border-2 transition-all text-left ${role === 'buddy' ? 'border-primary bg-sage-50' : 'border-sage-100 bg-white hover:border-sage-200'}`}
              >
                <div className="h-12 w-12 rounded-full bg-sage-100 text-primary flex items-center justify-center mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sage-900">Ik ben een buddy</h3>
                  <p className="text-sm text-sage-600">Ik wil graag iemand ondersteunen en me inzetten.</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <Button variant="ghost" size="sm" className="w-fit mb-4" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </Button>
              <CardTitle>Persoonlijke gegevens</CardTitle>
              <CardDescription>Vul uw gegevens in om uw profiel aan te maken.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voornaam</label>
                  <input type="text" className="w-full rounded-xl border border-sage-200 p-2.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Achternaam</label>
                  <input type="text" className="w-full rounded-xl border border-sage-200 p-2.5" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mailadres</label>
                <input type="email" className="w-full rounded-xl border border-sage-200 p-2.5" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Woonplaats</label>
                <input type="text" className="w-full rounded-xl border border-sage-200 p-2.5" />
              </div>
              <Button className="w-full mt-6" onClick={() => setStep(3)}>
                Volgende stap <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-sage-900">Bijna klaar!</h2>
              <p className="text-sage-600">
                We hebben uw aanmelding ontvangen. Er wordt nu een bevestigingsmail gestuurd naar uw e-mailadres.
              </p>
            </div>
            <Card className="bg-sage-50 border-none">
              <CardContent className="pt-6">
                <p className="text-sm text-sage-600 italic">
                  &quot;Bedankt voor uw vertrouwen in Samen Verder. We nemen zo snel mogelijk contact met u op voor een kennismaking.&quot;
                </p>
              </CardContent>
            </Card>
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href={role === 'ouder' ? '/ouderomgeving' : '/buddyomgeving'}>
                  Naar mijn omgeving
                </Link>
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
