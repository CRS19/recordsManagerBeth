import React, {Dispatch, SetStateAction, useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPrice} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';

interface IUseIndividualRecords {
  precioCarne: number;
  precioLeche: number;
  guardarPrecioCarne: (value: number) => void;
  guardarPrecioLeche: (value: number) => void;
  openCloseModalCarne: boolean;
  openCloseModalLeche: boolean;
  setOpenCloseModalCarne: Dispatch<SetStateAction<boolean>>;
  setOpenCloseModalLeche: Dispatch<SetStateAction<boolean>>;
  printState: () => void;
}

export const useIndividualRecords = (): IUseIndividualRecords => {
  const dispatch = useDispatch();
  const price = useSelector((state: IAppState) => state.Prices);
  const [openCloseModalCarne, setOpenCloseModalCarne] = useState(false);
  const [openCloseModalLeche, setOpenCloseModalLeche] = useState(false);
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const [precioCarne, setPrecioCarne] = useState(price!.meatPrice!);
  const [precioLeche, setPrecioLeche] = useState(price!.milkPrice!);

  useEffect(() => {
    dispatch(setPrice({...price!, milkPrice: precioLeche}));
  }, [precioLeche]);

  useEffect(() => {
    dispatch(setPrice({...price!, meatPrice: precioCarne}));
  }, [precioCarne]);

  const guardarPrecioCarne = (precio: number) => {
    setPrecioCarne(precio);
    setOpenCloseModalCarne(false);
  };

  const guardarPrecioLeche = (precio: number) => {
    setPrecioLeche(precio);
    setOpenCloseModalLeche(false);
  };

  const printState = () => {
    console.log(JSON.stringify(currentCow, null, 3));
    console.log(price);
  };

  return {
    precioCarne,
    precioLeche,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    setOpenCloseModalLeche,
    guardarPrecioLeche,
    printState,
  };
};
