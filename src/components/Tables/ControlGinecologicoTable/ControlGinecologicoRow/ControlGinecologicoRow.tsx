import {get} from 'lodash';
import React from 'react';
import {Text, View} from 'react-native';
import {IControlGinecologicoRowData} from '../../../../interfaces/ControlGinecologico';
import {styles} from '../../../../theme/GlobalStyles';

export interface IControlGinecologicoRowProps {
  data: IControlGinecologicoRowData;
}

export const ControlGinecologicoRow = ({
  data,
}: IControlGinecologicoRowProps) => {
  return (
    <View
      style={{
        marginHorizontal: 60,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 109,
            height: 56,
          }}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {get(data, 'numeroArete', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 200,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'fechaNacimiento', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, borderTopWidth: 0, textAlign: 'center'}}>
            {get(data, 'ene', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'feb', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'mar', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'abr', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'may', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'jun', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'jul', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'ago', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'sep', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'oct', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'nov', '')}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderRightWidth: 2,
            borderTopWidth: 0,
            width: 104,
            height: 56,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {get(data, 'dic', '')}
          </Text>
        </View>
      </View>
    </View>
  );
};
