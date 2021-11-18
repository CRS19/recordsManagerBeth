import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IGeneralTitleProps {
  title: string;
  width?: number;
}

export const GeneralTitle = ({title, width = 333}: IGeneralTitleProps) => {
  return (
    <View
      style={{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.RegisterTitleGeneric}>{title}</Text>
      <View style={{...styles.RegisterTitleUnderLine, width}} />
    </View>
  );
};
