export interface Match {
  home: string;
  away: string;
}

export interface FixtureRound {
  name: string;
  date: string;
  matches: Match[];
  libre?: string;
}

export interface SerieFixture {
  serie: string;
  rounds: FixtureRound[];
}

export const fixtures: SerieFixture[] = [
  {
    serie: "Serie A",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Juventud Cord.", away: "13 de Junio C.C." }, { home: "Gral. Caballero", away: "Libertad Ojopoi" }], libre: "Sol de Mayo" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "Sol de Mayo", away: "Juventud Cord." }, { home: "13 de Junio C.C.", away: "Gral. Caballero" }], libre: "Libertad Ojopoi" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Libertad Ojopoi", away: "Sol de Mayo" }, { home: "Juventud Cord.", away: "Gral. Caballero" }], libre: "13 de Junio C.C." },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "Gral. Caballero", away: "Sol de Mayo" }, { home: "13 de Junio C.C.", away: "Libertad Ojopoi" }], libre: "Juventud Cord." },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Libertad Ojopoi", away: "Juventud Cord." }, { home: "Sol de Mayo", away: "13 de Junio C.C." }], libre: "Gral. Caballero" },
      { name: "6ta fecha", date: "Dom 12 Abr 2026", matches: [{ home: "13 de Junio C.C.", away: "Juventud Cord." }, { home: "Libertad Ojopoi", away: "Gral. Caballero" }], libre: "Sol de Mayo" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Juventud Cord.", away: "Sol de Mayo" }, { home: "Gral. Caballero", away: "13 de Junio C.C." }], libre: "Libertad Ojopoi" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "Sol de Mayo", away: "Libertad Ojopoi" }, { home: "Gral. Caballero", away: "Juventud Cord." }], libre: "13 de Junio C.C." },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "Sol de Mayo", away: "Gral. Caballero" }, { home: "Libertad Ojopoi", away: "13 de Junio C.C." }], libre: "Juventud Cord." },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Juventud Cord.", away: "Libertad Ojopoi" }, { home: "13 de Junio C.C.", away: "Sol de Mayo" }], libre: "Gral. Caballero" },
    ],
  },
  {
    serie: "Serie B",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Capitán Cristaldo", away: "3 de Febrero" }, { home: "Guaraní", away: "1° de Marzo" }], libre: "Sport Unión" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "Guaraní", away: "Capitán Cristaldo" }, { home: "3 de Febrero", away: "Sport Unión" }], libre: "1° de Marzo" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "1° de Marzo", away: "Capitán Cristaldo" }, { home: "Sport Unión", away: "Guaraní" }], libre: "3 de Febrero" },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "3 de Febrero", away: "Guaraní" }, { home: "Sport Unión", away: "1° de Marzo" }], libre: "Capitán Cristaldo" },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "Sport Unión" }, { home: "1° de Marzo", away: "3 de Febrero" }], libre: "Guaraní" },
      { name: "6ta fecha", date: "Dom 12 Abr 2026", matches: [{ home: "3 de Febrero", away: "Capitán Cristaldo" }, { home: "1° de Marzo", away: "Guaraní" }], libre: "Sport Unión" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "Guaraní" }, { home: "Sport Unión", away: "3 de Febrero" }], libre: "1° de Marzo" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "1° de Marzo" }, { home: "Guaraní", away: "Sport Unión" }], libre: "3 de Febrero" },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "Guaraní", away: "3 de Febrero" }, { home: "1° de Marzo", away: "Sport Unión" }], libre: "Capitán Cristaldo" },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Sport Unión", away: "Capitán Cristaldo" }, { home: "3 de Febrero", away: "1° de Marzo" }], libre: "Guaraní" },
    ],
  },
  {
    serie: "Serie C",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Sport San Blas", away: "12 de Agosto" }, { home: "Independiente", away: "15 de Agosto" }], libre: "Mcal. Estigarribia" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "12 de Agosto", away: "Mcal. Estigarribia" }, { home: "15 de Agosto", away: "Sport San Blas" }], libre: "Independiente" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Independiente", away: "12 de Agosto" }, { home: "Sport San Blas", away: "Mcal. Estigarribia" }], libre: "15 de Agosto" },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "12 de Agosto", away: "15 de Agosto" }, { home: "Mcal. Estigarribia", away: "Independiente" }], libre: "Sport San Blas" },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Independiente", away: "Sport San Blas" }, { home: "Mcal. Estigarribia", away: "15 de Agosto" }], libre: "12 de Agosto" },
      { name: "6ta fecha", date: "Dom 12 Abr 2026", matches: [{ home: "12 de Agosto", away: "Sport San Blas" }, { home: "15 de Agosto", away: "Independiente" }], libre: "Mcal. Estigarribia" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Mcal. Estigarribia", away: "12 de Agosto" }, { home: "Sport San Blas", away: "15 de Agosto" }], libre: "Independiente" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "12 de Agosto", away: "Independiente" }, { home: "Mcal. Estigarribia", away: "Sport San Blas" }], libre: "15 de Agosto" },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "15 de Agosto", away: "12 de Agosto" }, { home: "Independiente", away: "Mcal. Estigarribia" }], libre: "Sport San Blas" },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Sport San Blas", away: "Independiente" }, { home: "15 de Agosto", away: "Mcal. Estigarribia" }], libre: "12 de Agosto" },
    ],
  },
  {
    serie: "Serie D",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "13 de Junio S.A.", away: "Sportivo Itaguyrá" }, { home: "Humaitá", away: "Libertad Yrugua" }] },
      { name: "2da fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Libertad Yrugua", away: "13 de Junio S.A." }, { home: "Sportivo Itaguyrá", away: "Humaitá" }] },
      { name: "3ra fecha", date: "Dom 05 Abr 2026", matches: [{ home: "13 de Junio S.A.", away: "Humaitá" }, { home: "Libertad Yrugua", away: "Sportivo Itaguyrá" }] },
      { name: "4ta fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Sportivo Itaguyrá", away: "13 de Junio S.A." }, { home: "Libertad Yrugua", away: "Humaitá" }] },
      { name: "5ta fecha", date: "Dom 26 Abr 2026", matches: [{ home: "13 de Junio S.A.", away: "Libertad Yrugua" }, { home: "Humaitá", away: "Sportivo Itaguyrá" }] },
      { name: "6ta fecha", date: "Dom 03 May 2026", matches: [{ home: "Humaitá", away: "13 de Junio S.A." }, { home: "Sportivo Itaguyrá", away: "Libertad Yrugua" }] },
    ],
  },
];

export const series = [
  { name: "Serie A", teams: ["Gral. Caballero", "13 de Junio C.C.", "Libertad Ojopoi", "Juventud Cord.", "Sol de Mayo"] },
  { name: "Serie B", teams: ["Capitán Cristaldo", "3 de Febrero", "Guaraní", "1° de Marzo", "Sport Unión"] },
  { name: "Serie C", teams: ["15 de Agosto", "Mcal. Estigarribia", "12 de Agosto", "Sport San Blas", "Independiente"] },
  { name: "Serie D", teams: ["13 de Junio S.A.", "Humaitá", "Libertad Yrugua", "Sportivo Itaguyrá"] },
];

export const upcomingMatches = [
  { home: "Libertad Ojopoi", away: "Juventud Cord.", date: "Dom 05 Abr", serie: "Serie A" },
  { home: "Sol de Mayo", away: "13 de Junio C.C.", date: "Dom 05 Abr", serie: "Serie A" },
  { home: "Capitán Cristaldo", away: "Sport Unión", date: "Dom 05 Abr", serie: "Serie B" },
  { home: "1° de Marzo", away: "3 de Febrero", date: "Dom 05 Abr", serie: "Serie B" },
  { home: "Independiente", away: "Sport San Blas", date: "Dom 05 Abr", serie: "Serie C" },
  { home: "Mcal. Estigarribia", away: "15 de Agosto", date: "Dom 05 Abr", serie: "Serie C" },
  { home: "13 de Junio S.A.", away: "Humaitá", date: "Dom 05 Abr", serie: "Serie D" },
  { home: "Libertad Yrugua", away: "Sportivo Itaguyrá", date: "Dom 05 Abr", serie: "Serie D" },
];

export const news = [
  {
    id: 1,
    title: "Sport Unión lidera con paso perfecto",
    summary: "Sport Unión lidera la categoría principal con 12 puntos al cierre de la 5ta fecha.",
    date: "05 Abr 2026",
    category: "Principal",
  },
  {
    id: 2,
    title: "Pelea en la cima juvenil",
    summary: "Juventud Cordillerana y Sport San Blas pelean arriba en la categoría juvenil.",
    date: "05 Abr 2026",
    category: "Juvenil",
  },
  {
    id: 3,
    title: "Fixture completo confirmado",
    summary: "Las 4 series del campeonato 2026 ya cuentan con fixture completo.",
    date: "01 Mar 2026",
    category: "Institucional",
  },
];

export const clubs = [
  "Sport Unión", "Juventud", "Guaraní", "Sport San Blas", "Mcal. Estigarribia",
  "Capitán Cristaldo", "Sol de Mayo", "Independiente", "12 de Agosto",
  "13 de Junio C.C.", "15 de Agosto", "Libertad Ojopoi", "3 de Febrero",
  "Gral. Caballero", "1° de Marzo", "Humaitá", "Sportivo Itaguyrá",
  "13 de Junio S.A.", "Libertad Yrugua",
];
