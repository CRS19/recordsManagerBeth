import React, {Dispatch} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {isNil} from 'lodash';

interface ISelectModal {
  title: string;
  dataOptions: string[];
  title2?: string;
  dataOptions2?: string[];
  openCloseModal: boolean;
  onCloseModal: (palpType: string) => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
}

export const SelectModal = (props: ISelectModal) => {
  const {
    title,
    title2,
    openCloseModal,
    dataOptions,
    dataOptions2,
    onCloseModal,
    setOpenCloseModal,
  } = props;

  const getSecondList = () => {
    return (
      <View style={{display: 'flex'}}>
        <Text style={styles.ModalOneFieldTitle}>{title2}</Text>
        {dataOptions2!.map((item, iterator) => {
          return (
            <TouchableOpacity
              key={iterator}
              activeOpacity={0.8}
              onPress={() => onCloseModal(item)}>
              <View key={iterator} style={styles.ModalRazaPickerItem}>
                <Text key={iterator} style={styles.ModalRazaPickerItemTitle}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
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
            onPress={() => {}}>
            <View style={styles.ModalRazaPickerModalContainer}>
              <View style={styles.ModalRazPickerModalPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                {dataOptions.map((item, iterator) => {
                  return (
                    <TouchableOpacity
                      key={iterator}
                      activeOpacity={0.8}
                      onPress={() => onCloseModal(item)}>
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
                {!isNil(dataOptions2) && getSecondList()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
