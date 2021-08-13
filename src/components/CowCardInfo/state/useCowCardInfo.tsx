import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {setCow} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
interface IuseCowCardInfo {
  openCowNavigation: () => void;
  printState: () => void;
}

export const useCowCardInfo = (props: ICow): IuseCowCardInfo => {
  const dispatch = useDispatch();

  const openCowNavigation = () => {
    console.log('Abrir navegación con vaca: ', props.nombre, props.imagenPath);
    console.log('seteando vaquita...');
    dispatch(setCow(props));
  };

  const printState = () => {
    const state = useSelector((state: IAppState) => state.CurrentCow);

    console.log(state);
  };

  return {
    openCowNavigation,
    printState,
  };
};
