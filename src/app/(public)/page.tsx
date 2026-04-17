"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is een buddy gratis?",
      answer: "Dat hangt af van de uiteindelijke opzet van het aanbod, maar het contact is bedoeld als laagdrempelige ondersteuning."
    },
    {
      question: "Is een buddy een hulpverlener?",
      answer: "Nee. Een buddy is geen behandelaar of jeugdbeschermer, maar iemand die naast een ouder staat en meedenkt."
    },
    {
      question: "Kan ik ook anoniem eerst contact opnemen?",
      answer: "Ja. Juist als de drempel hoog voelt, kan een eerste anoniem contactmoment helpen."
    },
    {
      question: "Krijg ik iemand die zelf ervaring heeft?",
      answer: "Dat kan. Een buddy kan een ervaringsdeskundige of getrainde ondersteuner zijn."
    },
    {
      question: "Hoe snel hoor ik iets?",
      answer: "We proberen binnen 48 uur contact op te nemen."
    },
    {
      question: "Wat gebeurt er met mijn gegevens?",
      answer: "Er wordt zorgvuldig omgegaan met persoonsgegevens en privacy. Op de privacypagina staat hier meer informatie over."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 md:pt-20 pb-24 md:pb-32 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-primary-container/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-container/50 text-on-primary-container text-sm font-medium mb-8 font-headline">
                <span className="material-symbols-outlined text-lg mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
                Een veilige plek voor ouders
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-background font-headline leading-[1.1] tracking-tight mb-8">
                Steun voor ouders bij een <span className="text-primary">gedwongen uithuisplaatsing</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl font-body">
                Je staat er niet alleen voor. Een buddy luistert zonder oordeel, helpt je overzicht te houden in moeilijke gesprekken en vertaalt ingewikkelde situaties naar heldere stappen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/aanmelden" className="px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center font-headline">
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
            <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
              <Image
                alt="Ondersteunend gesprek in een warme, rustige omgeving"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Glass Quote Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-surface/85 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                <p className="text-on-background font-medium italic mb-4 font-body leading-relaxed text-lg">
                  &quot;Mijn buddy hielp mij om weer rust te voelen en mijn vragen op een rij te zetten.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm mr-3 font-headline">
                    E
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-background font-headline leading-none mb-1">
                      Ervaring van een ouder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ERKENNING EN RUST */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-16 text-center">
            Je hoeft dit niet alleen te dragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Je hoeft niet alles vandaag te begrijpen",
              "Boos, verdrietig of wantrouwig zijn is niet vreemd",
              "Je mag vragen stellen, ook als alles onduidelijk voelt",
              "Een buddy kan naast je staan zonder oordeel"
            ].map((text, i) => (
              <div key={i} className="bg-surface p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary-container/30 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {["lightbulb", "sentiment_dissatisfied", "help_center", "volunteer_activism"][i]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-background font-headline leading-snug">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VOOR WIE IS SAMEN VERDER? */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
              Voor wie is Samen Verder?
            </h2>
            <p className="text-lg text-on-surface-variant font-body">
              Samen Verder is er voor ouders die steun zoeken, voor professionals die willen doorverwijzen en voor mensen die als buddy iets voor een ander willen betekenen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ouders */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col h-full hover:bg-surface-container-high transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container mb-8">
                <span className="material-symbols-outlined text-3xl">family_restroom</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background font-headline mb-4">Voor ouders</h3>
              <p className="text-on-surface-variant font-body mb-8 flex-grow">
                Zoek je rust, overzicht en iemand die zonder oordeel met je meedenkt? Een buddy kan je helpen tijdens een moeilijke en verwarrende periode.
              </p>
              <Link href="/ouders" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all font-headline">
                Lees meer <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            {/* Professionals */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col h-full hover:bg-surface-container-high transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-8">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background font-headline mb-4">Voor professionals</h3>
              <p className="text-on-surface-variant font-body mb-8 flex-grow">
                Werk je bij een wijkteam, jeugdhulporganisatie, school, pleegzorgorganisatie of als sociaal werker? Bekijk wanneer verwijzen zinvol is en hoe aanmelden werkt.
              </p>
              <Link href="/professionals" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all font-headline">
                Voor professionals <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            {/* Buddy worden */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col h-full hover:bg-surface-container-high transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-8">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background font-headline mb-4">Buddy worden</h3>
              <p className="text-on-surface-variant font-body mb-8 flex-grow">
                Wil jij als ervaringsdeskundige of betrokken ondersteuner iets betekenen voor ouders in een moeilijke periode? Lees wat de rol inhoudt en hoe aanmelden werkt.
              </p>
              <Link href="/buddy" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all font-headline">
                Meld je aan <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WAT IS EEN BUDDY? */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                Wat is een buddy?
              </h2>
              <p className="text-lg text-on-surface-variant font-body mb-10 leading-relaxed">
                Een buddy is iemand die tijdelijk naast een ouder staat. Dat kan een ervaringsdeskundige zijn of een getrainde ondersteuner. Een buddy is geen rechter, geen jeugdbeschermer en geen behandelaar, maar wel iemand die luistert, uitlegt, meedenkt en ondersteunt.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary-container/20 p-8 rounded-3xl border border-primary-container/30">
                  <h4 className="text-lg font-bold text-on-background font-headline mb-6 flex items-center">
                    <span className="material-symbols-outlined text-primary mr-2">check_circle</span>
                    Wat een buddy wel doet
                  </h4>
                  <ul className="space-y-4 font-body text-on-surface-variant text-sm">
                    {["Luisteren zonder oordeel", "Helpen overzicht te krijgen", "Uitleg geven in gewone taal", "Ondersteunen bij gesprekken of voorbereiding", "Helpen vragen op een rij te zetten", "Erkenning geven aan emoties"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="material-symbols-outlined text-primary text-sm mr-2 mt-0.5">done</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/30">
                  <h4 className="text-lg font-bold text-on-background font-headline mb-6 flex items-center">
                    <span className="material-symbols-outlined text-error mr-2">cancel</span>
                    Wat een buddy niet doet
                  </h4>
                  <ul className="space-y-4 font-body text-on-surface-variant text-sm">
                    {["Juridische beslissingen nemen", "Hulpverlening vervangen", "Partij kiezen tegen instanties", "Therapie geven"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="material-symbols-outlined text-error text-sm mr-2 mt-0.5">close</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
              <Image
                alt="Subtiele abstracte illustratie over steun en verbinding"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1516307361425-44d38feef221?auto=format&fit=crop&q=80&w=1000"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WAT HEB JE AAN EEN BUDDY? */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
              Wat kan een buddy voor je betekenen?
            </h2>
            <p className="text-lg text-on-surface-variant font-body">
              Een buddy verandert de situatie niet in één keer, maar kan wel helpen om rust, overzicht en steun te ervaren in een moeilijke periode.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Meer rust en overzicht", text: "Samen kijken naar wat er speelt en wat je volgende stap kan zijn." },
              { title: "Steun in gewone taal", text: "Uitleg zonder moeilijke woorden of onduidelijke regels." },
              { title: "Hulp bij gesprekken", text: "Voorbereiden op gesprekken en vragen op een rij zetten." },
              { title: "Je minder alleen voelen", text: "Iemand die naast je staat and met je meedenkt." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-surface-container-low border border-outline-variant/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">
                    {["filter_hdr", "chat_bubble", "groups", "diversity_1"][i]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-background font-headline mb-4">{benefit.title}</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HOE WERKT HET? */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
              Hoe werkt het?
            </h2>
            <p className="text-lg text-on-surface-variant font-body">
              In vier duidelijke stappen kijken we samen welke ondersteuning past. We streven ernaar om binnen 48 uur contact op te nemen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            {[
              { title: "Aanmelden", text: "Je kunt jezelf aanmelden of eerst anoniem contact opnemen. Ook een professional kan iemand aanmelden." },
              { title: "Kort kennismakingsgesprek", text: "We luisteren naar je situatie en kijken rustig met je mee naar wat je nodig hebt." },
              { title: "Koppeling aan een buddy", text: "We zoeken een buddy die past bij jouw situatie, vraag of behoefte." },
              { title: "Ondersteuning op maat", text: "Het contact kan bestaan uit luisteren, uitleg geven, samen voorbereiden of helpen overzicht te houden." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-primary/10 font-headline mb-4">{i + 1}</div>
                <h3 className="text-xl font-bold text-on-background font-headline mb-3">{step.title}</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Reactietijd", value: "We proberen binnen 48 uur contact op te nemen" },
              { label: "Kosten", value: "Het contact is laagdrempelig en gericht op steun" },
              { label: "Duur", value: "De begeleiding wordt afgestemd op wat nodig is" },
              { label: "Contactvormen", value: "Telefoon, app, online en soms fysiek" }
            ].map((info, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-outline-variant/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1 font-headline">{info.label}</p>
                <p className="text-on-surface-variant text-sm font-body">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: IK ZIT MIDDEN IN EEN UITHUISPLAATSING. WAT NU? */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto bg-on-surface text-surface rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/10 text-surface text-sm font-medium mb-8 font-headline border border-surface/20">
                <span className="material-symbols-outlined text-lg mr-2">info</span>
                Eerste hulp in gewone taal
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-headline tracking-tight mb-8">
                Ik zit midden in een uithuisplaatsing. Wat nu?
              </h2>
              <p className="text-xl text-surface/80 font-body mb-12">
                Bij een gedwongen uithuisplaatsing komt er veel op je af. Probeer niet alles tegelijk te begrijpen. Deze eerste stappen kunnen helpen om wat meer rust en overzicht te krijgen.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
                {[
                  { title: "Adem eerst even", text: "Je hoeft niet alles vandaag te begrijpen. Probeer stap voor stap te kijken wat er nu belangrijk is." },
                  { title: "Schrijf namen en afspraken op", text: "Noteer instanties, contactpersonen, data, telefoonnummers en gemaakte afspraken." },
                  { title: "Schrijf je vragen op", text: "Zet op papier wat je niet begrijpt of wat je wilt bespreken." },
                  { title: "Vraag om uitleg", text: "Als iets onduidelijk is, vraag dan om uitleg in gewone taal." },
                  { title: "Zoek steun", text: "Praat met iemand die rustig met je mee kan denken." },
                  { title: "Meld je aan voor een buddy", text: "Je hoeft dit niet alleen te dragen. Een buddy kan helpen met steun, uitleg en overzicht." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary font-bold text-xs mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-surface font-headline mb-1">{item.title}</h4>
                      <p className="text-surface/60 text-sm font-body leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/wat-nu" className="inline-flex px-10 py-5 rounded-full bg-primary text-on-primary font-bold text-lg hover:bg-primary-dim transition-all font-headline">
                Lees wat je nu kunt doen
              </Link>
            </div>
            <div className="sticky top-24 rounded-[2rem] overflow-hidden h-[600px] hidden lg:block shadow-2xl">
               <Image
                alt="Ouder aan tafel met papieren in een rustige setting"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
                fill
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: UITLEG IN GEWONE TAAL */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                Uitleg en praktische informatie
              </h2>
              <p className="text-lg text-on-surface-variant font-body">
                Geen ingewikkelde wetsteksten, maar begrijpelijke uitleg over woorden, stappen en betrokken organisaties.
              </p>
            </div>
            <Link href="/hoe-werkt-het" className="inline-flex px-8 py-4 rounded-full bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-all font-headline">
              Lees de uitleg in gewone taal
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Wat is een ondertoezichtstelling?",
              "Wat is een machtiging uithuisplaatsing?",
              "Wie zijn betrokken, zoals jeugdbescherming, rechter of pleegzorg?",
              "Wat gebeurt er meestal na een uithuisplaatsing?",
              "Hoe kun je vragen stellen als iets onduidelijk is?"
            ].map((topic, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-surface-container-low hover:bg-primary-container/20 transition-all cursor-pointer border border-outline-variant/10">
                <h3 className="text-lg font-bold text-on-background font-headline group-hover:text-primary transition-colors pr-8 relative text-balance">
                  {topic}
                  <span className="material-symbols-outlined absolute right-0 top-0 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    arrow_forward
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: VOOR PROFESSIONALS EN ORGANISATIES */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden order-2 lg:order-1 shadow-2xl">
              <Image
                alt="Professional in overleg"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-6">
                Voor professionals en organisaties
              </h2>
              <p className="text-lg text-on-surface-variant font-body mb-12">
                Werk je met ouders die te maken hebben met een gedwongen uithuisplaatsing? Samen Verder biedt laagdrempelige steun die kan helpen bij overzicht, erkenning en contact.
              </p>
              <div className="space-y-8 mb-12">
                {[
                  { title: "Wanneer verwijzen zinvol is", text: "Bijvoorbeeld wanneer een ouder overspoeld is, weinig overzicht heeft, wantrouwig is of behoefte heeft aan steun naast formele hulp." },
                  { title: "Wat het buddy-aanbod is", text: "Een buddy biedt geen behandeling, maar wel menselijk contact, praktische steun en uitleg in gewone taal." },
                  { title: "Hoe aanmelden werkt", text: "Een ouder kan zichzelf aanmelden. Een professional kan ook helpen bij een aanmelding of doorverwijzing." },
                  { title: "Promomateriaal", text: "Posters, visitekaartjes en ander materiaal kunnen organisaties helpen om ouders op dit aanbod te wijzen." }
                ].map((block, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-1.5 h-auto bg-primary/20 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-on-background font-headline mb-2">{block.title}</h4>
                      <p className="text-on-surface-variant text-sm font-body leading-relaxed">{block.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/professionals" className="inline-flex px-10 py-5 rounded-full bg-secondary text-on-secondary font-bold text-lg hover:bg-secondary-dim transition-all font-headline">
                Voor professionals
              </Link>
              <p className="mt-8 text-on-surface-variant/60 text-xs font-body italic">
                Dit platform laat zien hoe ondersteuning en doorverwijzing digitaal toegankelijk gemaakt kunnen worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ PREVIEW */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-background font-headline tracking-tight mb-16 text-center">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-outline-variant/30">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
                >
                  <span className="text-lg font-bold font-headline">{faq.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all font-headline">
              Bekijk alle vragen <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-32 bg-primary-container/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-background font-headline tracking-tight mb-8 leading-tight">
            Je hoeft dit niet alleen te doen.
          </h2>
          <p className="text-xl text-on-surface-variant font-body mb-12 max-w-2xl mx-auto text-balance">
            Kies de stap die nu bij je past. Wij zijn er wanneer jij er klaar voor bent.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/aanmelden" className="px-10 py-5 rounded-full bg-primary text-on-primary font-bold text-lg hover:bg-primary-dim shadow-xl shadow-primary/20 transition-all font-headline">
              Vraag een buddy aan
            </Link>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-anonymous-chat'))}
              className="px-10 py-5 rounded-full bg-surface text-on-surface font-bold text-lg hover:bg-surface-variant shadow-sm transition-all font-headline cursor-pointer"
            >
              Praat eerst anoniem
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
