import React from 'react';
import {FlexAlignType, Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IGeneralTitleProps {
  title: string;
  width?: number;
  textAling?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
}

export const GeneralTitle = ({
  title,
  width = 333,
  textAling = 'center',
  textTransform = 'uppercase',
}: IGeneralTitleProps) => {
  return (
    <View
      style={{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          ...styles.RegisterTitleGeneric,
          textTransform,
          textAlign: textAling,
        }}>
        {title}
      </Text>
      <View style={{...styles.RegisterTitleUnderLine, width}} />
    </View>
  );
};
