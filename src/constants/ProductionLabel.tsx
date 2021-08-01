import {estadoReproductivo} from '../interfaces/CowInterface';

export const ReproductionLabel: Record<estadoReproductivo, string> = {
  [estadoReproductivo.ABORTO]: 'Aborto',
  [estadoReproductivo.PRECENTINA]: 'Precentina',
  [estadoReproductivo.PRENADA]: 'Preñada',
  [estadoReproductivo.SECA]: 'Seca',
  [estadoReproductivo.VACIA]: 'Vacia',
};
