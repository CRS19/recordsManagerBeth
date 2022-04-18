import React from 'react';
import {
  ISanityRecord,
  ISanityRecordRowDataView,
} from '../../../../interfaces/SanityRecords';
import {get, has, forEach} from 'lodash';

export const useClinicalHistoryTable = () => {
  const buildRowData = (
    sanityRecord: Partial<ISanityRecord>,
  ): ISanityRecordRowDataView[] => {
    let rowData: ISanityRecordRowDataView[] = [];

    if (has(sanityRecord, 'diagnosis'))
      forEach(
        sanityRecord.diagnosis!,
        (value, key): ISanityRecordRowDataView[] => {
          rowData = [
            ...rowData,
            ...value.drugs.map(drug => ({
              applicationWay: drug.applicationWay as string,
              total: drug.total,
              frequency: `${drug.frequency.times} ${drug.frequency.at}`, // TODO: traducir al español
              dosis: drug.dose,
              doseUnit: drug.doseUnit,
              commertialName: drug.comertialName,
              created: value.created,
              diagnosisDescriptrion: value.diagnosisDescriptrion,
            })),
          ];
          return rowData;
        },
      );

    if (has(sanityRecord, 'vaccines')) {
      rowData = [
        ...rowData,
        ...sanityRecord.vaccines!.map(vacuna => ({
          ...vacuna,
          total: vacuna.dosis,
        })),
      ];
    }

    if (has(sanityRecord, 'deworming')) {
      rowData = [
        ...rowData,
        ...sanityRecord.deworming!.map(desparacitacion => ({
          ...desparacitacion,
          total: desparacitacion.dosis,
        })),
      ];
    }

    return rowData.sort((a, b) => b.created - a.created);
  };

  return {buildRowData};
};
