import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { PublicPageHero } from "@/components/shared/PublicPageHero";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/Animate";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Contact"
        description="Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op. Dit kan ook anoniem."
        align="center"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Stagger className="space-y-6">
              {[
                { icon: Mail, label: "E-mail", value: "info@samenverder.nl" },
                { icon: Phone, label: "Telefoon", value: "085 - 123 4567" },
                { icon: MapPin, label: "Locatie", value: "Postbus 1234, 1000 AB Amsterdam" },
              ].map(({ icon: Icon, label, value }) => (
                <StaggerItem key={label}>
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">{label}</h4>
                        <p className="text-sm text-sage-600">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.1} className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Stuur een bericht</CardTitle>
                  <CardDescription>
                    U kunt dit formulier gebruiken voor al uw vragen. Als u anoniem wilt blijven,
                    hoeft u uw naam en e-mailadres niet in te vullen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Naam (optioneel)</label>
                        <input type="text" className="w-full rounded-xl border border-sage-200 p-2.5" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">E-mailadres (optioneel)</label>
                        <input type="email" className="w-full rounded-xl border border-sage-200 p-2.5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Onderwerp</label>
                      <input type="text" className="w-full rounded-xl border border-sage-200 p-2.5" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Bericht</label>
                      <textarea rows={5} className="w-full rounded-xl border border-sage-200 p-2.5"></textarea>
                    </div>
                    <Button className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Bericht Versturen
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
