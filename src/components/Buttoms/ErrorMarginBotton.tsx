import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {InputBlock} from '../CustomInput/InputBlock';
import {FillButton} from './FillButton';

export interface IErrorMarginBottonProps {
  errorMargin: string;
  setErrorMargin: React.Dispatch<React.SetStateAction<string>>;
  saveErrorMargin: () => void;
}

export const ErrorMarginBotton = ({
  errorMargin,
  setErrorMargin,
  saveErrorMargin,
}: IErrorMarginBottonProps) => {
  return (
    <View style={styles.ErrorMarginBtnContainer}>
      <View style={styles.ErrorMarginTitleBox}>
        <FillButton title="Margen de error leche" onPress={saveErrorMargin} />
        <View style={styles.ErrorMarginInput}>
          <InputBlock
            initialValue={errorMargin}
            setPeso={setErrorMargin}
            suffix="%"
            width={64}
          />
        </View>
      </View>
    </View>
  );
};
