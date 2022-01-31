import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralLabelProps {
  color: string;
  titulo: string;
  valor: string;
}

export const GeneralLabel = ({color, titulo, valor}: IGeneralLabelProps) => {
  return (
    <View style={styles.CowCardFooterInfoContainer}>
      <View style={{...styles.CowCardFooterInfoIcon, backgroundColor: color}}>
        <View style={styles.InnerIcon}>
          <View
            style={{
              backgroundColor: color,
              height: 10,
              width: 10,
              borderRadius: 100,
            }}></View>
        </View>
      </View>
      <View style={{marginLeft: 8}}>
        <View style={{marginLeft: 3}}>
          <Text style={[styles.CowCardTitle, {color: color}]}>{titulo}</Text>
        </View>
        <View>
          <Text style={styles.CowCardSubTitle}>{valor}</Text>
        </View>
      </View>
    </View>
  );
};
