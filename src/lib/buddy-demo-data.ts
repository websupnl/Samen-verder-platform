export type DemoMatch = {
  id: string;
  label: string;
  initials: string;
  location: string;
  situation: string;
  status: string;
  lastContact: string;
  since: string;
  nextStep: string;
  needs: string[];
  sessionId: string;
};

export type DemoSession = {
  id: string;
  sessionId: string;
  status: string;
  created_at: string;
  updated_at: string;
  last_message: string;
  last_message_at: string;
};

export type DemoMessage = {
  id: string;
  content: string;
  sender_type: "user" | "buddy" | "ai";
  created_at: string;
};

const now = Date.now();

export const demoMatches: DemoMatch[] = [
  {
    id: "match-leeuwarden",
    label: "Ouder uit Leeuwarden",
    initials: "OL",
    location: "Leeuwarden",
    situation: "Machtiging uithuisplaatsing ontvangen",
    status: "Wekelijks contact",
    lastContact: "Vandaag om 10:35",
    since: "12 april 2026",
    nextStep: "Vragen voorbereiden voor gesprek met jeugdbeschermer",
    needs: ["Brief begrijpen", "Vragen opstellen", "Rust voor gesprek"],
    sessionId: "demo-brief-beslissing",
  },
  {
    id: "match-drachten",
    label: "Ouder uit Drachten",
    initials: "OD",
    location: "Drachten",
    situation: "Eerste bezoekregeling wordt besproken",
    status: "Kennismaking gepland",
    lastContact: "Gisteren om 19:20",
    since: "28 april 2026",
    nextStep: "Overzicht maken van afspraken en contactmomenten",
    needs: ["Bezoekregeling", "Afspraken ordenen", "Contact met pleegzorg"],
    sessionId: "demo-bezoekregeling",
  },
];

export const demoSessions: DemoSession[] = [
  {
    id: "demo-brief-beslissing",
    sessionId: "demo-brief-beslissing",
    status: "actief",
    created_at: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
    updated_at: new Date(now - 1000 * 60 * 18).toISOString(),
    last_message: "Ik heb de brief nu voor me. Er staat iets over een machtiging, maar ik weet niet wat ik morgen moet vragen.",
    last_message_at: new Date(now - 1000 * 60 * 18).toISOString(),
  },
  {
    id: "demo-bezoekregeling",
    sessionId: "demo-bezoekregeling",
    status: "nieuw",
    created_at: new Date(now - 1000 * 60 * 60 * 2).toISOString(),
    updated_at: new Date(now - 1000 * 60 * 43).toISOString(),
    last_message: "Er komt een gesprek over bezoekmomenten. Ik wil graag rustig blijven, maar ik ben bang dat ik dichtklap.",
    last_message_at: new Date(now - 1000 * 60 * 43).toISOString(),
  },
];

export const demoMessagesBySession: Record<string, DemoMessage[]> = {
  "demo-brief-beslissing": [
    {
      id: "brief-1",
      sender_type: "user",
      content: "Ik heb vandaag een brief gekregen over een machtiging uithuisplaatsing. Ik snap niet goed wat er nu van mij verwacht wordt.",
      created_at: new Date(now - 1000 * 60 * 60 * 2).toISOString(),
    },
    {
      id: "brief-2",
      sender_type: "ai",
      content: "Dat is veel om ineens te verwerken. Kijk eerst naar de datum, wie de brief heeft gestuurd en of er een gesprek of zitting genoemd wordt. Een buddy kan met je meekijken welke vragen je kunt stellen.",
      created_at: new Date(now - 1000 * 60 * 110).toISOString(),
    },
    {
      id: "brief-3",
      sender_type: "user",
      content: "Er staat morgen een gesprek met de jeugdbeschermer. Ik wil weten wat ik daar mag vragen.",
      created_at: new Date(now - 1000 * 60 * 55).toISOString(),
    },
    {
      id: "brief-4",
      sender_type: "buddy",
      content: "Goed dat je dit nu al opschrijft. Begin met drie vragen: wat betekent deze beslissing precies, wat is de volgende stap, en wanneer wordt het contact met je kind besproken?",
      created_at: new Date(now - 1000 * 60 * 28).toISOString(),
    },
    {
      id: "brief-5",
      sender_type: "user",
      content: "Ik heb de brief nu voor me. Er staat iets over een machtiging, maar ik weet niet wat ik morgen moet vragen.",
      created_at: new Date(now - 1000 * 60 * 18).toISOString(),
    },
  ],
  "demo-bezoekregeling": [
    {
      id: "bezoek-1",
      sender_type: "user",
      content: "Er komt een gesprek over bezoekmomenten. Ik wil graag rustig blijven, maar ik ben bang dat ik dichtklap.",
      created_at: new Date(now - 1000 * 60 * 43).toISOString(),
    },
    {
      id: "bezoek-2",
      sender_type: "ai",
      content: "Dat kan gebeuren bij een spannend gesprek. Het helpt om vooraf op papier te zetten wat je wilt vragen en wat voor jouw kind belangrijk is.",
      created_at: new Date(now - 1000 * 60 * 39).toISOString(),
    },
    {
      id: "bezoek-3",
      sender_type: "buddy",
      content: "Neem desnoods een kort lijstje mee. Bijvoorbeeld: wanneer zijn de bezoekmomenten, wie is erbij, hoe krijg je informatie na afloop, en wanneer evalueren jullie dit?",
      created_at: new Date(now - 1000 * 60 * 31).toISOString(),
    },
  ],
};

export function getDemoMessages(sessionId: string): DemoMessage[] {
  return demoMessagesBySession[sessionId] || [];
}
