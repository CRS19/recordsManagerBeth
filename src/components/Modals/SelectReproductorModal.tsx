import React, {Dispatch, useEffect, useState, createRef, useRef} from 'react';
import {
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IReproductionRecord} from '../../interfaces/ReproductionRecord';
import {IReproductoresList} from '../../interfaces/ReproductoresList';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {Picker} from '@react-native-picker/picker';
import {recordMontaIa} from '../../utils/recordsTemplates/reproduction_template';
import {get, isEmpty, set} from 'lodash';
import {useDispatch} from 'react-redux';
import {updateReproductionRecord} from '../../store/actionCreators';
import {cloneDeep} from 'lodash';

interface ISelectReproductorModal {
  openCloseModal: boolean;
  recordToUpdate: IReproductionRecord;
  reproductorsList: IReproductoresList[];
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setOpenDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
}

export const SelectReproductorModal = (props: ISelectReproductorModal) => {
  const {
    openCloseModal,
    recordToUpdate,
    setOpenCloseModal,
    reproductorsList,
    setIsLoading,
    setOpenDatePickerModal,
  } = props;
  const dispatch = useDispatch();
  const [reproductor, setReproductor] = useState(
    get(reproductorsList[0], 'idVaca', ''),
  );
  const [keyboardSize, setKeyboardSize] = React.useState(0);
  // @ts-ignore
  const ref = createRef<TextInput>();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const saveNewRecord = () => {
    const newRecord = cloneDeep(recordToUpdate);

    set(
      newRecord.records[newRecord.records.length - 1],
      'idReproductor',
      reproductor,
    );

    setIsLoading(true);
    dispatch(updateReproductionRecord(newRecord));
    setIsLoading(false);
    setOpenCloseModal(false);
    setOpenDatePickerModal(true);
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
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => {}}>
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                {/* piker */}
                <Text style={styles.ModalOneFieldTitle}>
                  Seleccione el reproductor
                </Text>
                <View
                  style={{
                    width: 179,
                    borderWidth: 1.5,
                    borderRadius: 4,
                    marginVertical: 10,
                    borderColor: '#2B9336',
                  }}>
                  {!isEmpty(reproductorsList) && (
                    <Picker
                      selectedValue={reproductor}
                      onValueChange={(itemValue, itemIndex) =>
                        setReproductor(itemValue)
                      }>
                      {reproductorsList.map(
                        (reproductor: IReproductoresList, index: number) => (
                          <Picker.Item
                            key={`${reproductor.idVaca}-${index}`}
                            label={`${reproductor.idVaca}`}
                            value={`${reproductor.idVaca}`}
                          />
                        ),
                      )}
                    </Picker>
                  )}
                </View>
                <BorderButtom title="Guardar" onPress={() => saveNewRecord()} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
