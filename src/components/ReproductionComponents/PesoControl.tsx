import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {InputBlock} from '../CustomInput/InputBlock';

export const PesoControl = () => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.RegisterListTitle}>PESO k</Text>
        <Text
          style={{
            ...styles.RegisterListTitle,
            textTransform: 'lowercase',
          }}>
          g
        </Text>
      </View>
      <View style={{...styles.RegisterDivider, width: 205}} />
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{marginHorizontal: 3.5}}>
          <InputBlock />
        </View>
        <View style={{marginHorizontal: 3.5, justifyContent: 'center'}}>
          <BorderButtom
            title="Modificar"
            onPress={() => console.log('press')}
          />
        </View>
      </View>
    </View>
  );
};
