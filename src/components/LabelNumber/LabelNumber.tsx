import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

export interface ILabelNumberProps {
  index: number;
}

export const LabelNumber = ({index}: ILabelNumberProps) => {
  return (
    <View style={styles.LabelNumberContainer}>
      <Text style={{fontSize: 22}}>{index + 1}</Text>
    </View>
  );
};
