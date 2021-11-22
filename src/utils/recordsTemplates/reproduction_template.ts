import {
  IReproductionRecord,
  MontaTypeEnum,
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';

export const reproductionTemplate: IReproductionRecord = {
  idVaca: '',
  estadoReproductivoSubType: '',
  records: [],
};

export const recordMontaIa: Record = {
  montaType: MontaTypeEnum.IA,
  registrosPalp: [],
  recordType: RecordReproductionType.PARTO,
  isCurrentRecord: true,
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  inseminadorName: '',
};

export const recordSinTipo: Record = {
  montaType: MontaTypeEnum.EMPTY,
  registrosPalp: [],
  recordType: RecordReproductionType.CURRENT,
  isCurrentRecord: true,
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  inseminadorName: '',
};
