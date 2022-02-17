import {
  MontaTypeEnum,
  RecordReproductionType,
} from '../interfaces/ReproductionRecord';
import {reproductionRecordsColor} from './colorEnum';

export const ReproductionColor: Record<RecordReproductionType, string> = {
  [RecordReproductionType.ABORTO]: reproductionRecordsColor.ABORTO,
  [RecordReproductionType.PARTO]: reproductionRecordsColor.PARTO,
  [RecordReproductionType.GENERAL]: reproductionRecordsColor.GENERAL,
  [RecordReproductionType.CURRENT]: reproductionRecordsColor.CURRENT,
};

export const ReproductionViewColor: Record<MontaTypeEnum, string> = {
  [MontaTypeEnum.MONTA]: '#DAC54F',
  [MontaTypeEnum.IA]: '#D8B285',
  [MontaTypeEnum.EMPTY]: 'white',
};
