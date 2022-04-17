import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {setDewormingFormValue} from '../../constants/SanityRecords';
import {IDewormingForm} from '../../screens/TabsCowScreen/Sanity/Desparacitaciones/state/useDeworming';
import {styles} from '../../theme/GlobalStyles';
import {defaultTo} from 'lodash';
import {IDewormingFormKeys} from '../../interfaces/SanityRecords';

interface IDewormingInputDosePorps {
  value: number;
  label: string;
  error: boolean;
  errorText: string;
  setValue: React.Dispatch<React.SetStateAction<IDewormingForm>>;
}

export const DewormingInputDose = ({
  value,
  label,
  error,
  errorText,
  setValue,
}: IDewormingInputDosePorps) => {
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
              setDewormingFormValue(
                prevValue,
                defaultTo(text, ''),
                IDewormingFormKeys.DOSIS,
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
