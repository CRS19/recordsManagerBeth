import React, {Dispatch} from 'react';
import {View, Text} from 'react-native';
import {ReproductionViewColor} from '../../constants/ReoproductionRecordColor';
import {
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {IPalpationProps, Palpation} from '../Palpation/Palpation';
import {ReproductionRecordCard} from '../ReproductionComponents/ReproductionRecordCard';
import {GeneralTitle} from '../Titles/GeneralTitle';
import {InputTextView} from '../Views/InputTextView';
import {InputViewDate} from '../Views/InputViewDate';

export interface IReproRecordView {
  record: Record;
  recordNumber: number;
}

export const ReproRecordView = ({record, recordNumber}: IReproRecordView) => {
  const isInsertCurrentRecord =
    record.recordType === RecordReproductionType.CURRENT;

  return (
    <View style={{alignItems: 'center', marginTop: 10}}>
      <GeneralTitle
        title={
          isInsertCurrentRecord
            ? `${record.recordType}`
            : `${record.recordType} N° ${recordNumber + 1}`
        }
      />
      <ReproductionRecordCard record={record} />
      <Palpation recordsList={record} isInsertComponent={false} />
    </View>
  );
};
