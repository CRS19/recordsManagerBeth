import React from 'react';
import {View, Text} from 'react-native';
import {IPreniezDataReportInfo} from '../../../interfaces/ReproductionRecord';
import {styles} from '../../../theme/GlobalStyles';

export interface IPremiezReportTableProps {
  preniezTableData: IPreniezDataReportInfo[];
}

export const PreniezReportTable = ({
  preniezTableData,
}: IPremiezReportTableProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 240,
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
          <Text style={{fontSize: 18}}>DIAS DE PREÑEZ</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 148}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            POSIBLE{'\n'}PARTO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 123, borderRightWidth: 2}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            N° DE{'\n'}PARTOS
          </Text>
        </View>
      </View>
      {preniezTableData.map((data, index) => (
        <View
          key={`${data.numeroAreteVaca}-${index}`}
          style={{
            flexDirection: 'row',
          }}>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 65}}>
            <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
              {index + 1}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 135}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.numeroAreteVaca}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 203}}>
            <Text style={{fontSize: 18}}>{data.fechaMonta}</Text>
          </View>

          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 108}}>
            <Text style={{fontSize: 18}}>{data.preniesDays}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0, width: 148}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.fechaPosibleParto}
            </Text>
          </View>
          <View
            style={{
              ...styles.DailyMilkRow,
              borderTopWidth: 0,
              width: 123,
              borderRightWidth: 2,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              {data.numeroPartos}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
