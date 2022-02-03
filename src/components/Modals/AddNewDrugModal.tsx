import React, {Dispatch, useEffect, useRef} from 'react';
import {
  Keyboard,
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IDrug, IDugsKeys} from '../../interfaces/Drug.interface';
import {initialNewDrugForm} from '../../interfaces/newCowForm';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {NewDrugsInput} from '../CustomInput/NewDrugsInput';
import {InputViewDate} from '../Views/InputViewDate';
import {useAddNewDrugModal} from './state/useAddNewDrugModal';

interface IAddNewDrugModal {
  DrugToInsert: IDrug;
  setNewDrug: React.Dispatch<React.SetStateAction<IDrug>>;
  openCloseModal: boolean;
  closeModal: () => void;
  openCloseDatePickerModal: (isOpen: boolean) => void;
  setOpenCloseModal: Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewDrugModal = ({
  openCloseModal,
  closeModal,
  setOpenCloseModal,
  DrugToInsert,
  setNewDrug,
  openCloseDatePickerModal,
}: IAddNewDrugModal) => {
  const form = useRef(initialNewDrugForm);
  const {validateForm} = useAddNewDrugModal({drug: DrugToInsert, form});

  const [keyboardSize, setKeyboardSize] = React.useState(0);

  console.log('DEBUG: main modal render');

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

  const onSaveForm = () => {
    validateForm();
    if (!Object.entries(form.current).some(el => el[1] === true)) {
      console.log('Todo bien todo correcto y yo que me alegro');
      closeModal();
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
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => {}}>
            <View style={styles.ModalOneFieldContainer}>
              <View style={styles.ModalOneFieldInputPosition}>
                <TouchableOpacity
                  onPress={() => openCloseDatePickerModal(true)}>
                  <NewDrugsInput
                    mask="[A-Za-z]"
                    label="test"
                    editable={true}
                    isNumber={false}
                    valueObj={DrugToInsert}
                    property={IDugsKeys.name}
                    setValue={setNewDrug}
                    errorText="Ingrese un nombre"
                    error={false}
                    numKeyboard={false}
                  />
                  <InputViewDate value={DrugToInsert.expDate} />
                </TouchableOpacity>
                <View style={{marginTop: 20}}>
                  <BorderButtom title="Guardar" onPress={() => onSaveForm()} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
