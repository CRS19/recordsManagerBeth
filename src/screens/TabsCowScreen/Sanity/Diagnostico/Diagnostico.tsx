import React from 'react';
import {from} from 'form-data';
import {Text, View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {styles} from '../../../../theme/GlobalStyles';

export const Diagnostico = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Diagóstico" />
    </View>
  );
};
