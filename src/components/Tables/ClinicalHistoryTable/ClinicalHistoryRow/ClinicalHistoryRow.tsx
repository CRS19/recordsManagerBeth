import React from 'react';
import {Text, View} from 'react-native';
import {
  IDeworming,
  IDiagnosis,
  ISanityRecordRowDataView,
  IVaccines,
} from '../../../../interfaces/SanityRecords';
import {styles} from '../../../../theme/GlobalStyles';
import {getDateOfDay} from '../../../../utils/time-utils';
import {get} from 'lodash';

export interface IClinicalHistoryRowProps {
  index: number;
  rowData: ISanityRecordRowDataView;
}

export const ClinicalHistoryRow = ({
  rowData,
  index,
}: IClinicalHistoryRowProps) => {
  return (
    <View
      style={{
        marginHorizontal: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 45, borderTopWidth: 0}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {index + 1}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 180, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {getDateOfDay(get(rowData, 'created', 0))}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 198, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(
              rowData,
              'diagnosisDescriptrion',
              get(rowData, 'disease', 'DESPARACITACIÓN'),
            )}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 198, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(
              rowData,
              'commertialName',
              get(rowData, 'comertialName', get(rowData, 'comercialName', '')),
            )}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 124, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(rowData, 'activePrincipal', '')}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 95, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {`${get(rowData, 'dosis')} (${get(rowData, 'doseUnit', '')})`}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 119, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(rowData, 'frequency', '')}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 83, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(rowData, 'total', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 179,
            borderRightWidth: 2,
            borderTopWidth: 0,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(rowData, 'applicationWay', '')}
          </Text>
        </View>
      </View>
    </View>
  );
};
