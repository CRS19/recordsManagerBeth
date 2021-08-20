import React, {createRef, useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {styles} from '../../theme/GlobalStyles';

interface IModalInput {
  label: string;
  logo: JSX.Element;
  hasMask: boolean;
  mask?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  initialValue: string;
  openModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalInput = (props: IModalInput) => {
  // @ts-ignore
  const ref = createRef<TextInput>();

  const {mask, hasMask, setValue, initialValue, openModal} = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.ModalInputLogoContainer}>{props.logo}</View>

      {hasMask ? (
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'white'}}
          mode="flat"
          value={initialValue}
          label={props.label}
          onFocus={() => {
            console.log('abrir modal');
            openModal ? openModal(true) : console.log('no hay na que abrir');
          }}
          selectionColor="#6200EE"
          underlineColor="#6200EE"
          showSoftInputOnFocus={false}
          ref={ref}
          theme={{
            colors: {primary: '#6200EE'},
          }}
          render={props => (
            <TextInputMask
              {...props}
              ref={ref}
              mask={mask}
              onChangeText={(text, text2) => {
                setValue(text);
              }}
            />
          )}
        />
      ) : (
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'white'}}
          mode="flat"
          label={props.label}
          selectionColor="#6200EE"
          underlineColor="#6200EE"
          showSoftInputOnFocus={false}
          value={initialValue}
          onChangeText={text => {
            setValue(text);
          }}
          theme={{
            colors: {primary: '#6200EE'},
          }}
          onFocus={() => {
            console.log('abrir modal');
            openModal ? openModal(true) : console.log('no hay na que abrir');
          }}
        />
      )}
      <View style={styles.ModalInputDivider} />
    </View>
  );
};
