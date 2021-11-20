import {ABORTO_TYPE} from './palpationConstants';
import {PalpEnum} from '../interfaces/ReproductionRecord';

export enum VACIA_SUB_TYPES {
  CLOD = 'CLOD',
  CLOI = 'CLOI',
  FOD = 'FOD',
  FOI = 'FOI',
  ATR = 'ATR',
  Q = 'Q',
  CUERNOS_L = 'CUERNOS L',
  ENM = 'ENM',
  NORMAL = 'NORMAL',
  FREE_MARTIN = 'FREE MARTIN',
}

export enum ABORTO_SUB_TYPE {
  NORMAL = 'normal',
  PLACENTA = 'placenta retenida',
  METRITIS = 'metritis peuperal',
}

export const PALPATION_SUB_TYPE: Record<VACIA_SUB_TYPES, PalpEnum> = {
  [VACIA_SUB_TYPES.CLOD]: PalpEnum.VACIA_CLOD,
  [VACIA_SUB_TYPES.CLOI]: PalpEnum.VACIA_CLOI,
  [VACIA_SUB_TYPES.FOD]: PalpEnum.VACIA_FOD,
  [VACIA_SUB_TYPES.FOI]: PalpEnum.VACIA_FOI,
  [VACIA_SUB_TYPES.ATR]: PalpEnum.VACIA_ATR,
  [VACIA_SUB_TYPES.Q]: PalpEnum.VACIA_Q,
  [VACIA_SUB_TYPES.CUERNOS_L]: PalpEnum.VACIA_CUERNOS,
  [VACIA_SUB_TYPES.ENM]: PalpEnum.VACIA_ENM,
  [VACIA_SUB_TYPES.NORMAL]: PalpEnum.VACIA_NORMAL,
  [VACIA_SUB_TYPES.FREE_MARTIN]: PalpEnum.VACIA_MARTIN,
};

export const PALPATION_SUB_TYPE_ABORTO: Record<ABORTO_SUB_TYPE, PalpEnum> = {
  [ABORTO_SUB_TYPE.NORMAL]: PalpEnum.ABORTO_NORMAL,
  [ABORTO_SUB_TYPE.PLACENTA]: PalpEnum.ABORTO_PLACENTA,
  [ABORTO_SUB_TYPE.METRITIS]: PalpEnum.ABORTO_METRITIS,
};
