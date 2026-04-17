import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Heart, MessageCircle, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OudersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-sage-900 sm:text-5xl">
              U bent niet alleen
            </h1>
            <p className="mt-6 text-xl text-sage-600">
              Als ouder staat u er soms alleen voor. Samen Verder biedt een warme plek 
              waar u ondersteuning kunt vinden van iemand die er echt voor u is.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/aanmelden">Vind een buddy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-900">Wat een buddy voor u kan betekenen</h2>
              <p className="mt-4 text-lg text-sage-600">
                Een buddy is een vrijwilliger die een luisterend oor biedt, meehelpt met 
                praktische zaken of gewoon een kopje koffie met u drinkt.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Emotionele steun en een luisterend oor",
                  "Hulp bij het structureren van uw dag",
                  "Samen wandelen of een activiteit ondernemen",
                  "Ondersteuning bij contact met instanties",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sage-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-sage-100 p-3 text-primary">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sage-900">Warmte & Begrip</h3>
                      <p className="mt-1 text-sage-600">Geen oordeel, alleen oprechte aandacht voor uw situatie.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-sage-100 p-3 text-primary">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sage-900">Altijd Bereikbaar</h3>
                      <p className="mt-1 text-sage-600">Via het platform kunt u veilig en makkelijk communiceren.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-sage-100 p-3 text-primary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sage-900">Veilig & Vertrouwd</h3>
                      <p className="mt-1 text-sage-600">Al onze buddies zijn gescreend en getraind.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-sage-900">Klaar om contact te maken?</h2>
          <p className="mt-4 text-lg text-sage-600 max-w-2xl mx-auto">
            Meld u aan en we gaan samen op zoek naar een buddy die bij u past.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/aanmelden">Aanmelden als ouder</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/hoe-werkt-het">Hoe het werkt</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
