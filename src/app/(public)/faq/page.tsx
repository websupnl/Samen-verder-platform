import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function FAQPage() {
  const faqs = [
    {
      q: "Is Samen Verder gratis?",
      a: "Ja, het gebruik van het platform en de ondersteuning door een buddy is volledig gratis voor ouders.",
    },
    {
      q: "Hoe word ik gekoppeld aan een buddy?",
      a: "Na je aanmelding vindt er een kennismakingsgesprek plaats. Op basis daarvan zoeken we een passende match.",
    },
    {
      q: "Wat als er geen klik is met mijn buddy?",
      a: "Dat kan gebeuren. Geef het aan bij je contactpersoon, dan kijken we samen naar een andere oplossing.",
    },
    {
      q: "Is mijn privacy gewaarborgd?",
      a: "Absoluut. We gaan zeer zorgvuldig om met je gegevens en communicatie verloopt via een beveiligde omgeving.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-bold text-sage-900 mb-8 text-center">Veelgestelde vragen</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-primary text-lg">{faq.q}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sage-600">{faq.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
