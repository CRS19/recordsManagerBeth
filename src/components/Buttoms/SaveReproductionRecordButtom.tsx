import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SaveReproRecord} from '../../assets/SaveReproRecord';
import {styles} from '../../theme/GlobalStyles';

export const SaveReproductionRecordButtom = () => {
  return (
    <View style={styles.SaveReproRecordContainer}>
      <TouchableOpacity>
        <SaveReproRecord />
      </TouchableOpacity>
    </View>
  );
};
