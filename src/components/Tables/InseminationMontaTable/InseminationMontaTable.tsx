import React from 'react';
import {Text, View} from 'react-native';
import {IMontaIaReportTableInfo} from '../../../interfaces/ReproductionRecord';
import {styles} from '../../../theme/GlobalStyles';

export interface IInseminationMontaProps {
  montaIaReportData: IMontaIaReportTableInfo[];
}

export const InseminationMontaTable = ({
  montaIaReportData,
}: IInseminationMontaProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 200,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 65}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            N°
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 135}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            N° ARETE{'\n'} VACA
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 203}}>
          <Text style={{fontSize: 18}}>FECHA DE {'\n'}IA/MONTA</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 108}}>
          <Text style={{fontSize: 18}}>IA/MONTA</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 134}}>
          <Text style={{fontSize: 18}}>N° ARETE{'\n  '} TORO</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 108}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            NOMBRE {'\n'}TORO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 148, borderRightWidth: 2}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            NOMBRE DEL{'\n'}INSEMINADOR
          </Text>
        </View>
      </View>
      {montaIaReportData.map((data: IMontaIaReportTableInfo, index: number) => (
        <View
          key={`${data.areteVaca}-${index}`}
          style={{
            flexDirection: 'row',
          }}>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 65}}>
            <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
              {index + 1}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 135, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.areteVaca}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 203, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.fechaMontaIa}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 108, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.montaIaType}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 134, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{data.numAreteToro}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 108, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.nombreToro}
            </Text>
          </View>
          <View
            style={{
              ...styles.DailyMilkRow,
              width: 148,
              borderRightWidth: 2,
              borderTopWidth: 0,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.inseminadorName}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
