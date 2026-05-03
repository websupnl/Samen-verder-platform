import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { PublicPageHero } from "@/components/shared/PublicPageHero";
import { TrustBadgesSection } from "@/components/shared/TrustBadgesSection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Users, Star, BookOpen, Coffee } from "lucide-react";
import Link from "next/link";

export default function BuddyPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Word een Buddy"
        description="Maak een verschil in het leven van een ouder. Jouw tijd en aandacht kunnen de wereld betekenen voor iemand die het even moeilijk heeft."
        image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Twee mensen in een vriendelijk gesprek"
        imageFullBleed
      >
        <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-sage-50">
          <Link href="/aanmelden">Meld je aan als buddy</Link>
        </Button>
      </PublicPageHero>

      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
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

      {/* Split image + tekst sectie */}
      <section className="py-12 md:py-24 bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"
                alt="Buddy en ouder in een ondersteunend gesprek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">Waarom buddy worden?</h2>
              <p className="text-lg text-sage-600 leading-relaxed mb-8">
                Als buddy geef je iets wat niet te kopen is: echte menselijke aandacht en verbinding. Jouw ervaring en betrokkenheid kunnen een ouder helpen om het hoofd boven water te houden in een moeilijke periode.
              </p>
              <ul className="space-y-4">
                {[
                  "Je bepaalt zelf hoeveel tijd je hebt",
                  "Je krijgt begeleiding en training",
                  "Je maakt een concreet verschil",
                  "Onkosten worden vergoed",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sage-700">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustBadgesSection />

      <section className="bg-sage-50 py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-sage-100">
            <h2 className="text-3xl font-bold text-sage-900 mb-8">Veelgestelde vragen voor buddies</h2>
            <FaqAccordion
              items={[
                {
                  question: "Hoeveel tijd kost het?",
                  answer: "Dat bepaal je zelf in overleg met de ouder. Gemiddeld is het 1 tot 2 uur per week.",
                },
                {
                  question: "Krijg ik begeleiding?",
                  answer: "Ja, we bieden trainingen en er is altijd een professional beschikbaar voor overleg.",
                },
                {
                  question: "Zijn er kosten aan verbonden?",
                  answer: "Nee, buddy worden is volledig kosteloos. Eventuele onkosten kunnen worden vergoed.",
                },
              ]}
            />
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
