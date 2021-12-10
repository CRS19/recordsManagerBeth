import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SaveReproRecord} from '../../assets/SaveReproRecord';
import {styles} from '../../theme/GlobalStyles';

export interface ISaveReproductionRecordButtomProps {
  onSave: () => void;
}

export const SaveReproductionRecordButtom = ({
  onSave,
}: ISaveReproductionRecordButtomProps) => {
  return (
    <View style={styles.SaveReproRecordContainer}>
      <TouchableOpacity onPress={onSave}>
        <SaveReproRecord />
      </TouchableOpacity>
    </View>
  );
};
