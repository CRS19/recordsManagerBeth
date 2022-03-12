import React, {Dispatch, useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import moment from 'moment';
import {
  IReproductionRecord,
  MontaTypeEnum,
} from '../../interfaces/ReproductionRecord';
import {cloneDeep, set} from 'lodash';
import {useDispatch} from 'react-redux';
import {updateReproductionRecord} from '../../store/actionCreators';
import {getTimestamp} from '../../utils/time-utils';

interface IDatePickerGeneralModal {
  title: string;
  openCloseModal: boolean;
  recordToUpdate: IReproductionRecord;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
}

export const DatePickerGeneralModal = (props: IDatePickerGeneralModal) => {
  const dispatch = useDispatch();
  const {title, openCloseModal, setOpenCloseModal} = props;
  const [markedDate, setMarkedDate] = useState({});
  const [timestamp, setTimestamp] = useState(0);
  const date = moment().format('YYYY-MM-DD');

  const setDate = () => {
    // TODO ver la forma de setear el registro como parto ? :c no entiendos

    const newRecord = cloneDeep(props.recordToUpdate);

    set(
      newRecord.records[newRecord.records.length - 1],
      'fechaPosibleParto',
      timestamp,
    );

    set(
      newRecord.records[newRecord.records.length - 1],
      'montaType',
      MontaTypeEnum.MONTA,
    );
    set(
      newRecord.records[newRecord.records.length - 1],
      'montaIaTimestamp',
      getTimestamp(),
    );

    dispatch(updateReproductionRecord(newRecord));
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
            <View style={styles.ModalDatePickerContainer}>
              <View style={styles.ModalDatePickerInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <Calendar
                  style={{width: 380}}
                  markedDates={markedDate}
                  onDayPress={day => {
                    const {dateString} = day;
                    const time = day.timestamp;
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
