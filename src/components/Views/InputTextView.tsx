import {isNil} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {styles} from '../../theme/GlobalStyles';

export interface IInputTextViewProps {
  label: string;
  value: string;
  labelUnidad?: string;
}

export const InputTextView = ({
  label,
  value,
  labelUnidad = '',
}: IInputTextViewProps) => {
  const text =
    labelUnidad === ''
      ? value.toUpperCase()
      : `${value.toUpperCase()} ${labelUnidad}`;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ModalInputLogoContainer}>
          <GeneralIcon />
        </View>
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'transparent'}}
          mode="flat"
          label={label.toUpperCase()}
          selectionColor="#6200EE"
          underlineColor="#6200EE"
          showSoftInputOnFocus={false}
          selectTextOnFocus={true}
          editable={false}
          value={text}
          theme={{
            colors: {primary: '#6200EE', placeholder: '#6200EE'},
          }}
        />
      </View>
      <View style={styles.ModalInputDivider} />
    </View>
  );
};