import React from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';

export const ControlGinecológico = () => {
  return (
    <View>
      <TopBar backIcon={true} title=" ControlGinecologico"></TopBar>
      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
