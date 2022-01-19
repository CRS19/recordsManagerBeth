import {isEmpty} from 'lodash';
import React from 'react';
import {Text, View} from 'react-native';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {styles} from '../../../theme/GlobalStyles';

export interface IDailyRowViewProps {
  records: IDailyMilkRecord[];
}

export const DailyRowView = ({records}: IDailyRowViewProps) => {
  return (
    <View>
      {!isEmpty(records) &&
        records.map((record, index) => (
          <View
            key={`${index}-${record.idVaca}`}
            style={{flexDirection: 'row', backgroundColor: 'white'}}>
            <View style={{...styles.DailyMilkRow, borderTopWidth: 0}}>
              <Text style={{fontSize: 18}}>{index + 1}</Text>
            </View>
            <View
              style={{...styles.DailyMilkRow, width: 112, borderTopWidth: 0}}>
              <Text style={{fontSize: 18}}>{record.idVaca.split('-')[0]}</Text>
            </View>
            <View
              style={{...styles.DailyMilkRow, width: 95, borderTopWidth: 0}}>
              <Text style={{fontSize: 18}}>{record.idVaca.split('-')[1]}</Text>
            </View>
            <View
              style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
              <Text style={{fontSize: 18}}>
                {record.dailyRecords[0].mornigProd}
              </Text>
            </View>
            <View
              style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
              <Text style={{fontSize: 18}}>
                {record.dailyRecords[0].afternoonProd}
              </Text>
            </View>
            <View
              style={{
                ...styles.DailyMilkRow,
                width: 105,
                borderRightWidth: 2,
                borderTopWidth: 0,
              }}>
              <Text style={{fontSize: 18}}>
                {record.dailyRecords[0].totalDailyProd}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};
