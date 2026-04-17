import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Heart, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sage-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-sage-900 sm:text-6xl">
              Samen staan we sterker
            </h1>
            <p className="mt-6 text-lg leading-8 text-sage-600 max-w-2xl mx-auto">
              Een platform dat ouders en buddies met elkaar verbindt. Voor steun, 
              begrip en een luisterend oor in tijden dat het nodig is.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/aanmelden">Ik zoek hulp</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/buddy">Ik wil helpen</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
          <div className="aspect-square w-96 rounded-full bg-primary" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
          <div className="aspect-square w-96 rounded-full bg-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <Card className="border-none shadow-none text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-sage-900">Ondersteuning</h3>
                <p className="mt-2 text-sage-600">
                  Vind een buddy die u begrijpt en ondersteunt in uw dagelijkse uitdagingen.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-sage-900">Verbinding</h3>
                <p className="mt-2 text-sage-600">
                  Bouw waardevolle relaties op met mensen die zich vrijwillig inzetten voor anderen.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-sage-900">Veiligheid</h3>
                <p className="mt-2 text-sage-600">
                  Een afgeschermde omgeving waar privacy en veiligheid voorop staan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Klaar om de eerste stap te zetten?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-sage-50">
              Meld u vandaag nog aan en ontdek wat we voor elkaar kunnen betekenen.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-sage-50">
                <Link href="/aanmelden">
                  Nu Aanmelden <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
