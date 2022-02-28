import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';
import {GeneralTitle} from '../../../Titles/GeneralTitle';

export interface IDailyMilkLabTableFooterProps {
  totals: {
    totalMonthLab: number;
    totalMonthCalf: number;
    totalMonthMilk: number;
  };
}

export const DailyMilkLabTableFooter = ({
  totals,
}: IDailyMilkLabTableFooterProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 60,
        paddingLeft: 304,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <GeneralTitle title="Total" width={56} />
        <View>
          <View
            style={{
              ...styles.DailyMilkLabSubCellHeader,
              backgroundColor: '#C7E8B3',
              width: 106,
            }}>
            <Text style={{fontSize: 18}}>{totals.totalMonthLab}</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.DailyMilkLabSubCellHeader}></View>
            <View style={styles.DailyMilkLabSubCellHeader}></View>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#C7E8B3',
                width: 106,
              }}>
              <Text style={{fontSize: 18}}>{totals.totalMonthCalf}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 125,
            height: 56,
            backgroundColor: '#C7E8B3',
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {totals.totalMonthMilk}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 125,
            height: 56,
          }}></View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 125,
            height: 56,
            borderTopWidth: 0,
            borderRightWidth: 2,
          }}></View>
      </View>
    </View>
  );
};
