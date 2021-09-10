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

interface ITwoFieldModal {
  title: string;
  openCloseModal: boolean;
  onCloseModal: (value: number) => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  cow: ICow;
  propertyOne: ICowKeys;
  propertyTwo: ICowKeys;
  setProperty: React.Dispatch<React.SetStateAction<ICow>>;
}

export const TwoFieldModal = (props: ITwoFieldModal) => {
  const {
    title,
    openCloseModal,
    onCloseModal,
    setOpenCloseModal,
    cow,
    setProperty,
    propertyOne,
    propertyTwo,
  } = props;

  const [parentName, setParentName] = useState('');
  const [parentArete, setParentArete] = useState('');
  const [keyboardSize, setKeyboardSize] = React.useState(0);
  // @ts-ignore
  const ref = createRef<TextInput>();
  // @ts-ignore
  const ref2 = createRef<TextInput>();
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
                  label="NOMBRE"
                  value={parentName}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  ref={ref}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref}
                      mask="[A][------------------------------------]"
                      onChangeText={(text, text2) => {
                        setParentName(text2!);
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
                  label="ARETE"
                  value={parentArete}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
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
                        setParentArete(text2!);
                      }}
                    />
                  )}
                />
                <BorderButtom
                  title="Guardar"
                  onPress={() => {
                    setProperty({
                      ...cow,
                      [propertyOne]: parentName,
                      [propertyTwo]: parentArete,
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
