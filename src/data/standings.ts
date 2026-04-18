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
  { pos: 1, team: "Sport Unión", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 7, gc: 0, dif: 7 },
  { pos: 2, team: "Juventud Cordillerana", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 10, gc: 5, dif: 5 },
  { pos: 3, team: "Guaraní de Paso Hú", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 7, gc: 3, dif: 4 },
  { pos: 4, team: "12 de Agosto", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 6, dif: 2 },
  { pos: 5, team: "13 de Junio C.C.", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 6, dif: 2 },
  { pos: 6, team: "Sport San Blas", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 7, gc: 6, dif: 1 },
  { pos: 7, team: "Mcal. Estigarribia", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 5, gc: 5, dif: 0 },
  { pos: 8, team: "Capitán Cristaldo", pts: 6, pj: 5, pg: 2, pe: 0, pp: 3, gf: 10, gc: 12, dif: -2 },
  { pos: 9, team: "Sol de Mayo", pts: 6, pj: 4, pg: 1, pe: 3, pp: 0, gf: 5, gc: 3, dif: 2 },
  { pos: 10, team: "Atlético Independiente", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 5, gc: 5, dif: 0 },
  { pos: 11, team: "3 de Febrero", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 8, gc: 9, dif: -1 },
  { pos: 12, team: "15 de Agosto", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 6, gc: 9, dif: -3 },
  { pos: 13, team: "Gral. Caballero", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 4, gc: 8, dif: -4 },
  { pos: 14, team: "Libertad Ojopoi", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 7, gc: 12, dif: -5 },
  { pos: 15, team: "1° de Marzo", pts: 2, pj: 5, pg: 0, pe: 2, pp: 3, gf: 5, gc: 13, dif: -8 },
];

export const standingsJuvenil: TeamStanding[] = [
  { pos: 1, team: "Juventud Cordillerana", pts: 13, pj: 5, pg: 4, pe: 1, pp: 0, gf: 14, gc: 2, dif: 12 },
  { pos: 2, team: "1° de Marzo", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 13, gc: 10, dif: 3 },
  { pos: 3, team: "Sport San Blas", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 9, gc: 7, dif: 2 },
  { pos: 4, team: "Sport Unión", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 10, gc: 4, dif: 6 },
  { pos: 5, team: "Capitán Cristaldo", pts: 9, pj: 5, pg: 2, pe: 3, pp: 0, gf: 7, gc: 4, dif: 3 },
  { pos: 6, team: "12 de Agosto", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 11, gc: 6, dif: 5 },
  { pos: 7, team: "Libertad Ojopoi", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 8, dif: 0 },
  { pos: 8, team: "Atlético Independiente", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 4, gc: 3, dif: 1 },
  { pos: 9, team: "13 de Junio C.C.", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 6, gc: 8, dif: -2 },
  { pos: 10, team: "15 de Agosto", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 3, gc: 6, dif: -3 },
  { pos: 11, team: "Sol de Mayo", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 7, gc: 11, dif: -4 },
  { pos: 12, team: "Guaraní de Paso Hú", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 8, gc: 13, dif: -5 },
  { pos: 13, team: "Gral. Caballero", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 3, gc: 9, dif: -6 },
  { pos: 14, team: "Mcal. Estigarribia", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 5, gc: 10, dif: -5 },
  { pos: 15, team: "3 de Febrero", pts: 1, pj: 5, pg: 0, pe: 1, pp: 4, gf: 4, gc: 11, dif: -7 },
];

export const standingsJuvenilD: TeamStanding[] = [
  { pos: 1, team: "Humaitá", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 2, dif: 5 },
  { pos: 2, team: "Sportivo Itaguyrá", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 1, dif: 5 },
  { pos: 3, team: "13 de Junio S.A.", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 6, dif: -1 },
  { pos: 4, team: "Libertad Yrugua", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 11, dif: -9 },
];
