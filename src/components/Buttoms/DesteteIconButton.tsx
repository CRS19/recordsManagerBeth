import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DesteteButtonIcon} from '../../assets/DesteteButtonIcon';

export interface IDesteteIconButtonProps {
  onPress: () => void;
}

export const DesteteIconButton = ({onPress}: IDesteteIconButtonProps) => {
  return (
    <View style={{top: 20}}>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}
        onPress={onPress}>
        <View
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#FFEE52',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            elevation: 10,
          }}>
          <DesteteButtonIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};
