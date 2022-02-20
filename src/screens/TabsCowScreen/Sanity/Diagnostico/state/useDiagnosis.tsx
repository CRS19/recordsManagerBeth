import {useNavigation} from '@react-navigation/native';
import {cloneDeep} from 'lodash';
import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LabelIconChipProps} from '../../../../../components/LabelIconChip/LabelIconChip';
import {
  buildMainDiagnosis,
  changeValidatationValues,
  checkDurgsForms,
  EMPTY_ADD_DRUG,
  EMPTY_DIAGNOSIS,
  getTotalByDrug,
  setFrequencyValues,
} from '../../../../../constants/SanityRecords';
import {ICow} from '../../../../../interfaces/CowInterface';
import {drugGroupEnum, IDrug} from '../../../../../interfaces/Drug.interface';
import {
  IAddDrugDiagnosisForm,
  initialAddDrugDiagnosisForm,
} from '../../../../../interfaces/newCowForm';
import {
  frequencyDiagnosisEnum,
  IDiagnosis,
  IDrugDiagnosis,
} from '../../../../../interfaces/SanityRecords';
import {updateDiagnosis} from '../../../../../store/actionCreators';
import {IAppState} from '../../../../../store/reducer';

export interface IUseDiagnosis {
  currentCow: ICow;
  labelChipProps: LabelIconChipProps;
  drugsForms: drugForm[];
  drugs: IDrug[];
  daignosisText: string;
  validDiagnosisDescription: boolean;
  isLoading: boolean;
  newDiagnosis: IDiagnosis;
  addAnotherDrug: () => void;
  setDrugsForms: React.Dispatch<React.SetStateAction<drugForm[]>>;
  frequencyProps: {
    title: string;
    openCloseModal: boolean;
    setOpenCloseModal: () => void;
    onSave: (at: frequencyDiagnosisEnum, times: number) => void;
  };
  onSave: () => void;
  openFrequencyModal: (index: number) => void;
  setDiagnosisText: React.Dispatch<React.SetStateAction<string>>;
}

export interface drugForm {
  formValidate: IAddDrugDiagnosisForm;
  newDrug: IDrugDiagnosis;
}

export const useDiagnosis = (): IUseDiagnosis => {
  const ref = useRef('1');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentCow = useSelector((state: IAppState) => state.CurrentCow!);
  const drugs = useSelector((state: IAppState) =>
    state.drugs!.filter(drug => drug.group === drugGroupEnum.DIAGNOSIS),
  );
  const isLoading = useSelector((state: IAppState) => state.isLoading!);

  const [daignosisText, setDiagnosisText] = useState<string>(
    'INGRESE EL DIAGNÓSTICO',
  );
  const [drugsForms, setDrugsForms] = useState<drugForm[]>([]);
  const [validDiagnosisDescription, setValidDiagnosisDescription] =
    useState<boolean>(false);
  const [guardarIsClicked, setGuardarIsClicked] = useState<boolean>(true);
  const [indexFormToFrequency, setIndexFormFrequency] = useState<number>(0);
  const [newDiagnosis, setNewDiagnosis] = useState<IDiagnosis>(EMPTY_DIAGNOSIS);
  const [openCloseFrequencyModal, setOpenCloseFrequencyModal] =
    useState<boolean>(false);

  const labelChipProps: LabelIconChipProps = {
    name: currentCow.nombre,
    areteNumber: currentCow.numeroDeArete,
  };

  const addAnotherDrug = () => {
    let newDrugsForms = cloneDeep(drugsForms);
    newDrugsForms.push({
      formValidate: initialAddDrugDiagnosisForm,
      newDrug: EMPTY_ADD_DRUG,
    });

    setDrugsForms(newDrugsForms);
  };

  const handleOpenCloseFrequencyModal = () => {
    setOpenCloseFrequencyModal(prevValue => !prevValue);
  };

  const onSaveFrequency = (at: frequencyDiagnosisEnum, times: number) => {
    setDrugsForms(prevValue =>
      setFrequencyValues(prevValue, indexFormToFrequency, {times, at}),
    );
  };

  const openFrequencyModal = (index: number) => {
    setIndexFormFrequency(index);
    setOpenCloseFrequencyModal(true);
  };

  const validateForms = () => {
    setDrugsForms(changeValidatationValues);
    if (daignosisText !== 'INGRESE EL DIAGNÓSTICO') {
      setValidDiagnosisDescription(true);
    } else {
      setValidDiagnosisDescription(false);
    }
  };

  const onSave = async () => {
    setGuardarIsClicked(true);

    // Validar cada uno de los forms dentro del array de drugForms
    validateForms();

    // Añadir la descripción al diagnostico

    // llamar al endpoint de guardado de diagostico
    // Esperar la llamda si hay disponibilidad de todos los farmacos
    // si no hay disponibilidad de alguno hay que mostrar en un modal cual no esta disponible y quizas cambiar el borde a rojo para darse cuenta de cual no es
    // fin
  };

  const onSaveToEnpoint = () => {
    if (!checkDurgsForms(drugsForms) && validDiagnosisDescription) {
      dispatch(
        updateDiagnosis(
          {idVaca: currentCow.idVaca, newDiagnosis},
          onSuccessSave,
        ),
      );
    }
  };

  const onSuccessSave = () => {
    setDiagnosisText('INGRESE EL DIAGNÓSTICO');
    setDrugsForms([]);
    navigation.navigate('Sanity');
  };

  useEffect(() => {
    if (!checkDurgsForms(drugsForms)) {
      setNewDiagnosis(prevValue =>
        buildMainDiagnosis(prevValue, drugsForms, daignosisText),
      );
    } else if (guardarIsClicked) {
      Alert.alert(
        'Formulario Incompleto',
        'Asegurese de ingresar todos los campos correctamente',
      );
      setGuardarIsClicked(false);
    }
  }, [drugsForms]);

  useEffect(() => {
    setNewDiagnosis(prevValue =>
      buildMainDiagnosis(prevValue, drugsForms, daignosisText),
    );
  }, [daignosisText]);

  useEffect(() => {
    if (
      !checkDurgsForms(drugsForms) &&
      validDiagnosisDescription &&
      guardarIsClicked
    ) {
      Alert.alert(
        'Formulario Completado',
        `Estas seguro de usar \n${getTotalByDrug(newDiagnosis.drugs, drugs)}`,
        [
          {
            text: 'No',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Si',
            onPress: () => onSaveToEnpoint(),
          },
        ],
      );
      setGuardarIsClicked(false);
    }
  }, [newDiagnosis]);

  useEffect(() => {
    if (!validDiagnosisDescription) {
      Alert.alert(
        'Formulario Incompleto',
        'Asegurese de ingresar todos los campos correctamente',
      );
    }
  }, [validDiagnosisDescription]);

  return {
    currentCow,
    labelChipProps,
    drugsForms,
    addAnotherDrug,
    setDrugsForms,
    newDiagnosis,
    daignosisText,
    validDiagnosisDescription,
    isLoading,
    drugs,
    frequencyProps: {
      title: 'Ingrese una Frecuencia de aplicación',
      openCloseModal: openCloseFrequencyModal,
      setOpenCloseModal: handleOpenCloseFrequencyModal,
      onSave: onSaveFrequency,
    },
    onSave,
    openFrequencyModal,
    setDiagnosisText,
  };
};
