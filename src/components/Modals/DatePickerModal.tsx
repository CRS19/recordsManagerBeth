import React, {Dispatch, useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar, DateObject} from 'react-native-calendars';
import {TextInput} from 'react-native-paper';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import moment from 'moment';
import {ECU_5_GTM} from '../../constants/EcuTimestamp';
import {ICowKeys} from '../../constants/ICowKeysEnum';

interface IDatePickerModal {
  title: string;
  openCloseModal: boolean;
  onCloseModal: () => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  cow: ICow;
  property: ICowKeys;
  setProperty: React.Dispatch<React.SetStateAction<ICow>>;
}

export const DatePickerModal = (props: IDatePickerModal) => {
  const {
    title,
    openCloseModal,
    onCloseModal,
    setOpenCloseModal,
    cow,
    setProperty,
    property,
  } = props;
  const [markedDate, setMarkedDate] = useState({});
  const [timestamp, setTimestamp] = useState(0);
  const date = moment().format('YYYY-MM-DD');

  const setDate = () => {
    if (property.includes('fechaUltimoParto')) {
      setProperty({
        ...cow,
        vacaInfo: {...cow.vacaInfo!, fechaUltimoParto: timestamp},
      });
    } else {
      setProperty({...cow, [property]: timestamp});
    }
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
            <View style={styles.ModalDatePickerContainer}>
              <View style={styles.ModalDatePickerInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <Calendar
                  style={{width: 380}}
                  maxDate={date}
                  markedDates={markedDate}
                  onDayPress={day => {
                    const {dateString} = day;
                    const time = day.timestamp - ECU_5_GTM;
                    setTimestamp(time);
                    setMarkedDate({
                      [dateString]: {
                        selected: true,
                        selectedColor: 'green',
                      },
                    });
                  }}
                  enableSwipeMonths={true}
                />
                <View style={{marginTop: 15}}>
                  <BorderButtom
                    title="Guardar"
                    onPress={() => {
                      setDate();
                      setOpenCloseModal(false);
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
