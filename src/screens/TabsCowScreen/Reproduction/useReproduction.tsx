import React, {Dispatch, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {
  IReproductionRecord,
  Record,
} from '../../../interfaces/ReproductionRecord';
import {IReproductoresList} from '../../../interfaces/ReproductoresList';
import {IAppState} from '../../../store/reducer';

interface IUseReproduction {
  cow: ICow;
  record: IReproductionRecord;
  recordToUpdate: IReproductionRecord;
  isOpenIaModal: boolean;
  isLoading: boolean;
  openCloseModal: (isOpen: boolean) => void;
  currentRecord: Record | undefined;
  reproductoresList: IReproductoresList[];
  onSelectCurrentRecord: (id: string) => void;
  setIsOpenIaModal: Dispatch<React.SetStateAction<boolean>>;
  setRecordToUpdate: Dispatch<React.SetStateAction<IReproductionRecord>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const useReproduction = (): IUseReproduction => {
  const record = useSelector((state: IAppState) => state.reproductionRecord!);
  const cow = useSelector((state: IAppState) => state.CurrentCow!);
  const reproductoresList = useSelector(
    (state: IAppState) => state.reproductoresList!,
  );

  const [isOpenIaModal, setIsOpenIaModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recordToUpdate, setRecordToUpdate] =
    useState<IReproductionRecord>(record);
  const [currentRecord, setCurrentRecord] = useState<Record | undefined>();

  const openCloseModal = (isOpen: boolean) => {
    setIsOpenIaModal(!isOpenIaModal);
  };

  const onSelectCurrentRecord = (id: string) => {
    setCurrentRecord(record.records.find(record => record._id === id));
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
    openCloseModal,
    currentRecord,
    reproductoresList,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setRecordToUpdate,
    setIsLoading,
  };
};
