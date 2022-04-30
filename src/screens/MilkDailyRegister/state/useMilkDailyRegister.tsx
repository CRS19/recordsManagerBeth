import moment from 'moment';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IDailyTableProps} from '../../../components/Tables/DailyMilkRegisterTable/DailyTable';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
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
  const [openLabModal, setOpenLabModal] = useState<boolean>(false);
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dailyProductionRecords = useSelector(
    (state: IAppState) => state.dailyProductionRecords!,
  );
  const dailyProdRecordByDate = useSelector(
    (state: IAppState) => state.dailyProdRecordByDate!,
  );

  const saveErrorMargin = () => {};

  const setOpenCloseModalLab = () => {
    setOpenLabModal(prevVal => !prevVal);
  };

  const guardarInfo = () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const changeCalostroProductivaInfo = (
    idVaca: string,
    payload: boolean,
    calostro: boolean,
  ) => {
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
    const ts = getTimestampFromDate(keys[0]);
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
