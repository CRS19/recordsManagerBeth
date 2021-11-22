import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {styles} from '../../theme/GlobalStyles';
import moment from 'moment';

export interface IInputViewDateProps {
  label?: string;
  value: number;
}

export const InputViewDate = ({
  value = moment.now(),
  label = 'Fecha',
}: IInputViewDateProps) => {
  const dateToText = (timestamp: number) => {
    return moment(timestamp).format('DD/MM/YYYY');
  };

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
          value={dateToText(value)}
          theme={{
            colors: {primary: '#6200EE', placeholder: '#6200EE'},
          }}
        />
      </View>
      <View style={styles.ModalInputDivider} />
    </View>
  );
};
