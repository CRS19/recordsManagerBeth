export enum PalpEnum {
  ABORTO = 'aborto',
  PREÑADA = 'preñada',
  RECENTINA = 'recentina',
  SECA = 'seca',
  VACIA = 'vacia',
  ABORTO_NORMAL = 'aborto/normal',
  ABORTO_PLACENTA = 'aborto/placenta retenida',
  ABORTO_METRITIS = 'aborto/metritis peuperal',
  VACIA_CLOD = 'vacia/clod',
  VACIA_CLOI = 'vacia/cloi',
  VACIA_FOD = 'vacia/fod',
  VACIA_FOI = 'vacia/foi',
  VACIA_ATR = 'vacia/atr',
  VACIA_Q = 'vacia/q',
  VACIA_CUERNOS = 'vacia/cuernos l',
  VACIA_ENM = 'vacia/enm',
  VACIA_NORMAL = 'vacia/normal',
  VACIA_MARTIN = 'vacia/free martin',
}

export enum MontaTypeEnum {
  MONTA = 'monta',
  IA = 'ia',
  EMPTY = '',
}

export enum EstadoReproductivoSubType {
  ABORTO_NORMAL = 'aborto/normal',
  ABORTO_PLACENTA = 'aborto/placenta retenida',
  ABORTO_METRITIS = 'aborto/metritis peuperal',
  VACIA_CLOD = 'vacia/clod',
  VACIA_CLOI = 'vacia/cloi',
  VACIA_FOD = 'vacia/fod',
  VACIA_FOI = 'vacia/foi',
  VACIA_ATR = 'vacia/atr',
  VACIA_Q = 'vacia/q',
  VACIA_CUERNOS = 'vacia/cuernos l',
  VACIA_ENM = 'vacia/enm',
  VACIA_NORMAL = 'vacia/normal',
  VACIA_MARTIN = 'vacia/free martin',
}

export enum RecordReproductionType {
  PARTO = 'parto',
  ABORTO = 'aborto',
  GENERAL = 'general',
  CURRENT = 'current',
}

export interface RegistroPalp {
  registroPalpacion: PalpEnum;
  fecha: number;
  _id?: string;
}

export interface Record {
  _id?: string;
  montaType: MontaTypeEnum;
  registrosPalp: RegistroPalp[];
  recordType: RecordReproductionType;
  idReproductor: string;
  fechaPosibleParto: number;
  gestationDays: number;
  inseminadorName?: string;
}

export interface IReproductionRecord {
  idVaca: string;
  estadoReproductivoSubType: EstadoReproductivoSubType | '';
  records: Record[];
}
