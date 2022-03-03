import {getTimestamp} from './../time-utils';
import {
  IReproductionRecord,
  MontaTypeEnum,
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';

export const reproductionTemplate: IReproductionRecord = {
  idVaca: '',
  sex: '',
  estadoReproductivoSubType: '',
  records: [],
  historicalDataToPlot: {
    labels: [],
    datasets: [],
  },
};

export const recordMontaIa: Record = {
  montaType: MontaTypeEnum.IA,
  registrosPalp: [],
  recordType: RecordReproductionType.CURRENT,
  isCurrentRecord: true,
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  inseminadorName: '',
  createdAt: 0,
};

export const recordMontaMonta: Record = {
  montaType: MontaTypeEnum.MONTA,
  registrosPalp: [],
  recordType: RecordReproductionType.CURRENT,
  isCurrentRecord: true,
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  createdAt: 0,
};

export const recordSinTipo: Record = {
  montaType: MontaTypeEnum.EMPTY,
  registrosPalp: [],
  recordType: RecordReproductionType.CURRENT,
  isCurrentRecord: true,
  idReproductor: '',
  fechaPosibleParto: 0,
  gestationDays: 0,
  createdAt: 0,
};
