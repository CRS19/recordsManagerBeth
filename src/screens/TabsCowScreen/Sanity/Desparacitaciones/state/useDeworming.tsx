import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {LabelIconChipProps} from '../../../../../components/LabelIconChip/LabelIconChip';
import {EMPTY_DEWORMING} from '../../../../../constants/SanityRecords';
import {drugGroupEnum, IDrug} from '../../../../../interfaces/Drug.interface';
import {
  IDewormingValidations,
  initialDewormingValidation,
} from '../../../../../interfaces/newCowForm';
import {IDeworming} from '../../../../../interfaces/SanityRecords';
import {IAppState} from '../../../../../store/reducer';

export interface IDewormingForm {
  formValidate: IDewormingValidations;
  newDeworming: IDeworming;
}

export interface IUseDeworming {
  labelChipProps: LabelIconChipProps;
  dewormingInputCardProps: {
    dewormingValues: IDeworming;
    dewormingForm: IDewormingForm;
    drugs: IDrug[];
    setDewormingForm: React.Dispatch<React.SetStateAction<IDewormingForm>>;
    setOpenDewormingDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  };
  datePicker: {
    openDewormingDatePicker: boolean;
    setOpenDewormingDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const useDeworming = (): IUseDeworming => {
  const currentCow = useSelector((state: IAppState) => state.CurrentCow!);
  const [dewormingForm, setDewormingForm] = useState<IDewormingForm>({
    formValidate: initialDewormingValidation,
    newDeworming: EMPTY_DEWORMING,
  });
  const [openDewormingDatePicker, setOpenDewormingDatePicker] =
    useState<boolean>(false);
  const drugs = useSelector((state: IAppState) =>
    state.drugs!.filter(drug => drug.group === drugGroupEnum.DEWORMING),
  );

  const labelChipProps: LabelIconChipProps = {
    name: currentCow.nombre,
    areteNumber: currentCow.numeroDeArete,
  };

  return {
    labelChipProps,
    dewormingInputCardProps: {
      dewormingValues: dewormingForm.newDeworming,
      drugs,
      dewormingForm,
      setDewormingForm,
      setOpenDewormingDatePicker,
    },
    datePicker: {openDewormingDatePicker, setOpenDewormingDatePicker},
  };
};
