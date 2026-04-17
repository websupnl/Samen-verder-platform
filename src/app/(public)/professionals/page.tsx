import { Button } from "@/components/ui/Button";
import { Building2, ClipboardList, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ProfessionalsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-sage-900 py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Voor Professionals & Partners
            </h1>
            <p className="mt-6 text-xl text-sage-200">
              Werk samen met ons om de ondersteuning voor ouders in uw regio te 
              versterken. Een innovatieve aanpak voor vrijwillige inzet en matching.
            </p>
            <div className="mt-10 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-sage-500">
                <Link href="/contact">Neem contact op</Link>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-sage-300">
                <span>In samenwerking met</span>
                <span className="font-bold text-white tracking-wider">WebsUp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-900">Waarom partner worden?</h2>
              <p className="mt-4 text-lg text-sage-600 leading-relaxed">
                Samen Verder biedt een gestructureerde en veilige manier om 
                vrijwilligerswerk te organiseren. Wij ontlasten professionals door 
                het matchingsproces te faciliteren en de voortgang te monitoren.
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Efficiëntie",
                    text: "Minder administratieve lasten bij het matchen van ouders en buddies.",
                  },
                  {
                    icon: Building2,
                    title: "Schaalbaarheid",
                    text: "Eenvoudig uit te rollen over meerdere wijken of gemeenten.",
                  },
                  {
                    icon: ClipboardList,
                    title: "Inzicht",
                    text: "Anonieme rapportages over de impact en voortgang van trajecten.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-sage-100 text-primary flex items-center justify-center">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sage-900">{item.title}</h4>
                      <p className="text-sage-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sage-50 rounded-3xl p-8 md:p-12 border border-sage-100">
              <h3 className="text-2xl font-bold text-sage-900 mb-6">Partner worden?</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">Organisatienaam</label>
                  <input type="text" className="w-full rounded-xl border border-sage-200 p-3 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">E-mailadres</label>
                  <input type="email" className="w-full rounded-xl border border-sage-200 p-3 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">Bericht</label>
                  <textarea rows={4} className="w-full rounded-xl border border-sage-200 p-3 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
                </div>
                <Button className="w-full">Verstuur Aanvraag</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-sage-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">Technologie van WebsUp</h2>
            <p className="text-sage-600 max-w-xl mb-8">
              Het Samen Verder platform draait op de beproefde technologie van WebsUp, 
              ontwikkeld met een focus op veiligheid, toegankelijkheid en gebruiksvriendelijkheid.
            </p>
            <div className="flex items-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              {/* Placeholder for partner logos */}
              <div className="text-2xl font-black tracking-tighter">WEBSUP</div>
              <div className="h-8 w-px bg-sage-200"></div>
              <div className="text-xl font-bold italic">Samen Verder</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
