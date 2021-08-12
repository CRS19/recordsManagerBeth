import React, {Dispatch, SetStateAction} from 'react';
import {View, Modal, Text, TouchableOpacity, Button} from 'react-native';
import {LogoHembra} from '../../assets/LogoHembra';
import {LogoMacho} from '../../assets/LogoMacho';
import {styles} from '../../theme/GlobalStyles';

interface IChooseSexModal {
  title: string;
  openCloseModal: boolean;
  onCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const ChooseSexModal = ({
  openCloseModal,
  onCloseModal,
}: IChooseSexModal) => {
  return (
    <Modal
      animationType="fade"
      visible={openCloseModal}
      transparent={true}
      statusBarTranslucent>
      <View style={styles.ModalGeneralStyle}>
        <View style={styles.ModalSexChooseContainer}>
          <View style={styles.ModalSexTitlePosition}>
            <Text style={styles.ModalSexTitle}>Seleccione el sexo</Text>
            <View style={{flex: 1}}>
              <View style={styles.ModalSexIconContainer}>
                <LogoHembra></LogoHembra>
                <LogoMacho></LogoMacho>
              </View>
              <View style={styles.ModalSexBottomContainer}>
                <TouchableOpacity>
                  <View style={styles.ModalSexButtom}>
                    <Text style={styles.ModalSexButtomTitle}>hembra</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.ModalSexButtom}>
                    <Text style={styles.ModalSexButtomTitle}>Macho</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Button title="cerrar modal" onPress={() => onCloseModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
