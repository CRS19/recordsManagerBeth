import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DescarteIcon} from '../../assets/DescarteIcon';

export interface IDescarteBottonProps {
  onPres: () => void;
}

export const DescarteBottom = ({onPres}: IDescarteBottonProps) => {
  return (
    <View style={{marginTop: 33}}>
      <TouchableOpacity onPress={onPres}>
        <DescarteIcon />
      </TouchableOpacity>
    </View>
  );
};
