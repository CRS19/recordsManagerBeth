import React from 'react';
import {View} from 'react-native';
import {
  IDeworming,
  IDiagnosis,
  ISanityRecord,
  ISanityRecordRowDataView,
  IVaccines,
} from '../../../interfaces/SanityRecords';
import {ClinicalHistoryHead} from './ClinicalHistoryHead/ClinicalHistoryHead';
import {ClinicalHistoryRow} from './ClinicalHistoryRow/ClinicalHistoryRow';
import {useClinicalHistoryTable} from './state/useClinicalHistoryTable';

export interface IClinicalHistoryTableProps {
  rowData: Partial<ISanityRecord>;
}

export const ClinicalHistoryTable = ({rowData}: IClinicalHistoryTableProps) => {
  const {buildRowData} = useClinicalHistoryTable();

  const rowDataView = buildRowData(rowData);

  return (
    <View>
      <ClinicalHistoryHead />
      {rowDataView.map(
        (renderRowDataView: ISanityRecordRowDataView, index: number) => (
          <ClinicalHistoryRow index={index} rowData={renderRowDataView} />
        ),
      )}
    </View>
  );
};
