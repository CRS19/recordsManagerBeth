import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';

export const ClinicalHistoryHead = () => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginTop: 20,
        backgroundColor: '#EFC6C5',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 45}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>#</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 180}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            FECHA DE{'\n'}REGISTRO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 198}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>DIAGNÓSTICO</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 198}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>TRATAMIENTO</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 124}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            PRINCIPIO{'\n'}ACTIVO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 95}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>DOSIS</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 119}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>FRECUENCIA</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 83}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>TOTAL</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 179, borderRightWidth: 2}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            VIA DE{'\n'}APLICACIÓN
          </Text>
        </View>
      </View>
    </View>
  );
};
