import React, {MutableRefObject, useRef, useState} from 'react';
import {ICow} from '../../../interfaces/CowInterface';
import {
  IdentificationCardInputForm,
  initialForm,
} from '../../../interfaces/newCowForm';

interface IUseCardInputState {
  isValidForm: boolean;
  form: MutableRefObject<IdentificationCardInputForm>;
  validateForm: () => void;
}

interface IUseCardInputStateProps {
  value: ICow;
  form: MutableRefObject<IdentificationCardInputForm>;
}

export const useInputCardState = (props: IUseCardInputStateProps) => {
  const {value, form} = props;

  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const validateSex = () => {
    if (value.sexo === '') {
      form.current = {...form.current, sexo: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, sexo: false};
      setIsValidForm(true);
    }
  };

  const validateNombre = () => {
    if (value.nombre === '') {
      form.current = {...form.current, nombre: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, nombre: false};
      setIsValidForm(true);
    }
  };

  const validateArete = () => {
    if (value.numeroDeArete === '') {
      form.current = {...form.current, numeroDeArete: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, numeroDeArete: false};
      setIsValidForm(true);
    }
  };

  const validateFecha = () => {
    if (value.fechaDeNacimiento === 1597439118000) {
      form.current = {...form.current, fechaDeNacimiento: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, fechaDeNacimiento: false};
      setIsValidForm(true);
    }
  };

  const validateRaza = () => {
    if (value.raza === '') {
      form.current = {...form.current, raza: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, raza: false};
      setIsValidForm(true);
    }
  };

  const validatePeso = () => {
    if (value.pesoActual === 0) {
      form.current = {...form.current, pesoActual: true};
      setIsValidForm(false);
    } else {
      form.current = {...form.current, pesoActual: false};
      setIsValidForm(true);
    }
  };

  const forceRender = () => {
    isValidForm === false ? setIsValidForm(true) : setIsValidForm(false);
  };

  const validateForm = () => {
    validateSex();
    validateNombre();
    validateArete();
    validateFecha();
    validateRaza();
    validatePeso();
    forceRender();
  };

  return {
    isValidForm,
    form,
    validateForm,
  };
};
