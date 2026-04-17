import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">Contact</h1>
          <p className="mt-4 text-lg text-sage-600 max-w-2xl mx-auto">
            Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op. 
            Dit kan ook anoniem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">E-mail</h4>
                  <p className="text-sm text-sage-600">info@samenverder.nl</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Telefoon</h4>
                  <p className="text-sm text-sage-600">085 - 123 4567</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Locatie</h4>
                  <p className="text-sm text-sage-600">Postbus 1234, 1000 AB Amsterdam</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2">
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
        </div>
      </div>
    </div>
  );
}
