import React, {Dispatch, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {UnitTypeEnum} from '../../constants/PresentationEnum';
import {IDrug, IDugsKeys} from '../../interfaces/Drug.interface';
import {initialNewDrugForm} from '../../interfaces/newCowForm';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {NewDrugsTextInput} from '../CustomInput/NewDrugsInput';
import {NewDrugsNumberInput} from '../CustomInput/NewDrugsNumberInput';
import {PresentationPickerInput} from '../CustomInput/PresentationPickerInput';
import {InputViewDate} from '../Views/InputViewDate';
import {useAddNewDrugModal} from './state/useAddNewDrugModal';

interface IAddNewDrugModal {
  DrugToInsert: IDrug;
  setNewDrug: React.Dispatch<React.SetStateAction<IDrug>>;
  openCloseModal: boolean;
  closeModal: (DrugToSave: IDrug) => void;
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
  const [keyboardSize, setKeyboardSize] = React.useState(0);
  const [drugP, setDrugp] = useState<IDrug>({
    created: 0,
    name: '',
    expDate: 0,
    presentationForm: '',
    unitType: UnitTypeEnum.EMPTY,
    amount: 0,
    unitContent: 0,
    available: 0,
  });

  const {validateForm} = useAddNewDrugModal({
    drug: drugP,
    form,
    expDate: DrugToInsert.expDate,
  });

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
    console.log(JSON.stringify(form.current));
    if (!Object.entries(form.current).some(el => el[1] === true)) {
      console.log('Todo bien todo correcto y yo que me alegro');
      const DrugToSave = {
        ...DrugToInsert,
        name: drugP.name,
        presentationForm: drugP.presentationForm,
        unitType: drugP.unitType,
        unitContent: drugP.unitContent,
        amount: drugP.amount,
      };
      closeModal(DrugToSave);
    }
  };

  // en onSave guardar el

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
            <View
              style={{
                ...styles.ModalOneFieldContainer,
                backgroundColor: '#03DAC5',
                height: 450,
              }}>
              <View style={styles.ModalOneFieldInputPosition}>
                <TouchableOpacity
                  onPress={() => console.log(JSON.stringify(drugP, null, 3))}>
                  <Text>Ver nuevo farmaco</Text>
                </TouchableOpacity>
                <NewDrugsTextInput
                  mask="[A-Za-z]"
                  label="Nombre del fármaco"
                  editable={true}
                  isNumber={false}
                  valueObj={drugP}
                  property={IDugsKeys.name}
                  setValue={setDrugp}
                  errorText="Ingrese un nombre"
                  error={form.current.name}
                  numKeyboard={false}
                />
                <TouchableOpacity
                  onPress={() => openCloseDatePickerModal(true)}>
                  <InputViewDate
                    label="Fecha de caducidad"
                    value={DrugToInsert.expDate}
                  />
                  {!!form.current.expDate ? (
                    <View style={{position: 'absolute', right: -10, bottom: 0}}>
                      <Text style={styles.ErrorTextHelper}>
                        {'Seleccione una fecha'}
                      </Text>
                    </View>
                  ) : (
                    <View />
                  )}
                </TouchableOpacity>
                <NewDrugsTextInput
                  mask="[A-Za-z]"
                  label="Presentación"
                  editable={true}
                  isNumber={false}
                  valueObj={drugP}
                  property={IDugsKeys.presentationForm}
                  setValue={setDrugp}
                  errorText="Ingrese una presentación"
                  error={form.current.presentationForm}
                  numKeyboard={false}
                />
                <PresentationPickerInput
                  error={form.current.unitTye}
                  errorMessage="Seleccione una unidad de medida"
                  valueObj={drugP}
                  setValue={setDrugp}
                />
                <NewDrugsNumberInput
                  label="Contenido por unidad"
                  valueObj={drugP}
                  property={IDugsKeys.unitContent}
                  setValue={setDrugp}
                  errorText={'Ingrese una cantidad correcta'}
                  error={form.current.unitContent}
                />
                <NewDrugsNumberInput
                  label="Cantidad"
                  valueObj={drugP}
                  property={IDugsKeys.amount}
                  setValue={setDrugp}
                  errorText={'Ingrese una cantidad correcta'}
                  error={form.current.amount}
                />

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
