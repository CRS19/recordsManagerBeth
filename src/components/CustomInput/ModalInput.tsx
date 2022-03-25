import React, {createRef, Dispatch} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {LeftButtomInput} from '../../assets/LeftButtomInput';
import {AgeEnum} from '../../constants/ageTypeEnum';
import {useModalInput} from './state/useModalInput';

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
  defaultValue?: string;
  hasLeftButtom?: boolean;
  ageType?: AgeEnum;
  changeAge?: React.Dispatch<React.SetStateAction<AgeEnum>>;
  setPropertyFecha?: Dispatch<React.SetStateAction<ICowKeys>>;
  errorText?: string;
  error?: boolean;
  validate?: () => void;
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
    isNumber,
    editable, // USARLA PARA EL SOLO VIEW COMO FALSE
    defaultValue,
    hasLeftButtom,
    ageType,
    changeAge,
    errorText,
    error,
    setPropertyFecha,
    validate,
  } = props;

  const {
    setEndEditing,
    getValue,
    saveWithOutMask,
    saveWithMask,
    leftButtomAction,
    modal,
  } = useModalInput({
    setValue,
    initialValue,
    openModal,
    property,
    isNumber,
    defaultValue,
    ageType,
    changeAge,
    setPropertyFecha,
  });

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ModalInputLogoContainer}>{props.logo}</View>
        {hasMask ? (
          <TextInput
            style={{height: 52, width: 221, backgroundColor: 'transparent'}}
            mode="flat"
            value={getValue()}
            label={props.label}
            selectionColor="#6200EE"
            selectTextOnFocus={true}
            editable={editable}
            onFocus={() => setEndEditing(false)}
            onEndEditing={() => setEndEditing(true)}
            onBlur={() => (!!validate ? validate() : () => {})}
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
                onChangeText={(text, text2) => saveWithMask(text, text2)}
              />
            )}
          />
        ) : (
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => modal()}
            disabled={!editable}>
            <TextInput
              style={{height: 52, width: 221, backgroundColor: 'transparent'}}
              mode="flat"
              label={props.label}
              selectionColor="#6200EE"
              underlineColor="#6200EE"
              showSoftInputOnFocus={false}
              selectTextOnFocus={true}
              editable={false}
              value={getValue()}
              onChangeText={text => saveWithOutMask(text)}
              theme={{
                colors: {primary: '#6200EE', placeholder: '#6200EE'},
              }}
            />
            {!!hasLeftButtom ? (
              <View style={{position: 'absolute', right: 15, top: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    leftButtomAction();
                  }}>
                  <LeftButtomInput />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </TouchableOpacity>
        )}
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
