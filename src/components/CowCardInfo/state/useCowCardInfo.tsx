import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {
  getReproductionRecord,
  getReproductorsList,
  setCow,
  setInsertNewCow,
} from '../../../store/actionCreators';
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
    const idVaca = props.idVaca;
    dispatch(setCow(props));
    dispatch(setInsertNewCow(false));
    //Agregar aqui la llamada de todos los registros
    dispatch(getReproductionRecord({idVaca}));
    navigation.navigate('TabNavigatorCow');
    dispatch(getReproductorsList());
  };

  const openInsertNewCow = () => {
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
