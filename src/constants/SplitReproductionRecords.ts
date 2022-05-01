import {
  IReproductionRecord,
  Record,
  RecordReproductionType,
} from '../interfaces/ReproductionRecord';

export const splitReproductionRecords = (cowRecord: IReproductionRecord) => {
  let recordsSplited: Record[][] = [];

  for (const recordType in RecordReproductionType) {
    recordsSplited.push(
      cowRecord.records.filter(record => {
        return record.recordType.toUpperCase() === recordType.toUpperCase();
      }),
    );
  }
  return recordsSplited;
};
