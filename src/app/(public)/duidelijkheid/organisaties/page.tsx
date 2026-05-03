import { SituationGuidePage } from "@/components/shared/SituationGuidePage";

export default function OrganisatiesPage() {
  return (
    <SituationGuidePage
      title="Ik snap de organisaties niet"
      intro="Bij een uithuisplaatsing kunnen veel organisaties tegelijk betrokken zijn. Deze pagina helpt je zien wie welke rol heeft."
      sections={[
        {
          title: "Veelvoorkomende rollen",
          items: [
            "Jeugdbescherming of een gezinsvoogd houdt toezicht en maakt afspraken met ouders en betrokkenen.",
            "De Raad voor de Kinderbescherming onderzoekt soms wat volgens hen nodig is voor de veiligheid of ontwikkeling van een kind.",
            "De rechter beslist over maatregelen zoals OTS of een machtiging uithuisplaatsing.",
            "Pleegzorg of een verblijfslocatie ondersteunt de plek waar je kind tijdelijk woont.",
          ],
        },
        {
          title: "Waarom voelt het soms verwarrend?",
          items: [
            "Organisaties gebruiken vaak eigen woorden en afkortingen.",
            "Niet iedereen beslist over hetzelfde onderdeel.",
            "Soms krijg je informatie via meerdere mensen tegelijk.",
            "Afspraken over contact, zorg en juridische stappen lopen soms door elkaar.",
          ],
        },
        {
          title: "Hoe krijg je overzicht?",
          items: [
            "Maak een lijst met namen, functies, telefoonnummers en e-mailadressen.",
            "Vraag per persoon: waarover mag ik jou bellen of mailen?",
            "Vraag wie eindverantwoordelijk is voor afspraken rond contact met je kind.",
            "Bewaar brieven en mails op datum, zodat je later kunt terugzoeken.",
          ],
        },
      ]}
      questions={[
        "Wat is uw rol in deze situatie?",
        "Waarover kan ik u wel en niet bellen?",
        "Wie neemt uiteindelijk deze beslissing?",
        "Wie is mijn vaste aanspreekpunt?",
      ]}
      closingNote="Als je weet wie waarvoor verantwoordelijk is, wordt het makkelijker om de juiste vraag aan de juiste persoon te stellen."
    />
  );
}
