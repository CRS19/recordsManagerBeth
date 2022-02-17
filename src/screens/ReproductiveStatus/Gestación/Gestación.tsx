import React from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';

export const Gestación = () => {
  return (
    <View>
      <TopBar backIcon={true} title=" Gestación"></TopBar>
      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
