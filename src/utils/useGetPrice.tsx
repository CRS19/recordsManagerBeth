import React from 'react';
import {useSelector} from 'react-redux';
import {IAppState} from '../store/reducer';

interface IUseGetPrice {
  currentCowPrice: number;
  newCowPrice: number;
}

export const useGetPrice = (): IUseGetPrice => {
  const meatPrice = useSelector((state: IAppState) => state.Prices!.meatPrice);
  const currentWeigthNewCow = useSelector(
    (state: IAppState) => state.newCow!.pesoActual,
  );
  const currentWeigthCurrentCow = useSelector(
    (state: IAppState) => state.CurrentCow!.pesoActual,
  );

  const currentCowPrice = meatPrice * currentWeigthCurrentCow;
  const newCowPrice = meatPrice * currentWeigthNewCow;
  console.log(currentWeigthNewCow);
  console.log(currentWeigthCurrentCow);

  return {
    currentCowPrice,
    newCowPrice,
  };
};
