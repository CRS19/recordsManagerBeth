import React, {Dispatch, useEffect, useState, createRef} from 'react';

import {
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';

interface IThreeFieldModal {
  title: string;
  openCloseModal: boolean;
  onCloseModal: (value: number) => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  cow: ICow;
  setProperty: React.Dispatch<React.SetStateAction<ICow>>;
}

export const ThreeFieldModal = (props: IThreeFieldModal) => {
  const {
    title,
    openCloseModal,
    onCloseModal,
    setOpenCloseModal,
    cow,
    setProperty,
  } = props;

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [keyboardSize, setKeyboardSize] = React.useState(0);
  // @ts-ignore
  const ref = createRef<TextInput>();
  // @ts-ignore
  const ref2 = createRef<TextInput>();
  // @ts-ignore
  const ref3 = createRef<TextInput>();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <ScrollView>
      <Modal
        animationType="fade"
        visible={openCloseModal}
        onRequestClose={() => setOpenCloseModal(false)}
        transparent={true}
        statusBarTranslucent>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setOpenCloseModal(false)}
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => console.log('no cerrar')}>
            <View style={{...styles.ModalOneFieldContainer, height: 350}}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <TextInput
                  style={{
                    width: 179,
                    marginTop: 10,
                    marginBottom: 10,
                    elevation: 20,
                  }}
                  label="AÑOS"
                  value={years.toString()}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  keyboardType="decimal-pad"
                  selectTextOnFocus={true}
                  ref={ref}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref}
                      mask="[000000]"
                      onChangeText={(text, text2) => {
                        setYears(Number(text2!));
                      }}
                    />
                  )}
                />
                <TextInput
                  style={{
                    width: 179,
                    marginTop: 10,
                    marginBottom: 10,
                    elevation: 20,
                  }}
                  label="MESES"
                  value={months.toString()}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  selectTextOnFocus={true}
                  ref={ref2}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  keyboardType="decimal-pad"
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref2}
                      mask="[000000]"
                      onChangeText={(text, text2) => {
                        setMonths(Number(text2!));
                      }}
                    />
                  )}
                />
                <TextInput
                  style={{
                    width: 179,
                    marginTop: 10,
                    marginBottom: 10,
                    elevation: 20,
                  }}
                  label="DIAS"
                  value={days.toString()}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  selectTextOnFocus={true}
                  ref={ref2}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  keyboardType="decimal-pad"
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref3}
                      mask="[000000]"
                      onChangeText={(text, text2) => {
                        setDays(Number(text2!));
                      }}
                    />
                  )}
                />
                <BorderButtom
                  title="Guardar"
                  onPress={() => {
                    setProperty({
                      ...cow,
                      vacaInfo: {
                        ...cow.vacaInfo!,
                        edadPrimerParto: {
                          years,
                          months,
                          days,
                        },
                      },
                    });
                    setOpenCloseModal(false);
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
