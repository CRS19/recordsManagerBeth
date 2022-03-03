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

export enum partoTypeEnum {
  NORMAL = 'normal',
  CESAREA = 'cesarea',
  DISTOCICO = 'distocico',
}

export enum estadoDeLaCriaEnum {
  NACIDA_VIVA = 'nacido vivo',
  NATIMORTO = 'natimorto',
  ABORTO = 'abortada',
}

export interface IHistoricoPeso {
  peso: number;
  timestamp: number;
}

export interface IDataSet {
  data: number[];
}

export interface IHistoricalDataToPlot {
  labels: string[];
  datasets: IDataSet[];
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
  createdAt: number;
  gestationDays: number;
  isCurrentRecord: boolean;
  inseminadorName?: string;
  recordNumber?: number;
  partoType?: partoTypeEnum;
  estadoDeLaCria?: estadoDeLaCriaEnum;
  sexoDeLaCria?: string;
  nombreYNumeroDeLaCria?: string;
  pesoDeLaCria?: number;
}

export interface IReproductionRecord {
  idVaca: string;
  sex: string;
  estadoReproductivoSubType: EstadoReproductivoSubType | '';
  records: Record[];
  historicalDataToPlot: IHistoricalDataToPlot;
  historicoPeso?: IHistoricoPeso[];
  edadPrimerParto?: {months: number; days: number};
  intervaloEntrePartos?: {months: number; days: number};
  serviciosPorParto?: number;
}

export enum ReproductionRecordKeysEnum {
  _id = '_id',
  montaType = 'montaType',
  registrosPalp = 'registrosPalp',
  recordType = 'recordType',
  idReproductor = 'idReproductor',
  fechaPosibleParto = 'fechaPosibleParto',
  gestationDays = 'gestationDays',
  isCurrentRecord = 'boolean',
  inseminadorName = 'inseminadorName',
  recordNumber = 'number',
  partoType = 'partoTypeEnum',
  estadoDeLaCria = 'estadoDeLaCriaEnum',
  sexoDeLaCria = 'string',
  nombreYNumeroDeLaCria = 'string',
  pesoDeLaCria = 'number',
}
