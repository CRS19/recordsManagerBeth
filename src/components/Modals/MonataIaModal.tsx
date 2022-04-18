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
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import {IReproductionRecord} from '../../interfaces/ReproductionRecord';
import {IReproductoresList} from '../../interfaces/ReproductoresList';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {Picker} from '@react-native-picker/picker';
import {recordMontaIa} from '../../utils/recordsTemplates/reproduction_template';
import {get, set} from 'lodash';
import {useDispatch} from 'react-redux';
import {
  decrementStockStraw,
  updateReproductionRecord,
} from '../../store/actionCreators';
import {cloneDeep} from 'lodash';
import {getTimestamp} from '../../utils/time-utils';
import {IStraw} from '../../interfaces/IStraws';

interface IMonataIaModal {
  title: string;
  openCloseModal: boolean;
  recordToUpdate: IReproductionRecord;
  strawList: IStraw[];
  getPosiblePartoDay: () => number;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const MonataIaModal = (props: IMonataIaModal) => {
  const {
    title,
    openCloseModal,
    recordToUpdate,
    setOpenCloseModal,
    getPosiblePartoDay,
    strawList,
    setIsLoading,
  } = props;
  const dispatch = useDispatch();
  const [inseminadorName, setInseminadorName] = useState('');
  const [reproductor, setReproductor] = useState(get(strawList[0], '_id', ''));
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
    const newRecord = cloneDeep(recordMontaIa);
    const strawSelected = strawList.find(straw => straw._id === reproductor);

    set(newRecord, 'inseminadorName', inseminadorName);
    set(newRecord, 'fechaPosibleParto', getPosiblePartoDay());
    set(
      newRecord,
      'idReproductor',
      `${strawSelected!.name} ${strawSelected!.registerNumber}-${
        strawSelected!.loteNumber
      }`,
    );
    set(newRecord, 'createdAt', getTimestamp());
    set(newRecord, 'montaIaTimestamp', getTimestamp());

    recordToUpdate.records.push(newRecord);

    setIsLoading(true);
    dispatch(updateReproductionRecord(recordToUpdate));
    dispatch(decrementStockStraw(reproductor));
    setIsLoading(false);
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
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => {}}>
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <TextInput
                  style={{
                    width: 179,
                    marginTop: 10,
                    marginBottom: 10,
                    elevation: 20,
                  }}
                  label="NOMBRE"
                  value={inseminadorName}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  ref={ref}
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                  render={props => (
                    <TextInputMask
                      {...props}
                      ref={ref}
                      mask="[A][------------------------------------]"
                      onChangeText={(text, text2) => {
                        setInseminadorName(text2!);
                      }}
                    />
                  )}
                />
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
                  <Picker
                    selectedValue={reproductor}
                    onValueChange={(itemValue, itemIndex) =>
                      setReproductor(itemValue)
                    }>
                    {strawList.map((reproductor: IStraw, index: number) => (
                      <Picker.Item
                        key={`${reproductor.name}-${index}`}
                        label={`${reproductor.name} ${reproductor.registerNumber}-${reproductor.loteNumber}`}
                        value={`${reproductor._id}`}
                      />
                    ))}
                  </Picker>
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
