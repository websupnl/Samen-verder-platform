import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CalendarDays, FileText, MessageCircle, Phone, ShieldAlert, Users } from "lucide-react";
import Link from "next/link";

const firstSteps = [
  {
    icon: FileText,
    title: "Zet alles op papier",
    text: "Schrijf namen, telefoonnummers, datums en afspraken op. Ook als het nog rommelig voelt.",
  },
  {
    icon: CalendarDays,
    title: "Let op datums",
    text: "Kijk of er een gesprek, zitting, bezoekmoment of reactietermijn in een brief staat.",
  },
  {
    icon: Users,
    title: "Neem iemand mee",
    text: "Een rustig persoon naast je kan helpen om vragen te stellen en afspraken te onthouden.",
  },
  {
    icon: MessageCircle,
    title: "Stel je vragen",
    text: "Vraag wat iets betekent, wie beslist en wat de volgende stap is. Dat mag gewoon.",
  },
];

const nextLinks = [
  {
    title: "Mijn kind is uit huis geplaatst",
    text: "Wat gebeurt er meestal daarna en wie zijn betrokken?",
    href: "/duidelijkheid/kind-uit-huis-geplaatst",
  },
  {
    title: "Ik heb een brief of beslissing gekregen",
    text: "Hulp bij OTS, machtiging, beschikking en datums.",
    href: "/duidelijkheid/brief-of-beslissing",
  },
  {
    title: "Ik moet naar een gesprek of zitting",
    text: "Voorbereiden zonder alles uit je hoofd te hoeven doen.",
    href: "/duidelijkheid/gesprek-of-zitting",
  },
];

export default function WatNuPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary font-headline">
              Eerste overzicht
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-on-background font-headline text-balance">
              Ik zit midden in een uithuisplaatsing. Wat nu?
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-8 text-on-surface-variant font-body">
              Je hoeft niet alles tegelijk op te lossen. Begin met overzicht: wie is betrokken, welke afspraken liggen er, en welke vraag moet als eerste beantwoord worden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {firstSteps.map((step) => (
              <Card key={step.title} className="bg-surface-container-low border-outline-variant/20 shadow-none">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-primary-container text-primary flex items-center justify-center mb-6">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-on-background font-headline mb-3">
                    {step.title}
                  </h2>
                  <p className="text-on-surface-variant leading-7 font-body">
                    {step.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            <div className="rounded-[2rem] bg-white border border-outline-variant/20 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-background font-headline mb-8">
                Kies waar je nu mee verder wilt
              </h2>
              <div className="space-y-4">
                {nextLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block rounded-3xl bg-surface-container-low p-6 hover:bg-primary-container/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-on-background font-headline mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-6 text-on-surface-variant font-body">
                          {item.text}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-on-surface text-surface p-8 md:p-10">
              <h2 className="text-2xl font-extrabold font-headline mb-4">
                Wil je dat iemand meekijkt?
              </h2>
              <p className="text-sm leading-6 text-surface/75 font-body mb-8">
                Als je vastloopt in brieven, afspraken of vragen, kun je contact opnemen. Dan kijken we met je mee wat een logische volgende stap is.
              </p>
              <Button asChild className="w-full rounded-full h-14 font-bold">
                <Link href="/contact">Neem contact op</Link>
              </Button>
            </aside>
          </div>

          <div className="mt-12 rounded-[2rem] border border-outline-variant/20 bg-surface-container-low p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="h-12 w-12 rounded-2xl bg-white text-primary flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="font-extrabold text-on-background font-headline mb-2">
                  Is er direct gevaar?
                </h2>
                <p className="text-sm leading-6 text-on-surface-variant font-body">
                  Bel 112 bij direct gevaar. Heb je dringend iemand nodig om mee te praten, dan kun je ook contact opnemen met De Luisterlijn of 113 Zelfmoordpreventie.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:112" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary hover:bg-primary-dim transition-colors">
                  <Phone className="h-4 w-4" />
                  112
                </a>
                <a href="tel:0880767000" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-on-surface hover:bg-surface-container-high transition-colors">
                  Luisterlijn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
