import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Phone, AlertTriangle, ShieldAlert, LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function WatNuPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-red-50 py-16 sm:py-24 border-b border-red-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-100 text-red-600 mb-6">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-red-900 sm:text-5xl">
            Wat nu? (Directe Hulp)
          </h1>
          <p className="mt-6 text-xl text-red-700 max-w-2xl mx-auto">
            Bevindt u zich in een crisis of heeft u direct hulp nodig? 
            Hieronder vindt u belangrijke nummers en stappen die u nu kunt ondernemen.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 shadow-md">
              <CardHeader className="bg-red-50 border-b border-red-100">
                <CardTitle className="flex items-center text-red-900">
                  <ShieldAlert className="mr-2 h-6 w-6" />
                  Noodgeval? Bel 112
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sage-700 mb-6">
                  In levensbedreigende situaties of wanneer er direct gevaar is voor u 
                  of uw omgeving, bel altijd direct het noodnummer.
                </p>
                <Button asChild variant="destructive" className="w-full h-16 text-xl">
                  <a href="tel:112">
                    <Phone className="mr-2 h-6 w-6" /> Bel 112
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sage-200">
              <CardHeader className="bg-sage-50 border-b border-sage-100">
                <CardTitle className="flex items-center text-sage-900">
                  <LifeBuoy className="mr-2 h-6 w-6" />
                  Luisterend oor nodig?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sage-700 mb-6">
                  Heeft u behoefte aan een gesprek, maar is het geen direct noodgeval? 
                  U kunt 24/7 terecht bij de Luisterlijn.
                </p>
                <div className="space-y-4">
                  <Button asChild variant="outline" className="w-full h-14 justify-start">
                    <a href="tel:0880767000">
                      <Phone className="mr-2 h-5 w-5 text-primary" /> De Luisterlijn: 088 0767 000
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 justify-start">
                    <a href="tel:09000113">
                      <Phone className="mr-2 h-5 w-5 text-primary" /> 113 Zelfmoordpreventie: 0900 0113
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 rounded-3xl border border-sage-100 shadow-sm">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Eerste stappen bij paniek</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-sage-900">Ademhaling</h3>
                <p className="text-sm text-sage-600">Probeer rustig naar je buik te ademen. 4 seconden in, 4 seconden uit.</p>
              </div>
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-sage-900">Zoek contact</h3>
                <p className="text-sm text-sage-600">Bel een bekende, een buur of gebruik een van de bovenstaande nummers.</p>
              </div>
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-full bg-sage-100 text-primary flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-sage-900">Veilige plek</h3>
                <p className="text-sm text-sage-600">Zoek een plek op waar je je veilig voelt, of dit nu thuis is of bij iemand anders.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-primary hover:underline font-medium">
              Terug naar de homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
