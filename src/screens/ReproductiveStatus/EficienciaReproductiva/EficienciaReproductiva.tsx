import React from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';

export const EficienciaReproductiva = () => {
  return (
    <View>
      <Text>pantalla de Eficiencia Reproductiva </Text>
      <TopBar backIcon={true} title=" Eficiencia Reproductiva"></TopBar>
      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
