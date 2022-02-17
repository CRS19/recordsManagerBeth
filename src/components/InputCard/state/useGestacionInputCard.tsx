import React, {MutableRefObject, useState} from 'react';
import {ICow} from '../../../interfaces/CowInterface';
import {IGestationForm} from '../../../interfaces/newCowForm';

interface IUseGestacionInputCarProps {
  value: ICow;
  form: MutableRefObject<IGestationForm>;
}

interface IUseLactanciaInputCard {
  isValidForm: boolean;
  form: MutableRefObject<IGestationForm>;
  validateForm: () => void;
}

export const useGestacionInputCard = (
  props: IUseGestacionInputCarProps,
): IUseLactanciaInputCard => {
  const {value, form} = props;

  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const forceRender = () => {
    isValidForm === false ? setIsValidForm(true) : setIsValidForm(false);
  };

  const validationNumAbortos = () => {
    if (value.vacaInfo?.numeroDeAbortos === 999) {
      form.current = {...form.current, numeroDeAbortos: true};
    } else {
      form.current = {...form.current, numeroDePartos: false};
      setIsValidForm(true);
    }
  };

  const validationNumPartos = () => {
    if (value.vacaInfo?.numeroDePartos === 999) {
      form.current = {...form.current, numeroDePartos: true};
    } else {
      form.current = {...form.current, numeroDePartos: false};
      setIsValidForm(true);
    }
  };

  const validationDiasGestationProm = () => {
    if (value.vacaInfo?.numeroDePartos === 999) {
      form.current = {...form.current, diasGestaciónPromedio: true};
    } else {
      form.current = {...form.current, diasGestaciónPromedio: false};
      setIsValidForm(true);
    }
  };

  const edadPrimerParto = () => {
    if (
      value.vacaInfo?.edadPrimerParto === {years: 999, months: 999, days: 999}
    ) {
      form.current = {...form.current, edadPrimerParto: true};
    } else {
      form.current = {...form.current, edadPrimerParto: false};
      setIsValidForm(true);
    }
  };

  const validateForm = () => {
    validationNumPartos();
    validationNumAbortos();
    validationDiasGestationProm();
    edadPrimerParto();

    forceRender();
  };

  return {validateForm, form, isValidForm};
};
