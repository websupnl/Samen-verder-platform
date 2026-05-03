import { SituationGuidePage } from "@/components/shared/SituationGuidePage";

export default function KindUitHuisGeplaatstPage() {
  return (
    <SituationGuidePage
      title="Mijn kind is uit huis geplaatst"
      intro="Na een uithuisplaatsing kan alles tegelijk op je afkomen. Deze pagina zet de eerste vragen, afspraken en contactmomenten overzichtelijk op een rij."
      sections={[
        {
          title: "Wat gebeurt er meestal daarna?",
          items: [
            "Er wordt gekeken waar je kind verblijft en wie het vaste aanspreekpunt is.",
            "Er komen afspraken over contact, bezoek, school, zorg en informatie delen.",
            "Er kunnen gesprekken volgen met jeugdbescherming, pleegzorg of andere betrokkenen.",
            "Soms volgt er een zitting of een evaluatiemoment waarin opnieuw naar de situatie wordt gekeken.",
          ],
        },
        {
          title: "Wie zijn vaak betrokken?",
          items: [
            "De jeugdbeschermer of gezinsvoogd is vaak het eerste aanspreekpunt voor afspraken.",
            "Pleegzorg of een verblijfslocatie kan betrokken zijn bij de dagelijkse zorg.",
            "De rechter neemt beslissingen als er een machtiging of verlenging nodig is.",
            "Een advocaat kan met je meekijken naar juridische vragen en procedures.",
          ],
        },
        {
          title: "Wat kun je nu praktisch doen?",
          items: [
            "Vraag wie je vaste contactpersoon is en hoe je die kunt bereiken.",
            "Schrijf afspraken over bezoek en bellen direct op.",
            "Vraag welke informatie je krijgt over hoe het met je kind gaat.",
            "Neem iemand mee naar gesprekken als dat helpt om rustig te blijven en niets te vergeten.",
          ],
        },
      ]}
      questions={[
        "Waar is mijn kind nu en wie zorgt er dagelijks voor mijn kind?",
        "Wanneer en hoe mag ik contact hebben?",
        "Wie beslist over school, zorg en belangrijke afspraken?",
        "Wanneer wordt de situatie opnieuw besproken?",
      ]}
      closingNote="Rust en overzicht zijn belangrijk. Begin met namen, datums en afspraken; daarna kun je verder kijken."
    />
  );
}
