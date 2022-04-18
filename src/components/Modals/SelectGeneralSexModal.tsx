import React, {Dispatch} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {LogoHembra} from '../../assets/LogoHembra';
import {LogoMacho} from '../../assets/LogoMacho';
import {styles} from '../../theme/GlobalStyles';

interface ISelectGeneralSexModal {
  openCloseModal: boolean;
  onSelectSex: (sex: string) => void;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

export const SelectGeneralSexModal = ({
  openCloseModal,
  onSelectSex,
  setOpenModal,
}: ISelectGeneralSexModal) => {
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
          onPress={() => {}}>
          <View>
            <View style={styles.ModalSexChooseContainer}>
              <View style={styles.ModalSexTitlePosition}>
                <Text style={styles.ModalSexTitle}>Seleccione el sexo</Text>
                <View style={{flex: 1}}>
                  <View style={styles.ModalSexIconContainer}>
                    <LogoHembra></LogoHembra>
                    <LogoMacho></LogoMacho>
                  </View>
                  <View style={styles.ModalSexBottomContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        onSelectSex('HEMBRA');
                      }}>
                      <View style={styles.ModalSexButtom}>
                        <Text style={styles.ModalSexButtomTitle}>hembra</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        onSelectSex('MACHO');
                      }}>
                      <View style={styles.ModalSexButtom}>
                        <Text style={styles.ModalSexButtomTitle}>Macho</Text>
                      </View>
                    </TouchableOpacity>
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
