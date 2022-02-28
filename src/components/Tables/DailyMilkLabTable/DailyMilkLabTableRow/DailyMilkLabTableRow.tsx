import React from 'react';
import {Text, View} from 'react-native';
import {IDailyMilkLabData} from '../../../../interfaces/DailyMilkLab';
import {styles} from '../../../../theme/GlobalStyles';
import {
  ENGLISH_DAYS_ENUM,
  getDayName,
  SPANISH_DAYS,
} from '../../../../utils/time-utils';

export interface IDailyMilkLabTableRowProps {
  index: number;
  data: IDailyMilkLabData;
}

export const DailyMilkLabTableRow = ({
  index,
  data,
}: IDailyMilkLabTableRowProps) => {
  const totalMilk = data.totalCalf + data.totalLab;
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 60,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 80,
            height: 56,
          }}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {index + 1}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 80,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {SPANISH_DAYS[getDayName(data.timestamp) as ENGLISH_DAYS_ENUM]}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.DailyMilkLabSubCellHeader}>
            <Text style={{fontSize: 18}}>{data.morningLab}</Text>
          </View>
          <View style={styles.DailyMilkLabSubCellHeader}>
            <Text style={{fontSize: 18}}>{data.aftermoonLab}</Text>
          </View>
          <View
            style={{
              ...styles.DailyMilkLabSubCellHeader,
              backgroundColor: '#E0E0E0',
              width: 106,
            }}>
            <Text style={{fontSize: 18}}>{data.totalLab}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.DailyMilkLabSubCellHeader}>
            <Text style={{fontSize: 18}}>{data.morningCalf}</Text>
          </View>
          <View style={styles.DailyMilkLabSubCellHeader}>
            <Text style={{fontSize: 18}}>{data.aftermoonCalf}</Text>
          </View>
          <View
            style={{
              ...styles.DailyMilkLabSubCellHeader,
              backgroundColor: '#E0E0E0',
              width: 106,
            }}>
            <Text style={{fontSize: 18}}>{data.totalCalf}</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 125,
            borderTopWidth: 0,
            backgroundColor: '#C7E8B3',
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>{totalMilk}</Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 125,
            borderTopWidth: 0,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {data.totalCows}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 125,
            borderTopWidth: 0,
            height: 56,
            borderRightWidth: 2,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {(totalMilk / data.totalCows).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
