import React, {Dispatch, useEffect, useState} from 'react';
import {IDrug, UnitTypeEnum} from '../../../../interfaces/Drug.interface';
import {getTimestampFromDate} from '../../../../utils/time-utils';

export interface IUseFarmacos {
  openNewDrugsModal: boolean;
  openDatePickerModal: boolean;
  setOpenDrugsModal: Dispatch<React.SetStateAction<boolean>>;
  openCloseDatePickerModal: (isOpen: boolean) => void;
  newDrug: IDrug;
  setNewDrug: React.Dispatch<React.SetStateAction<IDrug>>;
  setExpDate: (date: number) => void;
}

export const useFarmacos = (): IUseFarmacos => {
  const [openNewDrugsModal, setOpenDrugsModal] = useState<boolean>(false);
  const [openDatePickerModal, setOpenDatePickerModal] =
    useState<boolean>(false);

  const [newDrug, setNewDrug] = useState<IDrug>({
    created: 0,
    name: '',
    expDate: 0,
    presentationForm: '',
    unitType: UnitTypeEnum.EMPTY,
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

  return {
    openNewDrugsModal,
    openDatePickerModal,
    setOpenDrugsModal,
    openCloseDatePickerModal,
    newDrug,
    setNewDrug,
    setExpDate,
  };
};
