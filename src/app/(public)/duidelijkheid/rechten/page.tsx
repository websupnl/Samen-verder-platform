import { SituationGuidePage } from "@/components/shared/SituationGuidePage";

export default function RechtenPage() {
  return (
    <SituationGuidePage
      title="Ik wil weten wat mijn rechten zijn"
      intro="Het is logisch dat je wilt weten waar je aan toe bent. Deze pagina geeft geen juridisch advies, maar helpt je bepalen welke vragen belangrijk zijn en wanneer extra hulp verstandig is."
      sections={[
        {
          title: "Waar kun je op letten?",
          items: [
            "Vraag welke beslissing is genomen en op basis waarvan.",
            "Controleer welke termijnen, zittingen of reactiemomenten in brieven staan.",
            "Vraag welke informatie je mag ontvangen over je kind en over afspraken.",
            "Vraag wat je kunt doen als je het niet eens bent met een beslissing of afspraak.",
          ],
        },
        {
          title: "Wanneer is juridische hulp verstandig?",
          items: [
            "Als er een zitting aankomt en je niet weet wat je kunt verwachten.",
            "Als je een beschikking of verzoekschrift hebt gekregen.",
            "Als je bezwaar wilt maken of jouw kant duidelijk wilt laten meenemen.",
            "Als je niet begrijpt welke gevolgen een beslissing heeft.",
          ],
        },
        {
          title: "Wat kun je verzamelen?",
          items: [
            "Brieven, beschikkingen, verslagen en e-mails.",
            "Een overzicht van afspraken over contact met je kind.",
            "Datums van gesprekken, zittingen en belangrijke gebeurtenissen.",
            "Je eigen vragen en punten die volgens jou niet kloppen of ontbreken.",
          ],
        },
      ]}
      questions={[
        "Welke rechten en plichten heb ik op dit moment?",
        "Kan ik mijn mening of zorgen nog ergens inbrengen?",
        "Heb ik een advocaat nodig voor deze stap?",
        "Welke termijn geldt als ik wil reageren?",
      ]}
      closingNote="Bij juridische twijfel is het verstandig om een advocaat of juridisch loket mee te laten kijken."
    />
  );
}
