import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../theme/GlobalStyles';

interface IViewInputProps {
  label: string;
  logo: JSX.Element;
  value: string;
}

export const ViewInput = (props: IViewInputProps) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ModalInputLogoContainer}>{props.logo}</View>
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'transparent'}}
          mode="flat"
          value={props.value}
          label={props.label}
          selectionColor="#6200EE"
          selectTextOnFocus={true}
          editable={false}
          underlineColor="#6200EE"
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
    </View>
  );
};
