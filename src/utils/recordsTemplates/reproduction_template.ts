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
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  inseminadorName: '',
};
