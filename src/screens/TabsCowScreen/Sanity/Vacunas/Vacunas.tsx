import React from 'react';
import {from} from 'form-data';
import {Text, View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {styles} from '../../../../theme/GlobalStyles';

export const Vacunas = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Vacunas" />
    </View>
  );
};
