import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

export interface IBoxtitleProps {
  title: string;
  outlineColor?: string;
}

export const BoxTitle = ({title, outlineColor = '#000000'}: IBoxtitleProps) => {
  return (
    <View style={{...styles.BoxTitleStyle, borderColor: outlineColor}}>
      <Text style={{fontSize: 36}}>{title}</Text>
    </View>
  );
};
