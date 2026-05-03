import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PublicPageHero } from "@/components/shared/PublicPageHero";
import { TrustBadgesSection } from "@/components/shared/TrustBadgesSection";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/Animate";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProfessionalsPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Voor professionals"
        description="Werkt u met ouders die te maken hebben met een uithuisplaatsing? Samen Verder biedt laagdrempelige menselijke steun die aanvult wat u als professional kunt bieden."
        image="/images/business-meeting-with-handshake-in-a-bright-workpl-2026-01-09-11-36-35-utc.jpg"
        imageAlt="Professionals in overleg"
        imageFullBleed
      >
        <div className="flex flex-col gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-sage-500 self-start">
            <Link href="/contact">Neem contact op</Link>
          </Button>
          <div className="flex items-center gap-3 text-sm text-sage-300">
            <span>In samenwerking met</span>
            <Image
              src="/images/WebsUp.nl logo wit.png"
              alt="WebsUp.nl"
              width={120}
              height={41}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </PublicPageHero>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <h2 className="text-3xl font-bold text-sage-900 mb-6">Wat biedt Samen Verder?</h2>
            <p className="text-lg text-sage-600 leading-relaxed mb-6">
              Samen Verder koppelt ouders aan een vrijwillige buddy: iemand die luistert, uitlegt en meedenkt. Geen behandelaar, geen jeugdbeschermer, maar een mens naast de ouder.
            </p>
            <p className="text-lg text-sage-600 leading-relaxed">
              Een buddy kan emotionele steun bieden, helpen bij het begrijpen van brieven en besluiten, of een ouder voorbereiden op een gesprek of zitting. Dit vult aan wat u als professional biedt. Het vervangt formele hulpverlening niet.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Een buddy luistert", text: "Zonder oordeel, zonder agenda. Soms is dat precies wat een ouder nodig heeft naast de formele hulp.", green: true },
              { title: "Een buddy legt uit", text: "Moeilijke taal uit brieven, besluiten of gesprekken vertaald naar begrijpelijke stappen.", green: true },
              { title: "Een buddy denkt mee", text: "Bij de voorbereiding op een zitting, gesprek met de jeugdbeschermer of andere moeilijke momenten.", green: true },
              { title: "Geen behandeling", text: "Een buddy vervangt geen therapie, juridische hulp of jeugdbescherming.", green: false },
              { title: "Geen partij kiezen", text: "Een buddy staat naast de ouder, maar neemt geen standpunt in richting instanties.", green: false },
              { title: "Gratis voor ouders", text: "Er zijn geen kosten verbonden aan het ontvangen van een buddy.", green: false },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className={`p-6 rounded-2xl border h-full ${item.green ? "bg-primary/5 border-primary/10" : "bg-sage-50 border-sage-100"}`}>
                  <h4 className="font-bold text-sage-900 mb-2">{item.title}</h4>
                  <p className="text-sage-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Wanneer doorverwijzen?</h2>
            <p className="text-lg text-sage-600">
              Samen Verder is niet voor elke situatie, maar in de volgende gevallen kan een buddy een zinvolle aanvulling zijn op uw werk.
            </p>
          </FadeUp>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "De ouder is overspoeld en kan informatie moeilijk verwerken",
              "De ouder begrijpt brieven, besluiten of procedures niet goed",
              "De ouder heeft behoefte aan erkenning naast formele hulp",
              "De ouder staat er alleen voor en heeft geen steunsysteem",
              "De ouder heeft wantrouwen richting hulpverlening maar zou wel steun willen",
              "De ouder moet naar een gesprek of zitting en wil zich voorbereiden",
              "De ouder ervaart isolement of heeft moeite om overzicht te houden",
              "U wilt iets bieden naast wat u als professional kunt geven",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-sage-100 h-full">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sage-700 text-sm leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Hoe werkt doorverwijzen?</h2>
            <p className="text-lg text-sage-600">
              Aanmelden is laagdrempelig. Een ouder kan zichzelf aanmelden, maar u kunt ook samen de aanmelding invullen of de ouder er op wijzen.
            </p>
          </FadeUp>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Aanmelden", text: "De ouder meldt zich aan via de website, of u helpt daarbij. Wij nemen binnen 48 uur contact op." },
              { step: "2", title: "Kennismaking", text: "We luisteren naar de situatie en kijken welke ondersteuning past. Geen ingewikkelde intake." },
              { step: "3", title: "Koppeling", text: "We zoeken een passende buddy en stellen voor. Het contact kan telefonisch, via de app of fysiek zijn." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-5">
                  <div className="text-5xl font-black text-primary/10 leading-none shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">{item.title}</h3>
                    <p className="text-sage-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.2} className="mt-12 bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-sage-900 text-lg mb-1">Heeft u vragen of wilt u materiaal ontvangen?</h3>
              <p className="text-sage-600 text-sm">Posters, visitekaartjes of informatie voor in uw organisatie. Neem contact op.</p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact" className="flex items-center gap-2">
                Contact opnemen <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      <TrustBadgesSection />

      <section className="bg-white py-12 md:py-24 border-t border-sage-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Technologie van</h2>
            <Image
              src="/images/websup-color.png"
              alt="WebsUp.nl"
              width={300}
              height={120}
              className="h-24 w-auto mb-6"
            />
            <p className="text-sage-600 max-w-xl mb-10">
              Het Samen Verder platform draait op technologie ontwikkeld door WebsUp.nl, met focus op veiligheid, toegankelijkheid en gebruiksvriendelijkheid.
            </p>
            <div className="flex items-center space-x-8">
              <Image src="/images/websup-color.png" alt="WebsUp.nl" width={160} height={64} className="h-14 w-auto" />
              <div className="h-8 w-px bg-sage-200" />
              <div className="flex items-center gap-2">
                <Image src="/images/favicon en icon voor logo.png" alt="Samen Verder" width={36} height={36} className="h-9 w-auto rounded-lg" />
                <div className="text-xl font-bold italic text-sage-900">Samen Verder</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
