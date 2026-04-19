export interface DisciplinaryResolution {
  id: number;
  title: string;
  date: string;
  summary: string;
  pdfUrl: string;
}

export const resolutions: DisciplinaryResolution[] = [
  {
    id: 1,
    title: "Resolución N° 22 — Serie A",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie A, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-22-serie-a.pdf",
  },
  {
    id: 2,
    title: "Resolución N° 23 — Serie B",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie B, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-23-serie-b.pdf",
  },
  {
    id: 3,
    title: "Resolución N° 24 — Serie C",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie C, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-24-serie-c.pdf",
  },
];

export interface PlayerStat {
  position: number;
  player: string;
  club: string;
  value: number | string;
  note?: string;
  photo?: string;
}

export interface PlayerStatsData {
  topScorers: PlayerStat[];
  bestPlayers: PlayerStat[];
  yellowCards: PlayerStat[];
  redCards: PlayerStat[];
}

export const playerStats: PlayerStatsData = {
  topScorers: [
    {
      position: 1,
      player: "Richard Araujo",
      // Transferred — note displayed in UI
      club: "Capitán Cristaldo",
      value: 6,
      note: "Transferido a Deportivo Santaní (Intermedia)",
    },
    { position: 2, player: "Brian Enciso", club: "12 de Agosto", value: 4 },
    { position: 3, player: "Richard Benítez", club: "Mcal Estigarribia", value: 4 },
    { position: 4, player: "José Barrios", club: "Libertad Ojopoi", value: 4 },
    { position: 5, player: "Richard Báez", club: "Sport Unión", value: 3 },
    { position: 6, player: "José Benítez", club: "Sport San Blas", value: 3 },
    { position: 7, player: "Sandro Galeano", club: "Juventud", value: 3 },
  ],
  bestPlayers: [
    { position: 1, player: "Por confirmar", club: "—", value: "MVP" },
  ],
  yellowCards: [
    { position: 1, player: "Por confirmar", club: "—", value: 0 },
  ],
  redCards: [
    { position: 1, player: "Por confirmar", club: "—", value: 0 },
  ],
};
