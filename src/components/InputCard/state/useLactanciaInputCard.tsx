import React, {MutableRefObject, useState} from 'react';
import {ICow} from '../../../interfaces/CowInterface';
import {ILactanciaForm} from '../../../interfaces/newCowForm';

interface IUseLactanciaInputCard {
  isValidForm: boolean;
  form: MutableRefObject<ILactanciaForm>;
  validateForm: () => void;
}

interface IUseLactanciaInputCardProps {
  value: ICow;
  form: MutableRefObject<ILactanciaForm>;
}

export const useLactanciaInputCard = (props: IUseLactanciaInputCardProps) => {
  const {value, form} = props;
  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const validateNumLactancias = () => {
    if (value.vacaInfo!.numeroLactancias === 999) {
      form.current = {...form.current, numeroLactancias: true};
    } else {
      form.current = {...form.current, numeroLactancias: false};
      setIsValidForm(true);
    }
  };

  const validateDuraciónLactanciaProm = () => {
    if (value.vacaInfo!.duraciónLactanciaPromedio === 999) {
      form.current = {...form.current, duraciónLactanciaPromedio: true};
    } else {
      form.current = {...form.current, duraciónLactanciaPromedio: false};
      setIsValidForm(true);
    }
  };

  const validateProduccionPromLactancia = () => {
    if (value.vacaInfo!.produccionPromedioLactancias === 999) {
      form.current = {...form.current, produccionPromedioLactancias: true};
    } else {
      form.current = {...form.current, produccionPromedioLactancias: false};
      setIsValidForm(true);
    }
  };

  const validateDiasTotalesSecos = () => {
    if (value.vacaInfo!.diasSecosTotales === 999) {
      form.current = {...form.current, diasSecosTotales: true};
    } else {
      form.current = {...form.current, diasSecosTotales: false};
      setIsValidForm(true);
    }
  };

  const forceRender = () => {
    isValidForm === false ? setIsValidForm(true) : setIsValidForm(false);
  };

  const validateForm = () => {
    validateNumLactancias();
    validateDuraciónLactanciaProm();
    validateProduccionPromLactancia();
    validateDiasTotalesSecos();
    forceRender();
  };

  return {
    isValidForm,
    form,
    validateForm,
  };
};
