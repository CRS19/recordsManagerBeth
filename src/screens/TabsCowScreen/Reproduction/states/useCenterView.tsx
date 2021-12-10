import {cloneDeep, isNil, set} from 'lodash';
import {Dispatch, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {ISaveReproductionRecordButtomProps} from '../../../../components/Buttoms/SaveReproductionRecordButtom';
import {IControlGinecologicoProps} from '../../../../components/ReproductionComponents/ControlGinecologico';
import {IGeneralControlProps} from '../../../../components/ReproductionComponents/GeneralControl';
import {
  IReproductionRecord,
  Record,
  RecordReproductionType,
  RegistroPalp,
} from '../../../../interfaces/ReproductionRecord';
import {
  setIsUsingControlGinecologico,
  updateReproductionRecord,
} from '../../../../store/actionCreators';
import {recordSinTipo} from '../../../../utils/recordsTemplates/reproduction_template';

interface IUseCenterView {
  controlGinecologico: IControlGinecologicoProps;
  controlServicio: IGeneralControlProps;
  controlMonta: IGeneralControlProps;
  onSaveActions: ISaveReproductionRecordButtomProps;
}

interface IUseCenterViewProps {
  openCloseIaModal: (isOpen: boolean) => void;
  currentRecordSinType: Record;
  record: IReproductionRecord;
  selectedRecord: Record | undefined;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMontaMontaModal: Dispatch<React.SetStateAction<boolean>>;
}

export const useCenterView = ({
  openCloseIaModal,
  currentRecordSinType,
  record,
  selectedRecord,
  setIsLoading,
  setIsOpenMontaMontaModal,
}: IUseCenterViewProps): IUseCenterView => {
  const dispatch = useDispatch();
  const [existCurrentRecord, setExistCurrentRecord] = useState<boolean>(
    !isNil(currentRecordSinType),
  );
  const [isCeloBtnActive, setIsCeloBtnActive] = useState<boolean>(false);
  const [isChequeoBtnActive, setIsChequeoBtnActive] = useState<boolean>(false);

  const [isServicioYes, setIsServicioYes] = useState<boolean>(false);
  const [isServicioNo, setIsServicioNo] = useState<boolean>(false);

  const [isMontaMonta, setIsMontaMonta] = useState<boolean>(false);
  const [isMontaIa, setIsMontaIa] = useState<boolean>(false);

  const onCeloClicked = () => {
    setIsCeloBtnActive(!isCeloBtnActive);
    dispatch(setIsUsingControlGinecologico(true));
  };

  const onChequeoCliked = () => {
    setIsChequeoBtnActive(!isChequeoBtnActive);

    if (isNil(currentRecordSinType)) {
      const newRecord = cloneDeep(recordSinTipo);
      setIsLoading(true);
      record.records.push(newRecord);
      dispatch(updateReproductionRecord(record));
      setIsLoading(false);
    }
    dispatch(setIsUsingControlGinecologico(true));
  };

  const onServicioYesCliked = () => {
    setIsServicioYes(!isServicioYes);
  };

  const onServicioNoCliked = () => {
    setIsServicioNo(false);
    setIsCeloBtnActive(false);
  };

  const onMontaCliked = () => {
    setIsMontaMonta(!isMontaMonta);
    setIsOpenMontaMontaModal(true);
    setIsMontaMonta(false);
    setIsServicioYes(false);
    setIsCeloBtnActive(false);
  };

  const onIaCliked = () => {
    setIsMontaIa(!isMontaIa);
    openCloseIaModal(true);
    setIsMontaIa(false);
    setIsServicioYes(false);
    setIsCeloBtnActive(false);
  };

  const saveCurrentRecord = () => {
    console.log('El registro es de tipo: ->', currentRecordSinType.recordType);
    const recordToUpdate = cloneDeep(record);
    set(
      recordToUpdate.records[record.records.length - 1],
      'recordType',
      RecordReproductionType.GENERAL,
    );
    dispatch(updateReproductionRecord(recordToUpdate));
  };

  const onSaveCurrentRecord = () => {
    Alert.alert(
      '¿Desea Archivar el Registro?',
      'Al archivar el registros ya no se podrá ingresar registros de palpación al mismo, será unicamente de visualización',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Guardar', onPress: saveCurrentRecord},
      ],
    );
    console.log(
      'guardar registro: ',
      JSON.stringify(currentRecordSinType, null, 3),
    );
  };

  useEffect(() => {
    if (!isNil(selectedRecord)) {
      setIsChequeoBtnActive(false);
      setIsCeloBtnActive(false);
      setIsServicioYes(false);
      setIsServicioNo(false);
      setIsMontaMonta(false);
      setIsMontaIa(false);
    }
  }, [selectedRecord]);

  useEffect(() => {
    if (!isNil(currentRecordSinType)) {
      console.log('DEBUG: entre al false del use effect -> true');
      setExistCurrentRecord(true);
    } else {
      console.log('DEBUG: entre al true del use effect -> false');
      setExistCurrentRecord(false);
    }
  }, [currentRecordSinType]);

  return {
    controlGinecologico: {
      existCurrentRecord,
      isCeloBtnActive,
      isChequeoBtnActive,
      onCeloClicked,
      onChequeoCliked,
    },
    controlServicio: {
      title: 'Servicio',
      tittleBtn1: 'si',
      tittleBtn2: 'no',
      isClikedBtn1: isServicioYes,
      isClikedBtn2: isServicioNo,
      onClikedBtn1: onServicioYesCliked,
      onClikedBtn2: onServicioNoCliked,
    },
    controlMonta: {
      title: 'Monta / IA',
      tittleBtn1: 'monta',
      tittleBtn2: 'ia',
      isClikedBtn1: isMontaMonta,
      isClikedBtn2: isMontaIa,
      onClikedBtn1: onMontaCliked,
      onClikedBtn2: onIaCliked,
    },
    onSaveActions: {
      onSave: onSaveCurrentRecord,
    },
  };
};
