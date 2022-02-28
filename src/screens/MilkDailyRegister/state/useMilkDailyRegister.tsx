import moment from 'moment';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IDailyTableProps} from '../../../components/Tables/DailyMilkRegisterTable/DailyTable';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {IProductorasArray} from '../../../interfaces/ProductorasId';
import {
  changeProd,
  getDailyProdRecords,
  getRecordsByDate,
  saveDailyProducts,
} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {
  getDateOfDay,
  getMaxDate,
  getMomentOfDay,
  getTimestamp,
  getTimestampFromDate,
  isMorning,
} from '../../../utils/time-utils';

export interface ICalendarSelected {
  [k: string]: {
    selected: boolean;
    selectedColor: string;
    activeOpacity: number;
  };
}

export interface IUseMilkDailyRegister {
  MarginButtomProps: {
    errorMargin: string;
    setErrorMargin: React.Dispatch<React.SetStateAction<string>>;
    saveErrorMargin: () => void;
  };
  DailyTableProps: IDailyTableProps;
  isLoading: boolean;
  guardarInfo: () => void;
  markedD: ICalendarSelected;
  setMarkedD: React.Dispatch<React.SetStateAction<ICalendarSelected>>;
  modalLabActions: {
    openLabModal: boolean;
    setOpenCloseModalLab: () => void;
  };
}

export const useMilkDailyRegister = (): IUseMilkDailyRegister => {
  const dispatch = useDispatch();
  const [errorMargin, setErrorMargin] = useState('5');
  const [isDateView, setIsDateView] = useState(false);
  const [openLabModal, setOpenLabModal] = useState<boolean>(true);
  const productorasList = useSelector(
    (state: IAppState) => state.productorasList!,
  );
  const [markedD, setMarkedD] = useState<ICalendarSelected>({
    [getMaxDate()]: {
      selected: true,
      selectedColor: 'orange',
      activeOpacity: 0,
    },
  });
  const isLoading = useSelector((state: IAppState) => state.isLoading!);
  const dailyProductionRecords = useSelector(
    (state: IAppState) => state.dailyProductionRecords!,
  );
  const dailyProdRecordByDate = useSelector(
    (state: IAppState) => state.dailyProdRecordByDate!,
  );

  const saveErrorMargin = () => {
    console.log('ACTION: cambiar el margen de error');
  };

  const setOpenCloseModalLab = () => {
    setOpenLabModal(prevVal => !prevVal);
  };

  const guardarInfo = () => {
    let allCorrect = true;
    let vacasNoIngresadas: string[] = [];
    const dailyProdRecordsNoCalostro = dailyProductionRecords.filter(
      record => !record.calostro,
    );

    const recordsToSave: IDailyMilkRecord[] = dailyProdRecordsNoCalostro.map(
      (record: IDailyMilkRecord): IDailyMilkRecord => {
        if (isMorning()) {
          if (
            record.dailyRecords[record.dailyRecords.length - 1].mornigProd === 0
          ) {
            allCorrect = false;
            vacasNoIngresadas.push(record.idVaca);
          }
          record.dailyRecords[record.dailyRecords.length - 1].morningSaved =
            true;
          return record;
        } else {
          if (
            record.dailyRecords[record.dailyRecords.length - 1]
              .afternoonProd === 0
          ) {
            allCorrect = false;
            vacasNoIngresadas.push(record.idVaca);
          }
          record.dailyRecords[record.dailyRecords.length - 1].afremoonSaved =
            true;
          return record;
        }
      },
    );

    console.log(JSON.stringify(recordsToSave, null, 3));
    if (allCorrect) {
      dispatch(saveDailyProducts(recordsToSave));
    } else {
      Alert.alert(
        'Faltan datos por ingresar!',
        `¿Está seguro de guardar el registro incompleto?\nLas siguientes vacas no han sido ingresadas: \n\n${vacasNoIngresadas.map(
          vaca => `${vaca} no ha sido ingresada\n`,
        )}`,
      );
    }
  };

  const changeCalostroProductivaInfo = (
    idVaca: string,
    payload: boolean,
    calostro: boolean,
  ) => {
    console.log(`cambiando a ${idVaca}`);
    if (calostro) {
      // desactivar calostro
      dailyProductionRecords[Number(idVaca) - 1].calostro = payload;
      dailyProductionRecords[Number(idVaca) - 1].dailyRecords = [];
      dailyProductionRecords[Number(idVaca) - 1].endCalostroTs = getTimestamp();
      dispatch(saveDailyProducts(dailyProductionRecords));
    } else {
      // desactivar productiva
      dispatch(
        changeProd({
          idVaca: dailyProductionRecords[Number(idVaca) - 1].idVaca,
          productivity: false,
        }),
      );
    }
  };

  useEffect(() => {
    if (productorasList.productoras.length !== 0) {
      dispatch(getDailyProdRecords(productorasList));
    }
  }, [productorasList]);

  useEffect(() => {
    const keys = Object.keys(markedD);
    console.log(
      'cambiar los registros segun la fecha, obteniendo las keys',
      Object.keys(markedD),
    );
    const ts = getTimestampFromDate(keys[0]);
    console.log(ts);
    console.log(
      'jeeelp',
      getDateOfDay(Number(ts)) === getDateOfDay(moment.now()),
    );
    setIsDateView(!(getDateOfDay(Number(ts)) === getDateOfDay(moment.now())));
    dispatch(getRecordsByDate(ts));
  }, [markedD]);

  return {
    MarginButtomProps: {
      errorMargin,
      setErrorMargin,
      saveErrorMargin,
    },
    DailyTableProps: {
      productorasList,
      dailyProductionRecords,
      isDateView,
      dailyProdRecordByDate,
      changeCalostroProductivaInfo,
    },
    isLoading,
    guardarInfo,
    markedD,
    setMarkedD,
    modalLabActions: {
      openLabModal,
      setOpenCloseModalLab,
    },
  };
};
