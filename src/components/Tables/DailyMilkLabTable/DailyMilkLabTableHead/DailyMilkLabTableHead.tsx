import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';

export const DailyMilkLabTableHead = () => {
  return (
    <View
      style={{
        marginHorizontal: 60,
        marginTop: 20,
        backgroundColor: '#BCE1FF',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 80, height: 112}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>#</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 80, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>DÍA</Text>
        </View>
        <View>
          <View
            style={{
              ...styles.DailyMilkRow,
              backgroundColor: '#F3B9A6',
              width: 316,
              height: 56,
            }}>
            <Text style={{fontSize: 18}}>LABORATORIO DE LACTEOS</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#FFE5E4',
              }}>
              <Text style={{fontSize: 18}}>Mañana</Text>
            </View>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#F9F0E4',
              }}>
              <Text style={{fontSize: 18}}>Tarde</Text>
            </View>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#E0E0E0',
              }}>
              <Text style={{fontSize: 18}}>Entrega</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              ...styles.DailyMilkRow,
              backgroundColor: '#D8B285',
              width: 316,
              height: 56,
            }}>
            <Text style={{fontSize: 18}}>TERNEROS</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#FFE5E4',
              }}>
              <Text style={{fontSize: 18}}>Mañana</Text>
            </View>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#F9F0E4',
              }}>
              <Text style={{fontSize: 18}}>Tarde</Text>
            </View>
            <View
              style={{
                ...styles.DailyMilkLabSubCellHeader,
                backgroundColor: '#E0E0E0',
              }}>
              <Text style={{fontSize: 18}}>Consumo</Text>
            </View>
          </View>
        </View>
        <View style={{...styles.DailyMilkRow, width: 125, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            TOTAL DIARIO (lt){' '}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 125, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>TOTAL VACAS</Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 125,
            height: 112,
            borderRightWidth: 2,
            backgroundColor: '#BCE1FF',
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            PRODUCCIÓN VACA {'\n'} (lt)
          </Text>
        </View>
      </View>
    </View>
  );
};
