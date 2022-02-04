import React, {createRef, useCallback, useState} from 'react';
import {get, isNil, set} from 'lodash';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {IDrug, IDugsKeys} from '../../interfaces/Drug.interface';
import {styles} from '../../theme/GlobalStyles';
import {debounce} from 'lodash';

export interface IGeneralInput {
  label: string;
  valueObj: IDrug;
  property: IDugsKeys;
  setValue: React.Dispatch<React.SetStateAction<IDrug>>;
  errorText: string;
  error?: boolean;
}

export const NewDrugsNumberInput = (props: IGeneralInput) => {
  const {valueObj, property, setValue, errorText, error} = props;

  const [endEdititg, setEndEditing] = useState<boolean>(false);

  const validateOnlyNumbers = (input: string) => {
    if (!isNil(input.match(/^[0-9]*$/gi))) {
      setValue({...valueObj, [property]: Number(input)});
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ModalInputLogoContainer}>{<GeneralIcon />}</View>
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'transparent'}}
          mode="flat"
          value={get(valueObj, `${property}`, '').toString()}
          label={props.label}
          selectionColor="#6200EE"
          selectTextOnFocus={true}
          onFocus={() => setEndEditing(false)}
          onEndEditing={() => setEndEditing(true)}
          underlineColor="#6200EE"
          keyboardType={'decimal-pad'}
          onChangeText={text => {
            validateOnlyNumbers(text);
            //setValue({...valueObj, [property]: Number(text)});
          }}
          theme={{
            colors: {
              primary: '#6200EE',
              placeholder: '#6200EE',
              disabled: '#6200EE',
            },
          }}
        />
        <View style={styles.ModalInputDivider} />
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
