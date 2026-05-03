import { SituationGuidePage } from "@/components/shared/SituationGuidePage";

export default function GesprekOfZittingPage() {
  return (
    <SituationGuidePage
      title="Ik moet naar een gesprek of zitting"
      intro="Een gesprek of zitting is spannend, zeker als er veel vanaf lijkt te hangen. Voorbereiden helpt om duidelijk te krijgen wat je wilt zeggen en vragen."
      sections={[
        {
          title: "Vooraf voorbereiden",
          items: [
            "Noteer datum, tijd, locatie en wie erbij aanwezig zijn.",
            "Lees brieven of eerdere afspraken nog eens door en markeer wat onduidelijk is.",
            "Schrijf drie punten op die je zeker wilt vertellen.",
            "Schrijf je belangrijkste vragen apart op, zodat je ze bij de hand hebt.",
          ],
        },
        {
          title: "Tijdens het gesprek",
          items: [
            "Vraag om pauze als het te snel gaat of als je iets wilt laten bezinken.",
            "Vraag of afspraken concreet herhaald kunnen worden aan het einde.",
            "Geef aan als je iets niet begrijpt of als woorden anders binnenkomen dan bedoeld.",
            "Vraag wie na het gesprek jouw aanspreekpunt is.",
          ],
        },
        {
          title: "Na afloop",
          items: [
            "Schrijf direct op wat is afgesproken en door wie.",
            "Vraag om een verslag of bevestiging per mail als dat mogelijk is.",
            "Controleer datums voor vervolgafspraken of reacties.",
            "Bespreek het gesprek met iemand die met je mee kan denken.",
          ],
        },
      ]}
      questions={[
        "Wat is het doel van dit gesprek of deze zitting?",
        "Welke beslissing kan er genomen worden?",
        "Wat verwachten jullie concreet van mij?",
        "Wanneer hoor ik wat de volgende stap is?",
      ]}
      closingNote="Je hoeft niet perfect uit je woorden te komen. Een korte voorbereiding maakt vaak al veel verschil."
    />
  );
}
