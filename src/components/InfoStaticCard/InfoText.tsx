import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IinfoText {
  title1: string;
  IconColor: string;
}

export const InfoText = (props: IinfoText) => {
  return (
    <View style={styles.InfoComponent}>
      <View
        style={{...styles.InfoIcon, backgroundColor: props.IconColor}}></View>
      <View style={styles.InfoTextContiner}>
        <Text style={styles.InfoText}>{props.title1}</Text>
      </View>
      <View style={styles.InfoCardDivider} />
    </View>
  );
};
