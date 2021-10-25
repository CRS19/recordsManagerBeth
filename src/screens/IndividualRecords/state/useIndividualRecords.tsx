import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {API_BASE_PATH} from '../../../env/environment';
import {setPrice} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {getCowsResponse} from '../../../interfaces/getCowsResponse';
import {ICow} from '../../../interfaces/CowInterface';

interface IUseIndividualRecords {
  precioCarne: number;
  precioLeche: number;
  isLoading: boolean;
  cowList: ICow[];
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
  const [isLoading, setIsLoading] = useState(true);
  const [openCloseModalCarne, setOpenCloseModalCarne] = useState(false);
  const [openCloseModalLeche, setOpenCloseModalLeche] = useState(false);
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const [precioCarne, setPrecioCarne] = useState(price!.meatPrice!);
  const [precioLeche, setPrecioLeche] = useState(price!.milkPrice!);
  const [cowList, setCowList] = useState<ICow[]>([]);
  const page = useRef('1');

  const loadCows = async () => {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `${API_BASE_PATH}/cow/${page.current}`,
      );

      const data: getCowsResponse = response.data;

      if (page.current != data.next) {
        page.current = data.next;
      }

      console.log(JSON.stringify(data.cows, null, 3));

      setCowList([...cowList, ...data.cows]);

      setIsLoading(false);
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response as any);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCows();
  }, []);

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
    cowList,
    isLoading,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    setOpenCloseModalLeche,
    guardarPrecioLeche,
    printState,
  };
};
