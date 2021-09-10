import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IGeneralTitleProps {
  title: string;
}

export const GeneralTitle = (props: IGeneralTitleProps) => {
  return (
    <View
      style={{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.RegisterTitleGeneric}>{props.title}</Text>
      <View style={styles.RegisterTitleUnderLine} />
    </View>
  );
};
