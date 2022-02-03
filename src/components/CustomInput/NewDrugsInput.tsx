import React, {createRef, useState} from 'react';
import {get, set} from 'lodash';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {IDrug, IDugsKeys} from '../../interfaces/Drug.interface';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralInput {
  label: string;
  editable: boolean;
  isNumber: boolean;
  valueObj: IDrug;
  property: IDugsKeys;
  setValue: React.Dispatch<React.SetStateAction<IDrug>>;
  errorText: string;
  mask: string;
  error?: boolean;
  numKeyboard?: boolean;
}

export const NewDrugsInput = (props: IGeneralInput) => {
  const getValue = () => '';
  const {valueObj, property, setValue, mask, numKeyboard, errorText, error} =
    props;

  const [endEdititg, setEndEditing] = useState<boolean>(false);

  const saveWithMask = (text: string, text2: string | undefined) => {
    props.isNumber
      ? set(valueObj, `${property}`, Number(text))
      : set(valueObj, `${property}`, text2);

    setValue(valueObj);
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
          editable={props.editable}
          onFocus={() => setEndEditing(false)}
          onEndEditing={() => setEndEditing(true)}
          //onBlur={() => (!!validate ? validate() : console.log(''))}
          underlineColor="#6200EE"
          keyboardType={numKeyboard ? 'decimal-pad' : 'default'}
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
