import React, {createRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';

interface IModalInput {
  label: string;
  logo: JSX.Element;
  hasMask: boolean;
  mask?: string;
  property: ICowKeys;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  initialValue: ICow;
  openModal?: React.Dispatch<React.SetStateAction<boolean>>;
  numKeyboard?: boolean;
}

export const ModalInput = (props: IModalInput) => {
  // @ts-ignore
  const ref = createRef<TextInput>();

  const {
    mask,
    hasMask,
    setValue,
    initialValue,
    openModal,
    property,
    numKeyboard,
  } = props;

  const modal = () => {
    openModal!(true);
    console.log('desfocusear');
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.ModalInputLogoContainer}>{props.logo}</View>

      {hasMask ? (
        <TextInput
          style={{height: 52, width: 221, backgroundColor: '#03DAC5'}}
          mode="flat"
          value={initialValue[property]!.toString()}
          label={props.label}
          selectionColor="#6200EE"
          underlineColor="#6200EE"
          keyboardType={numKeyboard ? 'decimal-pad' : 'default'}
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
                setValue!({...initialValue, [property]: text2});
              }}
            />
          )}
        />
      ) : (
        <TouchableOpacity onPress={() => modal()}>
          <TextInput
            style={{height: 52, width: 221, backgroundColor: '#03DAC5'}}
            mode="flat"
            label={props.label}
            selectionColor="#6200EE"
            underlineColor="#6200EE"
            showSoftInputOnFocus={false}
            editable={false}
            value={initialValue[property]!.toString()}
            onChangeText={text => {
              setValue!({...initialValue, [property]: text});
            }}
            theme={{
              colors: {primary: '#6200EE', placeholder: '#6200EE'},
            }}
          />
        </TouchableOpacity>
      )}
      <View style={styles.ModalInputDivider} />
    </View>
  );
};
