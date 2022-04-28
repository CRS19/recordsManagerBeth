import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {LabelIconChipProps} from '../../../../../components/LabelIconChip/LabelIconChip';
import {EMPTY_VACUNA} from '../../../../../constants/SanityRecords';
import {drugGroupEnum, IDrug} from '../../../../../interfaces/Drug.interface';
import {
  initialVacunaValidation,
  IVacunaFormValidations,
} from '../../../../../interfaces/newCowForm';
import {IVaccines} from '../../../../../interfaces/SanityRecords';
import {IAppState} from '../../../../../store/reducer';

export interface IVacunaForm {
  formValidate: IVacunaFormValidations;
  newVacuna: IVaccines;
}

export interface IUseVacunas {
  vacunaInputCardProps: {
    vacuna: IVaccines;
    drugs: IDrug[];
    vacunForm: IVacunaForm;
    setVacunaForm: React.Dispatch<React.SetStateAction<IVacunaForm>>;
    setOpenVacunaDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openVacunaDatePicker: boolean;
  setOpenVacunaDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  labelChipProps: LabelIconChipProps;
}

export const useVacunas = (): IUseVacunas => {
  const currentCow = useSelector((state: IAppState) => state.CurrentCow!);
  const drugs = useSelector((state: IAppState) =>
    state.drugs!.filter(drug => drug.group === drugGroupEnum.VACCINE),
  );
  const [vacunForm, setVacunaForm] = useState<IVacunaForm>({
    formValidate: initialVacunaValidation,
    newVacuna: EMPTY_VACUNA,
  });
  const [openVacunaDatePicker, setOpenVacunaDatePicker] =
    useState<boolean>(false);

  const labelChipProps: LabelIconChipProps = {
    name: currentCow.nombre,
    areteNumber: currentCow.numeroDeArete,
  };

  return {
    labelChipProps,
    vacunaInputCardProps: {
      vacuna: vacunForm.newVacuna,
      setVacunaForm,
      drugs,
      vacunForm,
      setOpenVacunaDatePicker,
    },
    openVacunaDatePicker,
    setOpenVacunaDatePicker,
  };
};
