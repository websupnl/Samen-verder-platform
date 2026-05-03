import Image from "next/image";
import { PublicPageHero } from "@/components/shared/PublicPageHero";

export default function OverOnsPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Over Samen Verder"
        description="Samen Verder is er voor ouders die steun, overzicht en menselijk contact zoeken in een ingewikkelde periode."
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Mensen die samenwerken aan een gemeenschappelijk doel"
        imageFullBleed
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="prose prose-sage lg:prose-lg">
            <p>
              Samen Verder is ontstaan uit de behoefte aan meer verbinding en steun tussen ouders.
              Wij geloven dat niemand er alleen voor hoeft te staan en dat een klein gebaar van een
              buddy een groot verschil kan maken.
            </p>
            <h2 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Onze Missie</h2>
            <p>
              Het creëren van een veilige, toegankelijke en warme omgeving waar mensen elkaar kunnen
              vinden voor ondersteuning op basis van gelijkwaardigheid.
            </p>
            <h2 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Onze Visie</h2>
            <p>
              Een samenleving waarin we weer naar elkaar omkijken en waarin het vragen om hulp
              wordt gezien als een teken van kracht.
            </p>
          </div>
          <div className="space-y-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=900"
                alt="Handen die elkaar vasthouden als teken van steun"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573497701836-9bc9daa1d0da?auto=format&fit=crop&q=80&w=900"
                alt="Warm gesprek in een rustige omgeving"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
