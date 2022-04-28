import React, {Dispatch, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UnitTypeEnum} from '../../../../constants/PresentationEnum';
import {drugGroupEnum, IDrug} from '../../../../interfaces/Drug.interface';
import {IAppState} from '../../../../store/reducer';
import {set} from 'lodash';
import {getTimestamp} from '../../../../utils/time-utils';
import {createNewDrug, deleteDrug} from '../../../../store/actionCreators';

export interface IUseFarmacos {
  openNewDrugsModal: boolean;
  openDatePickerModal: boolean;
  isLoading: boolean;
  drugsList: IDrug[];
  setOpenDrugsModal: Dispatch<React.SetStateAction<boolean>>;
  openCloseDatePickerModal: (isOpen: boolean) => void;
  newDrug: IDrug;
  setNewDrug: React.Dispatch<React.SetStateAction<IDrug>>;
  setExpDate: (date: number) => void;
  onSaveNewDrug: (DrugToSave: IDrug) => void;
  onDeleteDrug: (id: string) => void;
}

export const useFarmacos = (): IUseFarmacos => {
  const dispatch = useDispatch();
  const drugsList = useSelector((state: IAppState) => state.drugs!);
  const isLoading = useSelector((state: IAppState) => state.isLoading!);
  const [openNewDrugsModal, setOpenDrugsModal] = useState<boolean>(false);
  const [openDatePickerModal, setOpenDatePickerModal] =
    useState<boolean>(false);

  const [newDrug, setNewDrug] = useState<IDrug>({
    created: 0,
    name: '',
    expDate: 0,
    group: drugGroupEnum.EMPTY,
    presentationForm: '',
    unitType: UnitTypeEnum.GRAMOS,
    amount: 0,
    unitContent: 0,
    available: 0,
  });

  const openCloseDatePickerModal = (isOpen: boolean) => {
    setOpenDatePickerModal(isOpen);
  };

  const setExpDate = (expDate: number) => {
    openCloseDatePickerModal(false);
    setNewDrug({...newDrug, expDate});
  };

  const onSaveNewDrug = (DrugToSave: IDrug) => {
    set(DrugToSave, 'created', getTimestamp());
    set(DrugToSave, 'available', DrugToSave.unitContent * DrugToSave.amount);

    dispatch(createNewDrug(DrugToSave));
    setOpenDrugsModal(false);
  };

  const onDeleteDrug = (id: string) => {
    dispatch(deleteDrug(id));
  };

  return {
    openNewDrugsModal,
    openDatePickerModal,
    drugsList,
    isLoading,
    setOpenDrugsModal,
    openCloseDatePickerModal,
    newDrug,
    setNewDrug,
    setExpDate,
    onSaveNewDrug,
    onDeleteDrug,
  };
};
