import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICow} from '../../../interfaces/CowInterface';
import {
  getDrugsList,
  getOnstokStrawList,
  getRecordsById,
  getReproductionRecord,
  getReproductorsList,
  getSanityRecordById,
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
    dispatch(getRecordsById(props.idVaca));
    dispatch(getSanityRecordById(props.idVaca));
    dispatch(getDrugsList());
    dispatch(getOnstokStrawList());
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
