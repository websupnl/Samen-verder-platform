import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Users, Star, BookOpen, Coffee } from "lucide-react";
import Link from "next/link";

export default function BuddyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Word een Buddy
            </h1>
            <p className="mt-6 text-xl text-sage-50">
              Maak een verschil in het leven van een ouder. Jouw tijd en aandacht 
              kunnen de wereld betekenen voor iemand die het even moeilijk heeft.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-sage-50">
                <Link href="/aanmelden">Meld je aan als buddy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sage-900">Wat doet een buddy?</h2>
            <p className="mt-4 text-lg text-sage-600 max-w-2xl mx-auto">
              Als buddy ben je er voor een ander. Je biedt ondersteuning op basis van 
              gelijkwaardigheid en vertrouwen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coffee,
                title: "Luisterend oor",
                description: "Gewoon even luisteren zonder te oordelen.",
              },
              {
                icon: Star,
                title: "Erkenning",
                description: "De ouder het gevoel geven dat ze er niet alleen voor staan.",
              },
              {
                icon: BookOpen,
                title: "Kennis delen",
                description: "Ervaringen en tips uitwisselen waar de ouder wat aan heeft.",
              },
              {
                icon: Users,
                title: "Sociale activering",
                description: "Samen eropuit gaan en de isolatie doorbreken.",
              },
            ].map((feature, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-sage-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-sage-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-sage-100">
            <h2 className="text-3xl font-bold text-sage-900 mb-8">Veelgestelde vragen voor buddies</h2>
            <div className="space-y-6 text-left">
              {[
                {
                  q: "Hoeveel tijd kost het?",
                  a: "Dat bepaal je zelf in overleg met de ouder. Gemiddeld is het 1 tot 2 uur per week.",
                },
                {
                  q: "Krijg ik begeleiding?",
                  a: "Ja, we bieden trainingen en er is altijd een professional beschikbaar voor overleg.",
                },
                {
                  q: "Zijn er kosten aan verbonden?",
                  a: "Nee, buddy worden is volledig kosteloos. Eventuele onkosten kunnen worden vergoed.",
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h4 className="font-bold text-sage-900">{faq.q}</h4>
                  <p className="mt-2 text-sage-600">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/aanmelden">Start jouw buddy avontuur</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
