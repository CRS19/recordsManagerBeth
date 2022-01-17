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
import {getMomentOfDay, isMorning} from '../../../utils/time-utils';

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
}

export const useMilkDailyRegister = (): IUseMilkDailyRegister => {
  // TODO cambiar valor inicial tomarlo de la bas ed e datos
  const dispatch = useDispatch();
  const [errorMargin, setErrorMargin] = useState('5');
  const productorasList = useSelector(
    (state: IAppState) => state.productorasList!,
  );
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
  };
};
