import React, {Dispatch} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {orange100} from 'react-native-paper/lib/typescript/styles/colors';
import {LogoHembra} from '../../assets/LogoHembra';
import {LogoMacho} from '../../assets/LogoMacho';
import {styles} from '../../theme/GlobalStyles';

interface IChooseSexModal {
  openCloseModal: boolean;
  onCloseModal: Dispatch<React.SetStateAction<boolean>>;
  setSexo: React.Dispatch<React.SetStateAction<string>>;
}

export const ChooseSexModal = ({
  openCloseModal,
  onCloseModal,
  setSexo,
}: IChooseSexModal) => {
  return (
    <Modal
      animationType="fade"
      visible={openCloseModal}
      onRequestClose={() => onCloseModal(false)}
      transparent={true}
      statusBarTranslucent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onCloseModal(false)}
        style={styles.ModalGeneralStyle}>
        <TouchableWithoutFeedback
          touchSoundDisabled={true}
          style={{backgroundColor: 'green'}}
          onPress={() => console.log('no cerrar')}>
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
                        setSexo('HEMBRA');
                        onCloseModal(false);
                      }}>
                      <View style={styles.ModalSexButtom}>
                        <Text style={styles.ModalSexButtomTitle}>hembra</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setSexo('MACHO');
                        onCloseModal(false);
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
