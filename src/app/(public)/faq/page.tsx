import { PublicPageHero } from "@/components/shared/PublicPageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is Samen Verder gratis?",
      answer: "Ja. Een buddy via Samen Verder hoort gratis te zijn voor ouders. Het aanbod is bedoeld als laagdrempelige steun wanneer er al genoeg op je afkomt.",
    },
    {
      question: "Hoe word ik gekoppeld aan een buddy?",
      answer: "Na je aanmelding vindt er een kennismakingsgesprek plaats. Op basis daarvan zoeken we een passende match.",
    },
    {
      question: "Wat als er geen klik is met mijn buddy?",
      answer: "Dat kan gebeuren. Geef het aan bij je contactpersoon, dan kijken we samen naar een andere oplossing.",
    },
    {
      question: "Is mijn privacy gewaarborgd?",
      answer: "Absoluut. We gaan zeer zorgvuldig om met je gegevens en communicatie verloopt via een beveiligde omgeving.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PublicPageHero
        title="Veelgestelde vragen"
        description="Antwoorden op vragen die vaak terugkomen over Samen Verder, buddies, privacy en aanmelden."
        align="center"
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:py-24">
        <FaqAccordion items={faqs} />
      </section>
    </div>
  );
}
