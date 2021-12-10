import React, {Dispatch} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {FillButton} from '../Buttoms/FillButton';

export interface ITwoButtomsModalProps {
  openCloseModal: boolean;
  btnTitle1: string;
  btnTitle2: string;
  onPressBtn1: () => void;
  onPressBtn2: () => void;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

export const TwoButtomsModal = ({
  openCloseModal,
  btnTitle1,
  btnTitle2,
  onPressBtn1,
  onPressBtn2,
  setOpenModal,
}: ITwoButtomsModalProps) => {
  return (
    <Modal
      animationType="fade"
      visible={openCloseModal}
      onRequestClose={() => setOpenModal(false)}
      transparent={true}
      statusBarTranslucent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setOpenModal(false)}
        style={styles.ModalGeneralStyle}>
        <TouchableWithoutFeedback
          touchSoundDisabled={true}
          style={{backgroundColor: 'green'}}
          onPress={() => console.log('no cerrar')}>
          <View>
            <View
              style={{
                ...styles.ModalSexChooseContainer,
                width: 400,
                height: 180,
              }}>
              <View style={{...styles.ModalSexTitlePosition, width: 400}}>
                <Text style={{...styles.ModalSexTitle, textAlign: 'center'}}>
                  Seleccione el estado de la cría
                </Text>
                <View style={{flex: 1}}>
                  <View style={styles.ModalSexBottomContainer}>
                    <View style={{marginHorizontal: 4}}>
                      <FillButton title={btnTitle1} onPress={onPressBtn1} />
                    </View>
                    <View style={{marginHorizontal: 4}}>
                      <FillButton title={btnTitle2} onPress={onPressBtn2} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};
