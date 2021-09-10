import React, {Dispatch, useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {orange100} from 'react-native-paper/lib/typescript/styles/colors';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';

interface IDatePickerModal {
  title: string;
  dataOptions: string[];
  openCloseModal: boolean;
  onCloseModal: () => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  cow: ICow;
  setProperty: React.Dispatch<React.SetStateAction<ICow>>;
}

export const RazaPickerModal = (props: IDatePickerModal) => {
  const {
    title,
    openCloseModal,
    dataOptions,
    onCloseModal,
    setOpenCloseModal,
    cow,
    setProperty,
  } = props;

  const safeRaza = (raza: string) => {
    setProperty({...cow, raza});
    setOpenCloseModal(false);
  };

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
          style={styles.ModalGeneralStyle}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => console.log('no cerrar')}>
            <View style={styles.ModalRazaPickerModalContainer}>
              <View style={styles.ModalRazPickerModalPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                {dataOptions.map((item, iterator) => {
                  return (
                    <TouchableOpacity
                      key={iterator}
                      activeOpacity={0.8}
                      onPress={() => safeRaza(item)}>
                      <View key={iterator} style={styles.ModalRazaPickerItem}>
                        <Text
                          key={iterator}
                          style={styles.ModalRazaPickerItemTitle}>
                          {item}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
