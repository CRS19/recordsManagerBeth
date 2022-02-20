import {Picker} from '@react-native-picker/picker';
import React, {createRef, useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {FREQUENCY_PICKER_ITEMS} from '../../constants/SanityRecords';
import {frequencyDiagnosisEnum} from '../../interfaces/SanityRecords';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {GeneralNumberInput} from '../CustomInput/GeneralNumberInput';

export interface ISetDrugFrequencyProps {
  title: string;
  openCloseModal: boolean;
  setOpenCloseModal: () => void;
  onSave: (at: frequencyDiagnosisEnum, times: number) => void;
}

export const SetDrugFrequency = ({
  title,
  openCloseModal,
  setOpenCloseModal,
  onSave,
}: ISetDrugFrequencyProps) => {
  const [keyboardSize, setKeyboardSize] = React.useState(0);

  const [times, setTimes] = useState<number>(0);
  const [at, setAt] = useState<frequencyDiagnosisEnum>(
    frequencyDiagnosisEnum.EMPTY,
  );

  // @ts-ignore
  const ref = createRef<TextInput>();

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
        onRequestClose={setOpenCloseModal}
        transparent={true}
        statusBarTranslucent>
        <TouchableOpacity
          activeOpacity={1}
          onPress={setOpenCloseModal}
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => console.log('no cerrar')}>
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <View style={{right: 10}}>
                  <TextInput
                    style={{
                      marginLeft: 8,
                      height: 52,
                      width: 221,
                      backgroundColor: 'transparent',
                    }}
                    mode="flat"
                    value={String(times)}
                    label={'Veces'}
                    selectionColor="#6200EE"
                    selectTextOnFocus={true}
                    underlineColor="#6200EE"
                    keyboardType={'decimal-pad'}
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
                        mask={'[0000000]'}
                        onChangeText={(text, text2) => setTimes(Number(text2))}
                      />
                    )}
                  />
                  <View style={{...styles.ModalInputDivider}} />
                </View>

                <View>
                  <Text style={{...styles.PickerInputLabel, left: 15}}>
                    {'FRECUENCIA'.toUpperCase()}
                  </Text>
                  <View style={styles.PickerInput}>
                    <Picker
                      selectedValue={at}
                      onValueChange={itemValue => {
                        setAt(itemValue);
                      }}>
                      {FREQUENCY_PICKER_ITEMS.map((item, index: number) => (
                        <Picker.Item
                          key={`${item}-${index}`}
                          label={`${item.label}`}
                          value={`${item.value}`}
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={{...styles.ModalInputDivider, left: 0}} />
                </View>
                <View style={{marginVertical: 20}}>
                  <BorderButtom
                    title="Guardar"
                    onPress={() => {
                      onSave(at, times);
                      setAt(frequencyDiagnosisEnum.EMPTY);
                      setTimes(0);
                      setOpenCloseModal();
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
