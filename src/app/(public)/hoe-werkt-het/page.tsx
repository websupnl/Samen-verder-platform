import { Card, CardContent } from "@/components/ui/Card";
import { UserPlus, Search, Handshake, Heart } from "lucide-react";

export default function HoeWerktHetPage() {
  const stappen = [
    {
      icon: UserPlus,
      title: "1. Aanmelden",
      description: "Maak een account aan als ouder of als buddy. Vul je profiel in zodat we weten wie je bent en wat je zoekt.",
    },
    {
      icon: Search,
      title: "2. Matchen",
      description: "Ons systeem of een beheerder kijkt naar overeenkomsten in behoeften, interesses en locatie.",
    },
    {
      icon: Handshake,
      title: "3. Kennismaken",
      description: "Er vindt een eerste gesprek plaats (vaak met een professional erbij) om te kijken of er een klik is.",
    },
    {
      icon: Heart,
      title: "4. Samen Verder",
      description: "Als het klikt, gaan jullie samen aan de slag. Jullie bepalen zelf hoe en wanneer jullie contact hebben.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900 sm:text-5xl">
            Hoe werkt het?
          </h1>
          <p className="mt-6 text-xl text-sage-600 max-w-2xl mx-auto">
            Het proces is eenvoudig en veilig. We begeleiden je bij elke stap 
            om een waardevolle verbinding te maken.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-sage-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {stappen.map((stap, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                    <stap.icon className="h-8 w-8" />
                  </div>
                  <Card className="text-center h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-sage-900 text-lg mb-2">{stap.title}</h3>
                      <p className="text-sm text-sage-600 leading-relaxed">{stap.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-sage-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sage-900">Begeleiding bij elke stap</h2>
            <p className="mt-6 text-lg text-sage-600 leading-relaxed">
              We laten je niet zwemmen. Vanaf de aanmelding tot aan het actieve contact 
              is er ondersteuning beschikbaar. Onze professionals houden een oogje in 
              het zeil en zijn er voor vragen of wanneer het even niet lekker loopt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
