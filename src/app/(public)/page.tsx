"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        {/* 1. Improved Hero */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-surface">
          {/* Decorative background gradient */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-container/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-container/50 text-on-primary-container text-sm font-medium mb-8 font-headline">
                  <span
                    className="material-symbols-outlined text-lg mr-2"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    volunteer_activism
                  </span>
                  Een veilige plek voor ouders
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-background font-headline leading-[1.1] tracking-tight mb-8">
                  Steun voor ouders bij een{" "}
                  <span className="text-primary">gedwongen uithuisplaatsing</span>
                </h1>
                <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl font-body">
                  Je staat er niet alleen voor. Een ervaren buddy luistert zonder
                  oordeel, helpt je overzicht te bewaren in moeilijke gesprekken
                  en vertaalt ingewikkelde taal naar heldere stappen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/aanmelden" className="px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold text-lg hover:shadow-[0_8px_30px_rgba(49,51,48,0.12)] transition-all flex items-center justify-center font-headline">
                    Vraag een buddy aan
                  </Link>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-anonymous-chat'))}
                    className="px-8 py-4 rounded-full bg-surface-container-highest text-on-surface font-bold text-lg hover:bg-surface-variant transition-all flex items-center justify-center font-headline cursor-pointer"
                  >
                    Praat eerst anoniem
                  </button>
                </div>
                <Link
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dim transition-colors font-headline"
                  href="/professionals"
                >
                  Ik ben professional{" "}
                  <span className="material-symbols-outlined ml-1 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              {/* Image Area */}
              <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(49,51,48,0.08)]">
                <Image
                  alt="Ondersteunend gesprek"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NcGl8lWTJ-chnCX6m1RTRhbojYJzwccmcuiyhbS3RLIhbfd64MTlTIHMPpUgk3eQTruGGZg6-I1cnKXNI3MrYq7wfnCTwmS4jynLuFJO-Z4svysuo1c7niK1-cwH5MlkL0S1SLgItABGj-doovR4zRja3JgIfln3Z5-Qkr-hx46PuA8SXq-Cv6rbIsEC4Ccfx2JYJUTD_Y7ARyvgDFZ0r1CxczZnZS1chj5l2_OJDVhMrG3fB8gyJhUPlrBKBMDXbTDsHZT7ihk"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Glass Quote Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-surface/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_32px_rgba(49,51,48,0.08)]">
                  <p className="text-on-background font-medium italic mb-4 font-body leading-relaxed">
                    &quot;Mijn buddy oordeelde niet. Ze was er gewoon voor mij, hielp me
                    ademhalen en brieven begrijpen toen ik de weg kwijt was.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm mr-3 font-headline">
                      M
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-background font-headline">
                        Moeder van 2
                      </p>
                      <p className="text-xs text-on-surface-variant font-body">
                        Geholpen door een buddy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Emotional Reassurance */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl hover:shadow-[0_8px_24px_rgba(49,51,48,0.04)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    psychology
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-background font-headline leading-tight">
                  Je hoeft niet alles vandaag te begrijpen
                </h3>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl hover:shadow-[0_8px_24px_rgba(49,51,48,0.04)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-error-container/30 flex items-center justify-center text-error mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    water_drop
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-background font-headline leading-tight">
                  Boos, verdrietig of wantrouwig zijn is niet vreemd
                </h3>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl hover:shadow-[0_8px_24px_rgba(49,51,48,0.04)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    groups
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-background font-headline leading-tight">
                  Je hoeft dit niet alleen te dragen
                </h3>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl hover:shadow-[0_8px_24px_rgba(49,51,48,0.04)] transition-all group">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    diversity_1
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-background font-headline leading-tight">
                  Een buddy kan naast je staan zonder oordeel
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Target Audience */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                Voor wie is Samen Verder?
              </h2>
              <p className="text-lg text-on-surface-variant font-body">
                We verbinden ouders, professionals en vrijwilligers om samen een
                vangnet te vormen tijdens complexe jeugdzorgtrajecten.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ouders */}
              <div className="relative bg-surface-container-low rounded-[2rem] p-10 overflow-hidden flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-bl-[100px] opacity-50"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm mb-8 z-10">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    family_restroom
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-on-background font-headline mb-4 z-10">
                  Voor ouders
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow z-10">
                  Krijg ondersteuning van een ervaren buddy die luistert, meegaat
                  naar gesprekken en helpt overzicht te houden.
                </p>
                <Link
                  className="inline-flex items-center text-primary font-bold hover:text-primary-dim transition-colors font-headline z-10"
                  href="/ouders"
                >
                  Lees meer{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              {/* Professionals */}
              <div className="relative bg-surface-container-low rounded-[2rem] p-10 overflow-hidden flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container rounded-bl-[100px] opacity-50"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm mb-8 z-10">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    work
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-on-background font-headline mb-4 z-10">
                  Voor professionals
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow z-10">
                  Verwijs ouders door naar ons platform voor onafhankelijke,
                  laagdrempelige ondersteuning naast uw zorgtraject.
                </p>
                <Link
                  className="inline-flex items-center text-secondary font-bold hover:text-secondary-dim transition-colors font-headline z-10"
                  href="/professionals"
                >
                  Naar portaal{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              {/* Buddy worden */}
              <div className="relative bg-surface-container-low rounded-[2rem] p-10 overflow-hidden flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container rounded-bl-[100px] opacity-50"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm mb-8 z-10">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    handshake
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-on-background font-headline mb-4 z-10">
                  Buddy worden
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow z-10">
                  Zet jouw (ervarings)deskundigheid in om ouders te ondersteunen
                  tijdens een van de moeilijkste periodes in hun leven.
                </p>
                <Link
                  className="inline-flex items-center text-tertiary font-bold hover:text-tertiary-dim transition-colors font-headline z-10"
                  href="/buddy"
                >
                  Meld je aan{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What is a Buddy */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                  Wat doet een buddy precies?
                </h2>
                <p className="text-lg text-on-surface-variant font-body mb-10 leading-relaxed">
                  Een buddy is geen therapeut, advocaat of hulpverlener. Een
                  buddy is een onafhankelijke steunpilaar. Iemand die naast je
                  staat, niet oordeelt, en je helpt om helder te blijven denken
                  wanneer emoties hoog oplopen.
                </p>
                <div className="space-y-8">
                  <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15">
                    <h4 className="text-lg font-bold text-on-background font-headline mb-4 flex items-center">
                      <span className="material-symbols-outlined text-primary mr-2">
                        check_circle
                      </span>
                      Wat een buddy wél doet
                    </h4>
                    <ul className="space-y-3 font-body text-on-surface-variant">
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-primary">
                          done
                        </span>{" "}
                        Luisteren naar jouw verhaal zonder oordeel
                      </li>
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-primary">
                          done
                        </span>{" "}
                        Meegaan naar gesprekken met instanties
                      </li>
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-primary">
                          done
                        </span>{" "}
                        Helpen overzicht te bewaren in documenten
                      </li>
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-primary">
                          done
                        </span>{" "}
                        Ingewikkelde taal vertalen naar begrijpelijk Nederlands
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15">
                    <h4 className="text-lg font-bold text-on-background font-headline mb-4 flex items-center">
                      <span className="material-symbols-outlined text-error mr-2">
                        cancel
                      </span>
                      Wat een buddy niet doet
                    </h4>
                    <ul className="space-y-3 font-body text-on-surface-variant">
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-error">
                          close
                        </span>{" "}
                        Juridische beslissingen nemen of advies geven
                      </li>
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-error">
                          close
                        </span>{" "}
                        Therapie of psychologische behandeling bieden
                      </li>
                      <li className="flex items-start">
                        <span className="material-symbols-outlined text-sm mr-2 mt-1 text-error">
                          close
                        </span>{" "}
                        De rol van de jeugdbeschermer overnemen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[700px] rounded-[2rem] overflow-hidden">
                <Image
                  alt="Samen documenten doornemen"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHHT-XpGoRhWkeQh2mkqrrMs2k9RsAZzbgJtW0n-sPEC_ZCBRur7X2T6DDb3KpmhlPQMHtKvaYcEwR2WwSClz98idM9npyjlK08xRxrN1bEGOUORr5ixQwsE7Ldd6ztvNS3J8qoKPMqKpOS5PSOh3JoHm90OzilHQjLNqM70qfJuOpNxow7l8TgiaQvlRgj8k6ed6RTm2A4spD9myphTl29fcYdGQZF8ymA8myo3UlrlS6oJCpXH4mt0h8hgTyjmTf8Ak44lwFQ9s"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. How it Works (Timeline) */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                Hoe werkt het?
              </h2>
              <p className="text-lg text-on-surface-variant font-body">
                In vier duidelijke stappen naar de juiste ondersteuning. Wij
                streven ernaar binnen 48 uur contact met je op te nemen.
              </p>
            </div>
            <div className="relative">
              {/* Progress Line (Hidden on mobile) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-surface-container-highest rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-2xl font-bold font-headline mb-6 border-8 border-surface shadow-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-on-background font-headline mb-3">
                    Aanmelden
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    Vul het korte formulier in, stuur een WhatsApp bericht of bel
                    ons. Je kiest zelf wat fijn voelt.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-2xl font-bold font-headline mb-6 border-8 border-surface shadow-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-on-background font-headline mb-3">
                    Kennismaking
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    We bellen je om kort af te stemmen wat je nodig hebt. Dit
                    verplicht je tot niets.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center text-2xl font-bold font-headline mb-6 border-8 border-surface shadow-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-on-background font-headline mb-3">
                    Koppeling
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    Wij zoeken een buddy die bij jouw situatie past. Jullie
                    hebben eerst een klikgesprek.
                  </p>
                </div>
                {/* Step 4 */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-2xl font-bold font-headline mb-6 border-8 border-surface shadow-sm">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-on-background font-headline mb-3">
                    Ondersteuning op maat
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    Jullie spreken af hoe de ondersteuning eruit ziet: bellen,
                    appen of afspreken voor gesprekken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Practical Help (Highlighted) */}
        <section className="py-24 bg-surface px-6">
          <div className="max-w-5xl mx-auto bg-surface-container-high rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
            {/* Abstract blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-error-container/40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface text-sm font-medium mb-6 font-headline">
                  <span className="material-symbols-outlined text-lg mr-2 text-error">
                    priority_high
                  </span>
                  Acuut
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                  Ik zit midden in een uithuisplaatsing. Wat nu?
                </h2>
                <p className="text-lg text-on-surface-variant font-body mb-8">
                  Paniek is logisch. Probeer deze drie stappen aan te houden om
                  de eerste chaos door te komen.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center font-bold text-primary mr-4 flex-shrink-0 font-headline">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-on-background font-headline">
                        Blijf rustig ademen
                      </h4>
                      <p className="text-on-surface-variant font-body text-sm">
                        Je mag emotioneel zijn, maar probeer escalatie te
                        voorkomen. Dit helpt jou en je kind het meest.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center font-bold text-primary mr-4 flex-shrink-0 font-headline">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-on-background font-headline">
                        Maak aantekeningen
                      </h4>
                      <p className="text-on-surface-variant font-body text-sm">
                        Vraag wie er voor je staan, noteer namen en functies. Je
                        hoeft niet alles meteen te onthouden.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center font-bold text-primary mr-4 flex-shrink-0 font-headline">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-on-background font-headline">
                        Vraag om uitleg
                      </h4>
                      <p className="text-on-surface-variant font-body text-sm">
                        Vraag naar het officiële document (de machtiging) en vraag
                        de jeugdzorgwerker om dit rustig toe te lichten.
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/wat-nu" className="px-8 py-4 rounded-full bg-on-background text-surface font-bold text-lg hover:bg-on-background/90 transition-all font-headline text-center">
                  Lees wat je nu kunt doen
                </Link>
              </div>
              <div className="hidden md:block relative h-[400px]">
                <Image
                  alt="Rust moment"
                  className="rounded-[2rem] shadow-[0_12px_40px_rgba(49,51,48,0.1)] w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANNTZOpWikBrQtVOM5ZARzsS7O-CGP_GWn8DFVMBPXAbTAMNgZUFSNafLaU0IX4Lfp01xLvX9YOwmxbPepqLDSo-nM32gGw9Hjy1dFNwNk4n3DWYfqfEJZ5ygCTO2l1PrL-tPUCy2F60LEHt63ja5QT5Rdm6Y2mm88QxhzGAepuFRfnSE4lTPlMG21jQLJ0L3PujWgYjIl63_1BqcZHJeObCRcZIG3tOkNwsrVnAaYW3gqY-i0xUpD7e5y3-voqSip7LJx83uTdvE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="py-32 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-background font-headline tracking-tight mb-8">
              Je hoeft dit niet alleen te doen.
            </h2>
            <p className="text-xl text-on-surface-variant font-body mb-12">
              Kies de stap die nu bij je past. Wij zijn er wanneer jij er klaar
              voor bent.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/aanmelden" className="px-10 py-5 rounded-full bg-primary text-on-primary font-bold text-lg hover:bg-primary-dim shadow-[0_8px_30px_rgba(92,97,79,0.2)] transition-all font-headline">
                Vraag een buddy aan
              </Link>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-anonymous-chat'))}
                className="px-10 py-5 rounded-full bg-surface-container-highest text-on-surface font-bold text-lg hover:bg-surface-variant transition-all font-headline cursor-pointer"
              >
                Bel of app ons anoniem
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
