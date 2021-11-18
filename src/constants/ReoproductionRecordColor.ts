import {RecordReproductionType} from '../interfaces/ReproductionRecord';
import {reproductionRecordsColor} from './colorEnum';

export const ReproductionColor: Record<RecordReproductionType, string> = {
  [RecordReproductionType.ABORTO]: reproductionRecordsColor.ABORTO,
  [RecordReproductionType.PARTO]: reproductionRecordsColor.PARTO,
  [RecordReproductionType.GENERAL]: reproductionRecordsColor.GENERAL,
};
