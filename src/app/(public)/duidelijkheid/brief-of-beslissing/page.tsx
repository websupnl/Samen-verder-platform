import { SituationGuidePage } from "@/components/shared/SituationGuidePage";

export default function BriefOfBeslissingPage() {
  return (
    <SituationGuidePage
      title="Ik heb een brief of beslissing gekregen"
      intro="Een brief van de rechtbank, jeugdbescherming of een andere organisatie kan veel oproepen. Deze pagina helpt je de belangrijkste onderdelen rustig uit elkaar te halen."
      sections={[
        {
          title: "Waar kun je eerst naar kijken?",
          items: [
            "Van wie komt de brief en op welke datum is die verstuurd?",
            "Gaat het om een verzoek, een beslissing, een uitnodiging of informatie?",
            "Staat er een datum in waarop je moet reageren of ergens moet zijn?",
            "Worden woorden genoemd zoals OTS, machtiging uithuisplaatsing, beschikking of zitting?",
          ],
        },
        {
          title: "Wat betekenen veelgebruikte woorden?",
          items: [
            "OTS betekent ondertoezichtstelling: een jeugdbeschermer krijgt dan een rol bij belangrijke afspraken rond je kind.",
            "Een machtiging uithuisplaatsing is toestemming van de rechter om een kind tijdelijk ergens anders te laten wonen.",
            "Een beschikking is een beslissing van de rechter die op papier is gezet.",
            "Een zitting is een gesprek bij de rechtbank waar betrokkenen hun kant kunnen toelichten.",
          ],
        },
        {
          title: "Wat kun je nu doen?",
          items: [
            "Maak een foto of kopie van de brief en bewaar de envelop ook.",
            "Markeer datums, namen, telefoonnummers en woorden die je niet begrijpt.",
            "Schrijf je vragen op voordat je belt of naar een gesprek gaat.",
            "Vraag om uitleg als je niet zeker weet wat er van je verwacht wordt.",
          ],
        },
      ]}
      questions={[
        "Wat betekent deze brief precies voor mij en mijn kind?",
        "Moet ik iets doen voor een bepaalde datum?",
        "Wie kan mij uitleg geven over deze beslissing?",
        "Kan ik reageren, bezwaar maken of mijn kant toelichten?",
      ]}
      closingNote="Je hoeft niet alles direct te begrijpen. Het helpt vaak al om de brief samen met iemand stap voor stap door te nemen."
    />
  );
}
