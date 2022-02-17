import React from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';

export const Nacimientos = () => {
  return (
    <View>
      <TopBar backIcon={true} title=" Nacimientos"></TopBar>
      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
