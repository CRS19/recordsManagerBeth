import React, {createRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import moment from 'moment';
import {useRef} from 'react';

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
  isNumber?: boolean;
  editable?: boolean;
}

export const ModalInput = (props: IModalInput) => {
  // @ts-ignore
  const ref = createRef<TextInput>();
  const [endEditing, setEndEditing] = useState(false);

  const {
    mask,
    hasMask,
    setValue,
    initialValue,
    openModal,
    property,
    numKeyboard,
    isNumber,
    editable,
  } = props;

  const modal = () => {
    openModal!(true);
    console.log('desfocusear');
  };

  const getValue = (): string => {
    if (property.includes('fecha')) {
      return moment(initialValue[property]).format('DD/MM/YYYY');
    } else if (property.includes('peso') && endEditing) {
      console.log(
        'concatena',
        initialValue[property]!.toString().concat(' Kg'),
      );
      return initialValue[property]!.toString().concat(' Kg');
    } else {
      return initialValue[property]!.toString();
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.ModalInputLogoContainer}>{props.logo}</View>

      {hasMask ? (
        <TextInput
          style={{height: 52, width: 221, backgroundColor: 'white'}}
          mode="flat"
          value={getValue()}
          label={props.label}
          selectionColor="#6200EE"
          selectTextOnFocus={true}
          editable={editable}
          onFocus={() => setEndEditing(false)}
          onEndEditing={() => setEndEditing(true)}
          underlineColor="#6200EE"
          keyboardType={numKeyboard ? 'decimal-pad' : 'default'}
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
              mask={mask}
              onChangeText={(text, text2) => {
                isNumber
                  ? setValue!({...initialValue, [property]: Number(text)})
                  : setValue!({...initialValue, [property]: text2});
              }}
            />
          )}
        />
      ) : (
        <TouchableOpacity onPress={() => modal()}>
          <TextInput
            style={{height: 52, width: 221, backgroundColor: 'white'}}
            mode="flat"
            label={props.label}
            selectionColor="#6200EE"
            underlineColor="#6200EE"
            showSoftInputOnFocus={false}
            selectTextOnFocus={true}
            editable={false}
            value={getValue()}
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
