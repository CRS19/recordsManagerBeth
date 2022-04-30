import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../../theme/GlobalStyles';

export const InventoryFirstTableHead = () => {
  return (
    <View
      style={{
        marginHorizontal: 53,
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
        <View style={{...styles.DailyMilkRow, width: 109}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>N° ARETE</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            FECHA DE{'\n'}NACIMIENTO
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            EDAD{'\n'}MESES / AÑOS
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>PESO VIVO</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            PRECIO{'\n'}PESO VIVO
          </Text>
        </View>
        {/**<View style={{...styles.DailyMilkRow, width: 170}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>CATEGORIA</Text>
      </View>*/}
        <View style={{...styles.DailyMilkRow, width: 170, borderRightWidth: 2}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            ESTADO{'\n'}REPRODUCTIVO
          </Text>
        </View>
      </View>
    </View>
  );
};
