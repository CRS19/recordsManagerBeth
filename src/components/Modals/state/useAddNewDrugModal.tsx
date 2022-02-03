import {MutableRefObject, useState} from 'react';
import {IDrug, UnitTypeEnum} from '../../../interfaces/Drug.interface';
import {INewDrugForm} from '../../../interfaces/newCowForm';

export interface IUseAddNewDrugModalProps {
  drug: IDrug;
  form: MutableRefObject<INewDrugForm>;
}

interface IUseAddNewDrugModal {
  isValidForm: boolean;
  form: MutableRefObject<INewDrugForm>;
  validateForm: () => void;
}

export const useAddNewDrugModal = ({drug, form}: IUseAddNewDrugModalProps) => {
  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const validateExpDate = () => {
    if (drug.expDate === 0) {
      form.current = {...form.current, expDate: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, expDate: false};
      setIsValidForm(true);
    }
  };

  const validateName = () => {
    if (drug.name === '') {
      form.current = {...form.current, name: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, name: false};
      setIsValidForm(true);
    }
  };

  const validatePresentationForm = () => {
    if (drug.presentationForm === '') {
      form.current = {...form.current, presentationForm: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, presentationForm: false};
      setIsValidForm(true);
    }
  };

  const validateUnitType = () => {
    if (drug.unitType === UnitTypeEnum.EMPTY) {
      form.current = {...form.current, unitTye: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, unitTye: false};
      setIsValidForm(true);
    }
  };

  const validateAmount = () => {
    if (drug.amount === 0) {
      form.current = {...form.current, amount: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, amount: false};
      setIsValidForm(true);
    }
  };

  const validateUnitContent = () => {
    if (drug.unitContent === 0) {
      form.current = {...form.current, unitContent: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, unitContent: false};
      setIsValidForm(true);
    }
  };

  const forceRender = () => {
    isValidForm === false ? setIsValidForm(true) : setIsValidForm(false);
  };

  const validateForm = () => {
    validateExpDate();
    validateName();
    validatePresentationForm();
    validateUnitType();
    validateAmount();
    validateUnitContent();
    forceRender();
  };

  return {isValidForm, form, validateForm};
};
