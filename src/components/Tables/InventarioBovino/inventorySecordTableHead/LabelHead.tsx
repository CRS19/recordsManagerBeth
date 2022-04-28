import React from 'react';
import {Text, View} from 'react-native';

export const LabelHead = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        width: 690,
        borderWidth: 2,
        borderTopWidth: true ? 2 : 0,
        marginLeft: 60,
        borderBottomWidth: 0,
      }}>
      <View
        style={{
          width: 370,
          borderRightWidth: 2,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, marginLeft: 10}}>CATEGORIA</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 2,
        }}>
        <Text style={{fontSize: 18}}>N°</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 2,
        }}>
        <Text style={{fontSize: 18}}>INDICE</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18}}>UBAS</Text>
      </View>
    </View>
  );
};
