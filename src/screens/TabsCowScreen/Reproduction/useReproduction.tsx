import React, {Dispatch, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {
  IReproductionRecord,
  PalpEnum,
  Record,
} from '../../../interfaces/ReproductionRecord';
import {IReproductoresList} from '../../../interfaces/ReproductoresList';
import {IAppState} from '../../../store/reducer';
import {isNil} from 'lodash';

interface IUseReproduction {
  cow: ICow;
  record: IReproductionRecord;
  recordToUpdate: IReproductionRecord;
  isOpenIaModal: boolean;
  isOpenPalpationTypeModal: boolean;
  isOpenVaciaTypeModal: boolean;
  isLoading: boolean;
  recordsSplited: Record[][];
  openCloseModal: (isOpen: boolean) => void;
  currentRecord: Record | undefined;
  reproductoresList: IReproductoresList[];
  onSelectCurrentRecord: (id: string | undefined) => void;
  onPalpTypePress: (palpType: string) => void;
  onVaciaTypePress: (vaciaType: string) => void;
  setIsOpenIaModal: Dispatch<React.SetStateAction<boolean>>;
  setRecordToUpdate: Dispatch<React.SetStateAction<IReproductionRecord>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenVaciaTypeModal: Dispatch<React.SetStateAction<boolean>>;
}

export const useReproduction = (): IUseReproduction => {
  console.log('OPTIMIZATION: useReproduction called');
  const record = useSelector((state: IAppState) => state.reproductionRecord!);
  const cow = useSelector((state: IAppState) => state.CurrentCow!);
  const reproductoresList = useSelector(
    (state: IAppState) => state.reproductoresList!,
  );
  const recordsSplited = useSelector(
    (state: IAppState) => state.reproductionRecordsSplited!,
  );
  const [isOpenIaModal, setIsOpenIaModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenPalpationTypeModal, setIsOpenPalpationTypeModal] =
    useState<boolean>(false);
  const [isOpenVaciaTypeModal, setIsOpenVaciaTypeModal] =
    useState<boolean>(false);
  const [recordToUpdate, setRecordToUpdate] =
    useState<IReproductionRecord>(record);
  const [currentRecord, setCurrentRecord] = useState<Record | undefined>();

  const openCloseModal = (isOpen: boolean) => {
    setIsOpenIaModal(!isOpenIaModal);
  };

  const onSelectCurrentRecord = (id: string | undefined) => {
    isNil(id)
      ? setCurrentRecord(undefined)
      : setCurrentRecord(record.records.find(record => record._id === id));
  };

  const onCloseSelectPalpationTypeModal = () => {
    console.log('hace algo con el elmento guardado');
  };

  const onPalpTypePress = (palpType: string) => {
    console.log('el elemento selecionado es: ', palpType);
    if (palpType === PalpEnum.VACIA) {
      console.log('abrir el otro modal');
      setIsOpenVaciaTypeModal(true);
    }
    setIsOpenPalpationTypeModal(false);
  };

  const onVaciaTypePress = (vaciaType: string) => {
    console.log(vaciaType);
    setIsOpenVaciaTypeModal(false);
  };

  useEffect(() => {
    setRecordToUpdate(record);
  }, [record]);

  return {
    recordToUpdate,
    cow,
    record,
    isLoading,
    isOpenIaModal,
    isOpenVaciaTypeModal,
    isOpenPalpationTypeModal,
    openCloseModal,
    recordsSplited,
    currentRecord,
    reproductoresList,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setIsOpenPalpationTypeModal,
    setRecordToUpdate,
    onPalpTypePress,
    onVaciaTypePress,
    setIsLoading,
    setIsOpenVaciaTypeModal,
  };
};
