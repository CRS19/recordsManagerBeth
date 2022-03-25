import React, {Dispatch, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ICow} from '../../../interfaces/CowInterface';
import {
  estadoDeLaCriaEnum,
  IReproductionRecord,
  PalpEnum,
  Record,
  RecordReproductionType,
  ReproductionRecordKeysEnum,
} from '../../../interfaces/ReproductionRecord';
import {IReproductoresList} from '../../../interfaces/ReproductoresList';
import {IAppState} from '../../../store/reducer';
import {cloneDeep, isNil} from 'lodash';
import {RegistroPalp} from '../../../interfaces/ReproductionRecord';
import {useTime} from '../../../custom/useTime';
import moment from 'moment';
import {
  ABORTO_SUB_TYPE,
  PALPATION_SUB_TYPE,
  PALPATION_SUB_TYPE_ABORTO,
  VACIA_SUB_TYPES,
} from '../../../constants/PalpationType';
import {set, get} from 'lodash';
import {
  changeProd,
  setInsertNewCow,
  setIsNewborn,
  setReproductionRecordsSplited,
  updateReproductionRecord,
} from '../../../store/actionCreators';
import {Alert} from 'react-native';

interface IUseReproduction {
  cow: ICow;
  record: IReproductionRecord;
  recordToUpdate: IReproductionRecord;
  isOpenIaModal: boolean;
  isOpenPalpationTypeModal: boolean;
  isOpenVaciaTypeModal: boolean;
  isLoading: boolean;
  isOpenAbortoTypeModal: boolean;
  isOpenDatePickerModal: boolean;
  isOpenTipoPartoModal: boolean;
  isOpenSexModal: boolean;
  isOpenTwoBtnModal: boolean;
  isOpenMontaMontaModal: boolean;
  isOpenSelectReproductionModal: boolean;
  recordsSplited: Record[][];
  currentPalpations: RegistroPalp[];
  recordNumber: React.MutableRefObject<number>;
  openCloseModal: (isOpen: boolean) => void;
  selectedRecord: Record | undefined;
  reproductoresList: IReproductoresList[];
  onSelectCurrentRecord: (id: string | undefined, index: number) => void;
  onPalpTypePress: (palpType: string) => void;
  onVaciaTypePress: (vaciaType: string) => void;
  insertPalpation: (newPalpation: RegistroPalp) => void;
  onAbortoTypePress: (abortoType: string) => void;
  onPartoTypePress: (partoType: string) => void;
  onSelectChildSex: (sex: string) => void;
  onNacidoVivoPress: () => void;
  onNatimortoPress: () => void;
  setIsOpenIaModal: Dispatch<React.SetStateAction<boolean>>;
  setRecordToUpdate: Dispatch<React.SetStateAction<IReproductionRecord>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenVaciaTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenAbortoTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSelectReproductionModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenTipoPartoModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSexModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenTwoModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMontaMontaModal: Dispatch<React.SetStateAction<boolean>>;
}

export const useReproduction = (): IUseReproduction => {
  console.log('OPTIMIZATION: useReproduction called');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const record = useSelector((state: IAppState) => state.reproductionRecord!);
  const cow = useSelector((state: IAppState) => state.CurrentCow!);
  const reproductoresList = useSelector(
    (state: IAppState) => state.reproductoresList!,
  );
  const recordsSplited: Record[][] = useSelector(
    (state: IAppState) => state.reproductionRecordsSplited!,
  );

  const [isOpenIaModal, setIsOpenIaModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenSelectReproductionModal, setIsOpenSelectReproductionModal] =
    useState<boolean>(false);
  const [isOpenPalpationTypeModal, setIsOpenPalpationTypeModal] =
    useState<boolean>(false);
  const [isOpenVaciaTypeModal, setIsOpenVaciaTypeModal] =
    useState<boolean>(false);
  const [isOpenAbortoTypeModal, setIsOpenAbortoTypeModal] =
    useState<boolean>(false);
  const [recordToUpdate, setRecordToUpdate] =
    useState<IReproductionRecord>(record);
  const [isOpenDatePickerModal, setIsOpenDatePickerModal] =
    useState<boolean>(false);
  const [isOpenTipoPartoModal, setIsOpenTipoPartoModal] =
    useState<boolean>(false);
  const [isOpenMontaMontaModal, setIsOpenMontaMontaModal] =
    useState<boolean>(false);
  const [isOpenTwoBtnModal, setIsOpenTwoModal] = useState<boolean>(false);
  const [isOpenSexModal, setIsOpenSexModal] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<Record | undefined>();
  const [currentPalpations, setCurrentPalpations] = useState<RegistroPalp[]>(
    get(recordsSplited[3][0], 'registrosPalp', []),
  );
  const updateControl = useRef(false);
  const recordNumber = useRef(0);

  const {getEcuatorTimestamp} = useTime();

  const openCloseModal = (isOpen: boolean) => {
    setIsOpenIaModal(!isOpenIaModal);
  };

  const onSelectCurrentRecord = (id: string | undefined, index: number) => {
    recordNumber.current = index;
    isNil(id)
      ? setSelectedRecord(undefined)
      : setSelectedRecord(record.records.find(record => record._id === id));
  };

  const onPalpTypePress = (palpType: string) => {
    if (palpType === PalpEnum.VACIA) {
      setIsOpenVaciaTypeModal(true);
    } else if (palpType === PalpEnum.PREÑADA) {
      if (record.records[record.records.length - 1].idReproductor === '') {
        setIsOpenSelectReproductionModal(true);
      } else {
        insertPalpation({
          registroPalpacion: palpType as PalpEnum,
          fecha: getEcuatorTimestamp(),
        });
      }
    } else if (palpType === PalpEnum.ABORTO) {
      setIsOpenAbortoTypeModal(true);
    } else {
      insertPalpation({
        registroPalpacion: palpType as PalpEnum,
        fecha: getEcuatorTimestamp(),
      });
    }
    setIsOpenPalpationTypeModal(false);
  };

  const onVaciaTypePress = (vaciaType: string) => {
    setIsOpenVaciaTypeModal(false);
    insertPalpation({
      registroPalpacion: PALPATION_SUB_TYPE[vaciaType as VACIA_SUB_TYPES],
      fecha: getEcuatorTimestamp(),
    });
  };

  const onPartoTypePress = (partoType: string) => {
    setIsOpenTwoModal(true);
    setIsOpenTipoPartoModal(false);

    updateCurrentRecordProperty(
      ReproductionRecordKeysEnum.partoType,
      partoType,
    );
  };

  const onSelectChildSex = (sex: string) => {
    updateCurrentRecordProperty(ReproductionRecordKeysEnum.sexoDeLaCria, sex);
    setIsOpenSexModal(false);
  };

  const onNacidoVivoPress = () => {
    //Setear info de los nacimientos ! en la finazlización del registro
    setIsOpenTwoModal(false);

    dispatch(setInsertNewCow(true));
    dispatch(setIsNewborn(true));
    updateCurrentRecordProperty(
      ReproductionRecordKeysEnum.estadoDeLaCria,
      estadoDeLaCriaEnum.NACIDA_VIVA,
    );

    navigation.navigate('MainRecord');
  };

  const onNatimortoPress = () => {
    setIsOpenTwoModal(false);
    setIsOpenSexModal(true);
    updateCurrentRecordProperty(
      ReproductionRecordKeysEnum.estadoDeLaCria,
      estadoDeLaCriaEnum.NATIMORTO,
    );
  };

  const onAbortoTypePress = (abortoType: string) => {
    insertPalpation({
      registroPalpacion:
        PALPATION_SUB_TYPE_ABORTO[abortoType as ABORTO_SUB_TYPE],
      fecha: getEcuatorTimestamp(),
    });
    updateCurrentRecordProperty(
      ReproductionRecordKeysEnum.estadoDeLaCria,
      estadoDeLaCriaEnum.ABORTO,
    );
    setIsOpenAbortoTypeModal(false);
  };

  const insertPalpation = (newPalpation: RegistroPalp) => {
    let Palpation = cloneDeep(currentPalpations);
    Palpation.push(newPalpation);
    setCurrentPalpations(Palpation);
    updateControl.current = true;
  };

  const updateCurrentRecordProperty = (
    property: ReproductionRecordKeysEnum,
    value: string | number,
  ) => {
    const recordToUpdate = cloneDeep(record);
    set(
      recordToUpdate.records[recordToUpdate.records.length - 1],
      `${property}`,
      value,
    );

    // logic to update cow to send it to production
    if (
      recordToUpdate.records[recordToUpdate.records.length - 1].gestationDays >
        213 &&
      property === ReproductionRecordKeysEnum.estadoDeLaCria
    ) {
      // changeProd calls cow endpoint
      dispatch(changeProd({idVaca: recordToUpdate.idVaca, productivity: true}));
    }

    dispatch(updateReproductionRecord(recordToUpdate));
  };

  useEffect(() => {
    if (updateControl.current) {
      updateControl.current = false;
      const recordToUpdate = cloneDeep(record);

      // caso de aborto
      if (
        recordsSplited[3][0].registrosPalp[
          recordsSplited[3][0].registrosPalp.length - 1
        ].registroPalpacion.includes('aborto')
      ) {
        recordsSplited[3][0].recordType = RecordReproductionType.ABORTO;
      }
      // caso de vacia o seca
      if (
        recordsSplited[3][0].registrosPalp[
          recordsSplited[3][0].registrosPalp.length - 1
        ].registroPalpacion.includes('vacia')
      ) {
        if (recordsSplited[3][0].montaType !== '') {
          recordsSplited[3][0].recordType = RecordReproductionType.GENERAL;
          Alert.alert(
            'El registro ha sido guardado en chequeo general!',
            'Debido a que la vaca no está preñada, el registro se guardará en la sección de chequeo General',
          );
        }
      }

      recordToUpdate.records[recordToUpdate.records.length - 1] =
        recordsSplited[3][0];
      dispatch(updateReproductionRecord(recordToUpdate));
    } else {
      setCurrentPalpations(get(recordsSplited[3][0], 'registrosPalp', []));
    }
  }, [recordsSplited]);

  useEffect(() => {
    if (updateControl.current) {
      const newSplitedRecords = cloneDeep(recordsSplited);
      set(newSplitedRecords[3][0], 'registrosPalp', currentPalpations);
      dispatch(setReproductionRecordsSplited(newSplitedRecords));
    }
  }, [currentPalpations]);

  useEffect(() => {
    setRecordToUpdate(record);
  }, [record]);

  return {
    recordToUpdate,
    cow,
    record,
    isLoading,
    isOpenIaModal,
    currentPalpations,
    isOpenVaciaTypeModal,
    isOpenAbortoTypeModal,
    isOpenSexModal,
    isOpenTipoPartoModal,
    isOpenPalpationTypeModal,
    isOpenDatePickerModal,
    isOpenTwoBtnModal,
    isOpenMontaMontaModal,
    isOpenSelectReproductionModal,
    openCloseModal,
    recordsSplited,
    selectedRecord,
    reproductoresList,
    recordNumber,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setIsOpenPalpationTypeModal,
    onAbortoTypePress,
    setRecordToUpdate,
    onPalpTypePress,
    onVaciaTypePress,
    onPartoTypePress,
    onSelectChildSex,
    onNacidoVivoPress,
    onNatimortoPress,
    insertPalpation,
    setIsLoading,
    setIsOpenVaciaTypeModal,
    setIsOpenAbortoTypeModal,
    setIsOpenSelectReproductionModal,
    setIsOpenDatePickerModal,
    setIsOpenTipoPartoModal,
    setIsOpenSexModal,
    setIsOpenTwoModal,
    setIsOpenMontaMontaModal,
  };
};
