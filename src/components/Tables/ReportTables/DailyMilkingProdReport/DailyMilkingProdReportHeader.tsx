import React from 'react';
import {Text, View} from 'react-native';
import {IDailyMilkRecord} from '../../../../interfaces/DailyMilkRecord';
import {styles} from '../../../../theme/GlobalStyles';
import {DailyMilkingProdReportRow} from './DailyMilkingProdReportRow';

export interface IDailyMilkingProdReportHeader {
  dailyRecord: IDailyMilkRecord;
}

//style={{...styles.DailyMilkRow, width: 105, borderRightWidth: 2}}
export const DailyMilkingProdReportHeader = ({
  dailyRecord,
}: IDailyMilkingProdReportHeader) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 60,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow}}>
          <Text style={{fontSize: 18}}>Día</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 200}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Fecha de producción
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 105}}>
          <Text style={{fontSize: 18}}>Mañana</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 105}}>
          <Text style={{fontSize: 18}}>Tarde</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 110}}>
          <Text style={{fontSize: 18}}>Diario Total</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 140}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Producción semanal
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 140}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Producción Mensual
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 140}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Producción Total
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 140, borderRightWidth: 2}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Producción promedio
          </Text>
        </View>
      </View>
      <View>
        <DailyMilkingProdReportRow dailyRecord={dailyRecord} />
      </View>
    </View>
  );
};
