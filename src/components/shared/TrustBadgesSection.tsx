import { FileCheck2, GraduationCap, LockKeyhole, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: FileCheck2,
    label: "VOG",
    title: "VOG verplicht voor buddies",
    text: "Actieve buddies moeten een Verklaring Omtrent het Gedrag kunnen overleggen voordat zij worden gekoppeld.",
  },
  {
    icon: ShieldCheck,
    label: "Screening",
    title: "Zorgvuldige kennismaking",
    text: "We kijken niet alleen naar beschikbaarheid, maar ook naar motivatie, grenzen en passende ondersteuning.",
  },
  {
    icon: GraduationCap,
    label: "Begeleiding",
    title: "Training en aanspreekpunt",
    text: "Buddies krijgen duidelijke afspraken, basisuitleg en een aanspreekpunt wanneer situaties ingewikkeld worden.",
  },
  {
    icon: LockKeyhole,
    label: "Privacy",
    title: "Veilig omgaan met informatie",
    text: "Gesprekken en gegevens vragen om rust, zorgvuldigheid en duidelijke privacy-afspraken.",
  },
];

export function TrustBadgesSection() {
  return (
    <section className="py-24 bg-white border-y border-outline-variant/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary font-headline">
              Veiligheid en vertrouwen
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight">
              Niet zomaar iemand naast een ouder
            </h2>
            <p className="mt-6 text-lg leading-8 text-on-surface-variant font-body">
              Een buddy krijgt contact met ouders in een kwetsbare situatie. Daarom hoort veiligheid vooraf geregeld te zijn: VOG, duidelijke afspraken en begeleiding.
            </p>
            <a
              href="https://www.justis.nl/producten/verklaring-omtrent-het-gedrag/vog-voor-vrijwilligers-en-vrijwilligersorganisaties"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-surface-container-high px-6 py-3 text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors font-headline"
            >
              Meer over VOG bij vrijwilligers
              <span className="material-symbols-outlined ml-2 text-base">open_in_new</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {badges.map((badge) => (
              <div key={badge.title} className="rounded-[2rem] border border-outline-variant/20 bg-surface p-7 shadow-sm">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-on-primary">
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary-container/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary font-headline">
                    {badge.label}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-on-background font-headline">
                  {badge.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant font-body">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
