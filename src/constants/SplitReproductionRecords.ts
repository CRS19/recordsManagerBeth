import {
  IReproductionRecord,
  Record,
  RecordReproductionType,
} from '../interfaces/ReproductionRecord';
import {isEmpty} from 'lodash';

export const splitReproductionRecords = (cowRecord: IReproductionRecord) => {
  console.log('OPTIMIZATION: splitReproductionRecords is called');
  let recordsSplited: Record[][] = [];

  for (const recordType in RecordReproductionType) {
    recordsSplited.push(
      cowRecord.records.filter(record => {
        return record.recordType.toUpperCase() === recordType.toUpperCase();
      }),
    );
  }

  console.log(JSON.stringify(recordsSplited[3][0], null, 3));

  return recordsSplited;
};
