import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DescarteIcon} from '../../assets/DescarteIcon';

export const DescarteBottom = () => {
  return (
    <View style={{marginTop: 33}}>
      <TouchableOpacity>
        <DescarteIcon />
      </TouchableOpacity>
    </View>
  );
};
