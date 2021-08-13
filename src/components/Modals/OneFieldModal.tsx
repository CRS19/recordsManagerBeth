import React, {Dispatch, useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';

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
                  onChangeText={text => setPrecio(text)}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  keyboardType="decimal-pad"
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
