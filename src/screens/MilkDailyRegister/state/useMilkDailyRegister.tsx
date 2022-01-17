import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {IProductorasArray} from '../../../interfaces/ProductorasId';
import {
  changeProdToFalse,
  getDailyProdRecords,
  saveDailyProducts,
} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {
  getMaxDate,
  getMomentOfDay,
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
  DailyTableProps: {
    productorasList: IProductorasArray;
    dailyProductionRecords: IDailyMilkRecord[];
    changeCalostroProductivaInfo: (
      idVaca: string,
      payload: boolean,
      calostro: boolean,
    ) => void;
  };
  isLoading: boolean;
  guardarInfo: () => void;
  markedD: ICalendarSelected;
  setMarkedD: React.Dispatch<React.SetStateAction<ICalendarSelected>>;
}

export const useMilkDailyRegister = (): IUseMilkDailyRegister => {
  getTimestampFromDate('2021-01-16');

  const dispatch = useDispatch();
  const [errorMargin, setErrorMargin] = useState('5');
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

  const saveErrorMargin = () => {
    console.log('ACTION: cambiar el margen de error');
  };

  const guardarInfo = () => {
    let allCorrect = true;
    let vacasNoIngresadas: string[] = [];
    const recordsToSave: IDailyMilkRecord[] = dailyProductionRecords.map(
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
        'Error de ingreso',
        `Asegurese de que todas la producción de todas las vacas del listado haya sido ingresado \n\n${vacasNoIngresadas.map(
          vaca => `${vaca} no ha sido ingresada`,
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
      guardarInfo();
    } else {
      // desactivar productiva
      dispatch(
        changeProdToFalse({
          idVaca: dailyProductionRecords[Number(idVaca) - 1].idVaca,
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
    console.log('cambiar los registros segun la fecha');
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
      changeCalostroProductivaInfo,
    },
    isLoading,
    guardarInfo,
    markedD,
    setMarkedD,
  };
};
