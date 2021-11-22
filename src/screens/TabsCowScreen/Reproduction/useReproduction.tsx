import React, {Dispatch, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {
  IReproductionRecord,
  PalpEnum,
  Record,
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
  setReproductionRecordsSplited,
  updateReproductionRecord,
} from '../../../store/actionCreators';

interface IUseReproduction {
  cow: ICow;
  record: IReproductionRecord;
  recordToUpdate: IReproductionRecord;
  isOpenIaModal: boolean;
  isOpenPalpationTypeModal: boolean;
  isOpenVaciaTypeModal: boolean;
  isLoading: boolean;
  isOpenAbortoTypeModal: boolean;
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
  setIsOpenIaModal: Dispatch<React.SetStateAction<boolean>>;
  setRecordToUpdate: Dispatch<React.SetStateAction<IReproductionRecord>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenVaciaTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenAbortoTypeModal: Dispatch<React.SetStateAction<boolean>>;
}

export const useReproduction = (): IUseReproduction => {
  console.log('OPTIMIZATION: useReproduction called');
  const dispatch = useDispatch();
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
  const [isOpenPalpationTypeModal, setIsOpenPalpationTypeModal] =
    useState<boolean>(false);
  const [isOpenVaciaTypeModal, setIsOpenVaciaTypeModal] =
    useState<boolean>(false);
  const [isOpenAbortoTypeModal, setIsOpenAbortoTypeModal] =
    useState<boolean>(false);
  const [recordToUpdate, setRecordToUpdate] =
    useState<IReproductionRecord>(record);
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
    console.log(getEcuatorTimestamp());
    console.log(moment(getEcuatorTimestamp()).format('DD/MM/YYYY'));

    if (palpType === PalpEnum.VACIA) {
      setIsOpenVaciaTypeModal(true);
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

  const onAbortoTypePress = (abortoType: string) => {
    insertPalpation({
      registroPalpacion:
        PALPATION_SUB_TYPE_ABORTO[abortoType as ABORTO_SUB_TYPE],
      fecha: getEcuatorTimestamp(),
    });
    setIsOpenAbortoTypeModal(false);
  };

  const insertPalpation = (newPalpation: RegistroPalp) => {
    let Palpation = cloneDeep(currentPalpations);
    Palpation.push(newPalpation);
    setCurrentPalpations(Palpation);
    updateControl.current = true;
  };

  useEffect(() => {
    if (updateControl.current) {
      updateControl.current = false;
      const recordToUpdate = cloneDeep(record);
      recordToUpdate.records[recordToUpdate.records.length - 1] =
        recordsSplited[3][0];
      dispatch(updateReproductionRecord(recordToUpdate));
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
    isOpenPalpationTypeModal,
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
    insertPalpation,
    setIsLoading,
    setIsOpenVaciaTypeModal,
    setIsOpenAbortoTypeModal,
  };
};
