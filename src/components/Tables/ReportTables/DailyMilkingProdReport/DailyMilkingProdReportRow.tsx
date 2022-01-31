import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';
import {
  getDateOfDay,
  getDiffDays,
  getMonthNumber,
} from '../../../../utils/time-utils';
import {useDailyMilkingProdReportBuilder} from '../state/useDailyMilkingProdReportBuilder';
import {IDailyMilkingProdReportHeader} from './DailyMilkingProdReportHeader';

export const DailyMilkingProdReportRow = ({
  dailyRecord,
}: IDailyMilkingProdReportHeader) => {
  const {dataToPlot} = useDailyMilkingProdReportBuilder({dailyRecord});

  return (
    <View>
      {dataToPlot.map(data => (
        <View
          key={`${data.day}-index`}
          style={{
            flexDirection: 'row',
          }}>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.day}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 200, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>{data.date}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.morning}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.afternoon}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 110, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.dailyTotal}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 140, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.semnalProd}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 140, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.monthProd}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 140, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.TotalProd}
            </Text>
          </View>
          <View
            style={{
              ...styles.DailyMilkRow,
              width: 140,
              borderTopWidth: 0,
              borderRightWidth: 2,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.averageProd}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
