import React from 'react';
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface ILoadingModal {
  title: string;
  openCloseModal: boolean;
}

export const LoadingModal = (props: ILoadingModal) => {
  const {title, openCloseModal} = props;

  return (
    <ScrollView>
      <Modal
        animationType="fade"
        visible={openCloseModal}
        transparent={true}
        statusBarTranslucent>
        <TouchableOpacity activeOpacity={1} style={styles.ModalGeneralStyle}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'transparent'}}
            onPress={() => {}}>
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <ActivityIndicator
                  animating={true}
                  size={'large'}
                  color={'#32AC96'}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
