import {isNil} from 'lodash';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../../assets/GeneralIcon';
import {styles} from '../../../theme/GlobalStyles';
import {TextInput} from 'react-native-paper';

export interface IResponsableDiagnosisInputTextProps {
  logo?: JSX.Element;
  label: string;
  value: string;
  error: boolean;
  errorText: string;
  multiline?: boolean;
  onChangeText: (text: string) => void;
}

export const ResponsableDiagnosisInputText = ({
  logo,
  label,
  value,
  error,
  errorText,
  onChangeText,
}: IResponsableDiagnosisInputTextProps) => {
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
          value={value}
          onChangeText={(text: string) => {
            onChangeText(text);
          }}
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
