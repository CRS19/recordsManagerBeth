import {get, set} from 'lodash';
import moment from 'moment';
import React, {Dispatch, useState} from 'react';
import {AgeEnum} from '../../../constants/ageTypeEnum';
import {ICowKeys} from '../../../constants/ICowKeysEnum';
import {ICow} from '../../../interfaces/CowInterface';

interface IUseModalInputProps {
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  openModal?: React.Dispatch<React.SetStateAction<boolean>>;
  initialValue: ICow;
  property: ICowKeys;
  isNumber?: boolean;
  defaultValue?: string;
  ageType?: AgeEnum;
  changeAge?: React.Dispatch<React.SetStateAction<AgeEnum>>;
  setPropertyFecha?: Dispatch<React.SetStateAction<ICowKeys>>;
}

interface IUseModalInput {
  setEndEditing: React.Dispatch<React.SetStateAction<boolean>>;
  getValue: () => string;
  saveWithOutMask: (text: string) => void;
  saveWithMask: (text: string, text2: string | undefined) => void;
  leftButtomAction: () => void;
  modal: () => void;
}

export const useModalInput = (props: IUseModalInputProps): IUseModalInput => {
  const {
    setValue,
    initialValue,
    openModal,
    property,
    isNumber,
    defaultValue,
    ageType,
    changeAge,
    setPropertyFecha,
  } = props;

  const [endEditing, setEndEditing] = useState(false);

  const modal = () => {
    if (!!openModal) {
      if (!!setPropertyFecha) setPropertyFecha!(property);
      openModal!(true);
    }
  };

  const leftButtomAction = (): void => {
    switch (ageType) {
      case AgeEnum.ANOS_MESES:
        changeAge!(AgeEnum.MESES_DIAS);
        break;
      case AgeEnum.MESES_DIAS:
        changeAge!(AgeEnum.ANOS_MESES);
        break;
    }
  };

  const saveWithMask = (text: string, text2: string | undefined) => {
    isNumber
      ? set(initialValue, `${property}`, Number(text))
      : set(initialValue, `${property}`, text2);

    setValue(initialValue);
  };

  const saveWithOutMask = (text: string) => {
    set(initialValue, `${property}`, text);
    setValue(initialValue);
  };

  const getValue = (): string => {
    const value = get(initialValue, `${property}`, '');
    if (!!defaultValue) {
      return defaultValue!;
    } else if (property.includes('fecha')) {
      return moment(value).format('DD/MM/YYYY');
    } else if (property.includes('nombreDeMadre')) {
      return `${initialValue.nombreDeMadre.toUpperCase()} / ${
        initialValue.numeroAreteMadre
      }`;
    } else if (property.includes('nombreDePadre')) {
      return `${initialValue.nombreDePadre.toUpperCase()} / ${
        initialValue.numeroAretePadre
      }`;
    } else if (property === 'pesoAlDestete' && endEditing) {
      return value.toString().concat(' Kg');
    } else if (
      property === 'vacaInfo.duraciónLactanciaPromedio' &&
      endEditing
    ) {
      return value!.toString().concat(' DÍAS');
    } else if (
      property === 'vacaInfo.produccionPromedioLactancias' &&
      endEditing
    ) {
      return value!.toString().concat(' LITROS');
    } else if (property === 'vacaInfo.diasSecosTotales' && endEditing) {
      return value!.toString().concat(' DÍAS');
    } else if (property.includes('peso') && endEditing) {
      return value!.toString().concat(' Kg');
    } else if (
      property === 'vacaInfo.diasGestaci\u00F3nPromedio' &&
      endEditing
    ) {
      return value!.toString().concat(' DÍAS');
    } else {
      return value!.toString().toUpperCase();
    }
  };

  return {
    setEndEditing,
    getValue,
    saveWithOutMask,
    saveWithMask,
    leftButtomAction,
    modal,
  };
};
