import React, {Dispatch} from 'react';
import {View, Text} from 'react-native';
import {ReproductionViewColor} from '../../constants/ReoproductionRecordColor';
import {
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {IPalpationProps, Palpation} from '../Palpation/Palpation';
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
      <View
        style={{
          ...styles.ReproductionMainViewContainer,
          backgroundColor: ReproductionViewColor[record.recordType],
        }}>
        <View style={styles.ReproductionMainItem}>
          <InputTextView label="Monta/Ia" value={record.montaType} />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputTextView
            label="Nombre y N° toro"
            value={record.idReproductor}
          />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputViewDate
            label="Fecha posible parto"
            value={record.fechaPosibleParto}
          />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputTextView
            label="días de gestación"
            value={record.gestationDays.toString()}
          />
        </View>
      </View>
      {!isInsertCurrentRecord && (
        <Palpation recordsList={record} isInsertComponent={false} />
      )}
    </View>
  );
};
