import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PublicPageHero } from "@/components/shared/PublicPageHero";
import { TrustBadgesSection } from "@/components/shared/TrustBadgesSection";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const modules = [
  {
    nr: "01",
    title: "Luisteren en verbinding maken",
    text: "Hoe geef je iemand echt het gevoel dat hij gehoord wordt? Je leert actief luisteren, doorvragen en aanwezig zijn zonder je eigen mening op te dringen.",
  },
  {
    nr: "02",
    title: "Het systeem begrijpen",
    text: "Uithuisplaatsing, OTS, Raad voor de Kinderbescherming: wat betekent dat allemaal? Je krijgt een helder beeld van de betrokken instanties en procedures.",
  },
  {
    nr: "03",
    title: "Grenzen en zelfzorg",
    text: "Hoe blijf je betrokken zonder te verzanden? Je leert herkennen wanneer iets te zwaar wordt en hoe je je eigen grenzen bewaakt.",
  },
  {
    nr: "04",
    title: "Privacy en vertrouwelijkheid",
    text: "Als buddy hoor je gevoelige informatie. Je leert wat je daarmee mag en hoe je veilig en discreet omgaat met wat je weet.",
  },
  {
    nr: "05",
    title: "Omgaan met emoties",
    text: "Ouders kunnen verdriet, boosheid of wantrouwen uiten. Je leert daar rustig en constructief mee omgaan, zonder te oordelen.",
  },
  {
    nr: "06",
    title: "Praktijk en terugkoppeling",
    text: "Via rollenspellen en casusbesprekingen oefen je situaties die je als buddy kunt tegenkomen. Daarna bespreek je die samen.",
  },
];

const steps = [
  {
    step: "1",
    title: "Aanmelding en intake",
    text: "Je meldt je aan als buddy. We plannen een kennismakingsgesprek om te kijken of het past en wat je verwachtingen zijn.",
  },
  {
    step: "2",
    title: "Online voorbereiding",
    text: "Je doorloopt een aantal korte online modules in je eigen tempo. Zo kom je goed voorbereid de bijeenkomst in.",
  },
  {
    step: "3",
    title: "Trainingsbijeenkomst",
    text: "Een halve dag samen met andere nieuwe buddies. Praktijk, casusbesprekingen, vragen stellen en kennismaken.",
  },
  {
    step: "4",
    title: "Koppeling en start",
    text: "Na de training word je gekoppeld aan een ouder. Jouw begeleider blijft beschikbaar voor vragen en terugkoppeling.",
  },
];

export default function TrainingPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Jouw training als buddy"
        description="Je hoeft het niet alleen uit te zoeken. Voordat je aan de slag gaat als buddy, bereiden we je goed voor: training, begeleiding en een netwerk van andere buddies."
        image="/images/business-meeting-with-handshake-in-a-bright-workpl-2026-01-09-11-36-35-utc.jpg"
        imageAlt="Buddies in training samen"
        imageFullBleed
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-sage-500">
            <Link href="/aanmelden">Meld je aan als buddy</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Link href="/buddy">Meer over buddy worden</Link>
          </Button>
        </div>
      </PublicPageHero>

      {/* Waarom training */}
      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">Waarom training?</h2>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Ouders in een uithuisplaatsingssituatie bevinden zich in een kwetsbare en complexe positie. Als buddy kom je terecht in gesprekken vol emotie, onduidelijkheid en soms wantrouwen.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                De training zorgt dat je weet wat je kunt verwachten, hoe je het beste kunt luisteren en wanneer je een stapje terug moet doen. Dat is goed voor de ouder en net zo goed voor jou.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Je hoeft geen professional te zijn. Ervaringsdeskundigheid, empathie en het vermogen om te luisteren zijn vaak waardevoller dan een diploma.
              </p>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Mensen in een trainingsomgeving"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainingsmodules */}
      <section className="py-12 md:py-24 bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Wat leer je?</h2>
            <p className="text-lg text-sage-600">
              De training bestaat uit zes onderdelen die je stap voor stap voorbereiden op de rol als buddy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.nr} className="bg-white rounded-2xl border border-sage-100 p-6">
                <div className="text-4xl font-black text-primary/10 leading-none mb-3">{m.nr}</div>
                <h3 className="font-bold text-sage-900 mb-2">{m.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt de training */}
      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Hoe werkt de training?</h2>
            <p className="text-lg text-sage-600">
              De training is compact en praktisch. In vier stappen ga je van aanmelding naar je eerste koppeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="text-5xl font-black text-primary/10 leading-none shrink-0">{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-sage-900 mb-2">{s.title}</h3>
                  <p className="text-sage-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wat je krijgt */}
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-sage-900 mb-6">Wat je als buddy krijgt</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Training en voorbereiding vooraf",
                "Een persoonlijk begeleider die beschikbaar blijft",
                "Intervisie met andere buddies",
                "Vergoeding van gemaakte onkosten",
                "Toegang tot het digitale platform",
                "Ondersteuning bij moeilijke situaties",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sage-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Begeleiding */}
      <section className="py-12 md:py-24 bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/two-women-discussing-sitting-in-chairs-indoors-2026-01-11-11-10-36-utc.jpg"
                alt="Buddy in gesprek met begeleider"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">Begeleiding na de training</h2>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                De training is een begin, geen eindpunt. Terwijl je actief bent als buddy, blijft er begeleiding beschikbaar. Je hoeft nooit alleen een moeilijke situatie uit te zoeken.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Een vaste begeleider die je kunt bellen of appen",
                  "Regelmatige intervisiebijeenkomsten met andere buddies",
                  "Laagdrempelig overleg bij twijfel of zorgen",
                  "Ruimte om te stoppen als het niet (meer) past",
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

      {/* CTA */}
      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-900 text-white rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om iets te betekenen?</h2>
            <p className="text-lg text-sage-300 mb-10 max-w-xl mx-auto">
              Meld je aan als buddy. We nemen contact op voor een kennismakingsgesprek en bespreken wat er bij je past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-sage-500">
                <Link href="/aanmelden" className="flex items-center gap-2">
                  Aanmelden als buddy <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">Eerst een vraag stellen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
