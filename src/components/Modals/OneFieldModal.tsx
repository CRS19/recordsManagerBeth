import React, {createRef, Dispatch, useEffect, useState} from 'react';
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
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import TextInputMask from 'react-native-text-input-mask';

interface IOneFieldModal {
  title: string;
  openCloseModal: boolean;
  closeModal: (value: number) => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  initialPrice: number;
}

export const OneFieldModal = (props: IOneFieldModal) => {
  const {title, openCloseModal, closeModal, setOpenCloseModal, initialPrice} =
    props;

  const [precio, setPrecio] = useState(String(initialPrice));
  const [keyboardSize, setKeyboardSize] = React.useState(0);
  // @ts-ignore
  const ref = createRef<TextInput>();
  const {width, height} = useWindowDimensions();

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
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <TextInput
                  style={{
                    width: 179,
                    marginTop: 10,
                    marginBottom: 10,
                    elevation: 20,
                  }}
                  label="PRECIO USD"
                  value={precio}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  ref={ref}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  keyboardType="decimal-pad"
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref}
                      mask="$[09].[99]"
                      onChangeText={(text, text2) => {
                        setPrecio(text.slice(1));
                      }}
                    />
                  )}
                />
                <BorderButtom
                  title="Guardar"
                  onPress={() => closeModal(Number(precio))}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
