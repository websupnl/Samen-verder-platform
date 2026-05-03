import Link from "next/link";

export type SituationGuidePageProps = {
  title: string;
  intro: string;
  sections: {
    title: string;
    items: string[];
  }[];
  questions: string[];
  closingNote: string;
};

export function SituationGuidePage({
  title,
  intro,
  sections,
  questions,
  closingNote,
}: SituationGuidePageProps) {
  return (
    <div className="flex flex-col w-full bg-surface">
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/#duidelijkheid" className="text-sm font-bold text-primary hover:underline font-headline">
            Terug naar overzicht
          </Link>
          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-on-background font-headline text-balance">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-on-surface-variant font-body">
            {intro}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="rounded-[2rem] bg-surface-container-low p-8 md:p-10 border border-outline-variant/20">
                  <h2 className="text-2xl font-extrabold text-on-background font-headline mb-6">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-on-surface-variant font-body leading-7">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 rounded-[2rem] bg-on-surface text-surface p-8 md:p-10">
              <h2 className="text-2xl font-extrabold font-headline mb-6">
                Vragen die je kunt stellen
              </h2>
              <ul className="space-y-4 mb-8">
                {questions.map((question) => (
                  <li key={question} className="text-sm leading-6 text-surface/80 font-body border-b border-surface/10 pb-4 last:border-b-0">
                    {question}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-6 text-surface/70 font-body mb-8">
                {closingNote}
              </p>
              <Link href="/contact" className="inline-flex w-full justify-center rounded-full bg-primary px-6 py-4 text-sm font-bold text-on-primary hover:bg-primary-dim transition-colors font-headline">
                Neem contact op
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
