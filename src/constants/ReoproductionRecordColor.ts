import {RecordReproductionType} from '../interfaces/ReproductionRecord';
import {reproductionRecordsColor} from './colorEnum';

export const ReproductionColor: Record<RecordReproductionType, string> = {
  [RecordReproductionType.ABORTO]: reproductionRecordsColor.ABORTO,
  [RecordReproductionType.PARTO]: reproductionRecordsColor.PARTO,
  [RecordReproductionType.GENERAL]: reproductionRecordsColor.GENERAL,
  [RecordReproductionType.CURRENT]: reproductionRecordsColor.CURRENT,
};

export const ReproductionViewColor: Record<RecordReproductionType, string> = {
  [RecordReproductionType.ABORTO]: '#F2899C',
  [RecordReproductionType.PARTO]: '#F4FBA2',
  [RecordReproductionType.GENERAL]: reproductionRecordsColor.GENERAL,
  [RecordReproductionType.CURRENT]: reproductionRecordsColor.CURRENT,
};
