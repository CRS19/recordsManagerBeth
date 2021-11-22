import React from 'react';
import {Text, View} from 'react-native';
import {RegistroPalp} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {LabelNumber} from '../LabelNumber/LabelNumber';
import {InputTextView} from '../Views/InputTextView';
import {InputViewDate} from '../Views/InputViewDate';

export interface IPalpationCard {
  PalpationRecord: RegistroPalp;
  index: number;
}

export const PalpationCard = ({PalpationRecord, index}: IPalpationCard) => {
  return (
    <View style={styles.PalpationCardContainer}>
      <LabelNumber index={index} />
      <View
        style={{
          marginTop: 22,
          marginLeft: 20,
        }}>
        <InputTextView
          label="Registro Palpación"
          value={PalpationRecord.registroPalpacion}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}>
        <InputViewDate value={PalpationRecord.fecha} />
      </View>
    </View>
  );
};
