import React from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';

export const ControlClinicodelaReproducción = () => {
  return (
    <View>
      <Text>pantalla de </Text>
      <TopBar
        backIcon={true}
        title=" Control Clinico De La Reproducción"></TopBar>
      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
