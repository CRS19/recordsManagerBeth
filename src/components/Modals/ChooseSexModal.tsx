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
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';

interface IChooseSexModal {
  openCloseModal: boolean;
  cow: ICow;
  onCloseModal: Dispatch<React.SetStateAction<boolean>>;
  setProperty: React.Dispatch<React.SetStateAction<ICow>>;
}

export const ChooseSexModal = ({
  cow,
  openCloseModal,
  onCloseModal,
  setProperty,
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
                        setProperty({...cow!, sexo: 'HEMBRA'});
                        onCloseModal(false);
                      }}>
                      <View style={styles.ModalSexButtom}>
                        <Text style={styles.ModalSexButtomTitle}>hembra</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setProperty({...cow!, sexo: 'MACHO'});
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
