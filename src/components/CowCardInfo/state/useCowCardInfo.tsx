import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {setCow, setInsertNewCow} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
interface IuseCowCardInfo {
  openCowNavigation: () => void;
  printState: () => void;
  openInsertNewCow: () => void;
}

export const useCowCardInfo = (props: ICow): IuseCowCardInfo => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openCowNavigation = () => {
    console.log('Abrir navegación con vaca: ', props.nombre, props.imagenPath);
    console.log('seteando vaquita...');
    dispatch(setCow(props));
    dispatch(setInsertNewCow(false));
    navigation.navigate('TabNavigatorCow');
  };

  const openInsertNewCow = () => {
    console.log('Abrir flujo de insert new cow...');
    dispatch(setCow(props));
    dispatch(setInsertNewCow(true));
    navigation.navigate('TabNavigatorCow');
  };

  const printState = () => {
    const state = useSelector((state: IAppState) => state.CurrentCow);

    console.log(state);
  };

  return {
    openCowNavigation,
    printState,
    openInsertNewCow,
  };
};
