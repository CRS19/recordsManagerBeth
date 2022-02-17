import {get, isNil} from 'lodash';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralTextInput {
  logo: JSX.Element;
  label: string;
  value: any;
  property: any;
  errorText: string;
  error: boolean;
  setValue: any;
}

export const GeneralTextInput = ({
  logo,
  label,
  value,
  property,
  errorText,
  error,
  setValue,
}: IGeneralTextInput) => {
  const [text, setText] = useState<string>(get(value, property, ''));

  useEffect(() => {
    setValue({...value, [property]: text});
  }, [text]);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ModalInputLogoContainer}>
          {isNil(logo) ? <GeneralIcon /> : logo}
        </View>
        <TextInput
          style={{
            height: 52,
            width: 221,
            backgroundColor: 'transparent',
          }}
          mode="flat"
          label={label.toUpperCase()}
          selectionColor="#6200EE"
          underlineColor="#6200EE"
          showSoftInputOnFocus={false}
          selectTextOnFocus={true}
          value={text}
          onChangeText={text => setText(text)}
          theme={{
            colors: {primary: '#6200EE', placeholder: '#6200EE'},
          }}
        />
      </View>
      {!!error ? (
        <View style={{position: 'absolute', right: -10, bottom: 0}}>
          <Text style={styles.ErrorTextHelper}>{errorText}</Text>
        </View>
      ) : (
        <View />
      )}
      <View style={styles.ModalInputDivider} />
    </View>
  );
};
