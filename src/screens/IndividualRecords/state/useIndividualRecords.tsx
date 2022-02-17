import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {API_BASE_PATH} from '../../../env/environment';
import {setPrice} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {getCowsResponse} from '../../../interfaces/getCowsResponse';
import {ICow} from '../../../interfaces/CowInterface';
import {Alert} from 'react-native';
import {isEmpty} from 'lodash';

interface IUseIndividualRecords {
  precioCarne: number;
  precioLeche: number;
  isLoading: boolean;
  endList: boolean;
  refresh: boolean;
  cowList: ICow[];
  guardarPrecioCarne: (value: number) => void;
  guardarPrecioLeche: (value: number) => void;
  loadCows: () => void;
  openCloseModalCarne: boolean;
  openCloseModalLeche: boolean;
  setOpenCloseModalCarne: Dispatch<SetStateAction<boolean>>;
  setOpenCloseModalLeche: Dispatch<SetStateAction<boolean>>;
  printState: () => void;
  onRefresh: () => void;
}

export const useIndividualRecords = (): IUseIndividualRecords => {
  const dispatch = useDispatch();
  const price = useSelector((state: IAppState) => state.Prices);
  const [isLoading, setIsLoading] = useState(true);
  const [endList, setEndList] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openCloseModalCarne, setOpenCloseModalCarne] = useState(false);
  const [openCloseModalLeche, setOpenCloseModalLeche] = useState(false);
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const [precioCarne, setPrecioCarne] = useState(price!.meatPrice!);
  const [precioLeche, setPrecioLeche] = useState(price!.milkPrice!);
  const [cowList, setCowList] = useState<ICow[]>([]);
  const page = useRef('1');

  const loadCows = async () => {
    try {
      const response = await axios.patch(
        `${API_BASE_PATH}/cow/${page.current}`,
      );

      const data: getCowsResponse = response.data;

      if (page.current != data.next) {
        page.current = data.next;
        setEndList(false);
      } else {
        setEndList(true);
      }

      setCowList([...cowList, ...data.cows]);
      setIsLoading(false);
      setRefresh(false);
    } catch (e) {
      // @ts-ignore
      console.log(e.response);
      Alert.alert(
        'Servidor fuera de servicio',
        'Ocurrio un error al cargar la información!',
      );
      setIsLoading(false);
      setRefresh(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
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

  const onRefresh = () => {
    setRefresh(true);
    setEndList(false);
    page.current = '1';
    setCowList([]);
  };

  useEffect(() => {
    if (isEmpty(cowList) && refresh) {
      loadCows();
    }
  }, [cowList]);

  return {
    precioCarne,
    precioLeche,
    cowList,
    isLoading,
    refresh,
    loadCows,
    endList,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    setOpenCloseModalLeche,
    guardarPrecioLeche,
    printState,
    onRefresh,
  };
};
