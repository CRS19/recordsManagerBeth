import React, {createRef, Dispatch} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralNumberInputProps {
  value: any;
  valueIndex: number;
  setValue: any;
  property: any;
  label: string;
  error: boolean;
  errorText: string;
}

export const GeneralNumberInput = ({
  value,
  valueIndex,
  setValue,
  property,
  label,
  error,
  errorText,
}: IGeneralNumberInputProps) => {
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
          value={String(value[property])}
          label={label}
          selectionColor="#6200EE"
          selectTextOnFocus={true}
          underlineColor="#6200EE"
          keyboardType={'decimal-pad'}
          ref={ref}
          theme={{
            colors: {
              primary: '#6200EE',
              placeholder: '#6200EE',
              disabled: '#6200EE',
            },
          }}
          render={props => (
            <TextInputMask
              {...props}
              ref={ref}
              mask={'[0000000]'}
              onChangeText={(text, text2) =>
                setValue(valueIndex, property, text2, true)
              }
            />
          )}
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
