import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';

export const ControlGinecologicoHead = () => {
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
        <View style={{...styles.DailyMilkRow, width: 109, height: 112}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {' '}
            N°{'\n'}ARETE
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 200, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            FECHA DE{'\n'}NACIMIENTO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>ENE 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>FEB 28</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>MAR 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>ABR 30</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>MAY 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>JUN 30</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>JUL 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>AGO 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>SEP 30</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>OCT 31</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 104, height: 112}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>NOV 30</Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            borderRightWidth: 2,
            width: 104,
            height: 112,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>DIC 31</Text>
        </View>
      </View>
    </View>
  );
};
