import {defaultTo, isNaN} from 'lodash';
import React, {createRef} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {setPreviusValue} from '../../constants/SanityRecords';
import {IVacunaFormKeys} from '../../interfaces/SanityRecords';
import {IVacunaForm} from '../../screens/TabsCowScreen/Sanity/Vacunas/state/useVacunas';
import {styles} from '../../theme/GlobalStyles';

interface IVacunaInputDosis {
  value: number;
  label: string;
  error: boolean;
  prefix: string;
  errorText: string;
  setValue: React.Dispatch<React.SetStateAction<IVacunaForm>>;
}

export const VacunaInputDosis = ({
  value,
  label,
  setValue,
  prefix,
  error,
  errorText,
}: IVacunaInputDosis) => {
  // @ts-ignore
  const ref = createRef<TextInput>();

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{...styles.ModalInputLogoContainer, width: 40}}>
          {<GeneralIcon />}
        </View>
        <TextInput
          style={{
            marginLeft: 8,
            height: 52,
            width: 221,
            backgroundColor: 'transparent',
          }}
          mode="flat"
          value={String(value)}
          label={label}
          selectionColor="#6200EE"
          selectTextOnFocus={true}
          underlineColor="#6200EE"
          keyboardType={'decimal-pad'}
          onChangeText={text => {
            if (text.includes('.')) text.concat('0');
            if (isNaN(Number(text))) text = '0';
            setValue(prevValue =>
              setPreviusValue(
                prevValue,
                defaultTo(text, ''),
                IVacunaFormKeys.DOSIS,
                true,
              ),
            );
          }}
          theme={{
            colors: {
              primary: '#6200EE',
              placeholder: '#6200EE',
              disabled: '#6200EE',
            },
          }}
        />
        <View style={{...styles.ModalInputDivider, left: 0}} />
      </View>

      {!!error ? (
        <View style={{position: 'absolute', right: -10, bottom: 0}}>
          <Text style={styles.ErrorTextHelper}>{errorText}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};
