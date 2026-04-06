export interface TeamStanding {
  pos: number;
  team: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf?: number;
  gc?: number;
  dif: number;
  pts: number;
}

export const standingsPrincipal: TeamStanding[] = [
  { pos: 1, team: "Sport Unión", pj: 4, pg: 4, pe: 0, pp: 0, dif: 7, pts: 12 },
  { pos: 2, team: "Juventud", pj: 4, pg: 3, pe: 1, pp: 0, dif: 6, pts: 10 },
  { pos: 3, team: "Guaraní", pj: 4, pg: 2, pe: 1, pp: 1, dif: 4, pts: 7 },
  { pos: 4, team: "Sport San Blas", pj: 4, pg: 2, pe: 1, pp: 1, dif: 2, pts: 7 },
  { pos: 5, team: "Mcal. Estigarribia", pj: 4, pg: 2, pe: 1, pp: 1, dif: 0, pts: 7 },
  { pos: 6, team: "Capitán Cristaldo", pj: 4, pg: 2, pe: 0, pp: 2, dif: 1, pts: 6 },
  { pos: 7, team: "Sol de Mayo", pj: 4, pg: 1, pe: 3, pp: 0, dif: 2, pts: 6 },
  { pos: 8, team: "Independiente", pj: 4, pg: 1, pe: 2, pp: 1, dif: 0, pts: 5 },
  { pos: 9, team: "12 de Agosto", pj: 4, pg: 1, pe: 1, pp: 2, dif: 1, pts: 4 },
  { pos: 10, team: "13 de Junio (C.C.)", pj: 4, pg: 1, pe: 1, pp: 2, dif: 1, pts: 4 },
  { pos: 11, team: "15 de Agosto", pj: 4, pg: 1, pe: 1, pp: 2, dif: -3, pts: 4 },
  { pos: 12, team: "Libertad Ojopoi", pj: 4, pg: 1, pe: 1, pp: 2, dif: -4, pts: 4 },
  { pos: 13, team: "3 de Febrero", pj: 4, pg: 0, pe: 2, pp: 2, dif: -4, pts: 2 },
  { pos: 14, team: "Gral. Caballero", pj: 4, pg: 0, pe: 2, pp: 2, dif: -5, pts: 2 },
  { pos: 15, team: "1° de Marzo", pj: 4, pg: 0, pe: 1, pp: 3, dif: -8, pts: 1 },
];

export const standingsJuvenil: TeamStanding[] = [
  { pos: 1, team: "Juventud Cordillerana", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 10, gc: 0, dif: 10 },
  { pos: 2, team: "Sport San Blas", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 8, gc: 4, dif: 4 },
  { pos: 3, team: "Sport Unión", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 10, gc: 4, dif: 6 },
  { pos: 4, team: "1° de Marzo", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 9, gc: 8, dif: 1 },
  { pos: 5, team: "Libertad Ojopoi", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 8, gc: 7, dif: 1 },
  { pos: 6, team: "Capitán Cristaldo", pts: 6, pj: 4, pg: 1, pe: 3, pp: 0, gf: 4, gc: 3, dif: 1 },
  { pos: 7, team: "12 de Agosto", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 8, gc: 5, dif: 3 },
  { pos: 8, team: "Atlético Independiente", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 4, gc: 3, dif: 1 },
  { pos: 9, team: "13 de Junio C.C.", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 4, gc: 4, dif: 0 },
  { pos: 10, team: "Guaraní de Paso Hũ", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 6, gc: 9, dif: -3 },
  { pos: 11, team: "15 de Agosto", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 3, gc: 6, dif: -3 },
  { pos: 12, team: "Sol de Mayo", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 7, gc: 11, dif: -4 },
  { pos: 13, team: "Mcal. Estigarribia", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 5, gc: 10, dif: -5 },
  { pos: 14, team: "3 de Febrero", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 3, gc: 8, dif: -5 },
  { pos: 15, team: "Gral. Caballero", pts: 1, pj: 4, pg: 0, pe: 1, pp: 3, gf: 2, gc: 9, dif: -7 },
];

export const standingsJuvenilD: TeamStanding[] = [
  { pos: 1, team: "Humaitá", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 2, dif: 5 },
  { pos: 2, team: "Sportivo Itaguyrá", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 1, dif: 5 },
  { pos: 3, team: "13 de Junio S.A.", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 6, dif: -1 },
  { pos: 4, team: "Libertad Yrugua", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 11, dif: -9 },
];
