import React from 'react';
import {ICow} from '../../../interfaces/CowInterface';
interface IuseCowCardInfo {
  openCowNavigation: () => void;
}

export const useCowCardInfo = (props: ICow): IuseCowCardInfo => {
  const openCowNavigation = () => {
    console.log('Abrir navegación con vaca: ', props.nombre, props.imagenPath);
  };

  return {
    openCowNavigation,
  };
};
