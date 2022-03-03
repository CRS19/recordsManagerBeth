import axios from 'axios';
import {isNil, remove, set} from 'lodash';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {areMonthsEmpy} from '../../../constants/ControlGinecologicoConstans';
import {API_BASE_PATH} from '../../../env/environment';
import {
  IControlGinecologicoRowData,
  MONTHS_ABREVIADOS,
} from '../../../interfaces/ControlGinecologico';
import {IReproductionRecord} from '../../../interfaces/ReproductionRecord';
import {IAppState} from '../../../store/reducer';
import {getMonthNumber, getYear, MONTHS} from '../../../utils/time-utils';

export interface IUseControlGinecologico {
  YearButtomFilterProps: {
    year: number;

    setYear: React.Dispatch<React.SetStateAction<number>>;
    yearArray: number[];
  };
  loading: boolean;
  allRecords: IReproductionRecord[];
  rowsData: IControlGinecologicoRowData[];
}

export const useControlGinecologico = (): IUseControlGinecologico => {
  /**
   * Modificar esta sección, es la mas compeja tiene O(n2), se debe mejorar de la siguiente manera:
   *  Cuando un registro de palpación sea actualizado, en el back se debe tomar esa ultima actualización
   *  del registro de palpación y guardar en una tabla ControlGinecologicoRecord dependiendo si
   *  se esta en el mismo mes que fue tomado el registro se debe sobreescribir y si no se agrega em el mes actual
   */

  const allRecords: IReproductionRecord[] = useSelector(
    (state: IAppState) => state.allReproductionRecords!,
  );
  const [rowsData, setRowsData] = useState<IControlGinecologicoRowData[]>([]);
  const [year, setYear] = useState<number>(Number(getYear()));
  const [loading, setLoading] = useState<boolean>(false);
  let yearArray = [0];
  let interval = 10;
  for (let i = 1; i <= 20; i++) {
    yearArray.push(year - interval);
    interval = interval - 1;
  }

  const getRowData = async (): Promise<IControlGinecologicoRowData[]> => {
    setLoading(true);
    if (!isNil(allRecords)) {
      const rowDataPromises = allRecords.map(
        async (record): Promise<IControlGinecologicoRowData> => {
          return {
            numeroArete: record.idVaca.split('-')[1],
            sex: record.sex,
            fechaNacimiento: await getFechaDeNacimiento(record.idVaca)!,
            ...getMonthStatus(record),
          };
        },
      );

      const rowsDataDepured = await Promise.all(rowDataPromises);

      const filteredRowData = rowsDataDepured.filter(
        data => !areMonthsEmpy(data),
      );

      setRowsData(filteredRowData);
      setLoading(false);
    }
    setLoading(false);
    return [];
  };

  const getMonthStatus = (reproductionRecord: IReproductionRecord) => {
    const monthStatus = {
      ene: '',
      feb: '',
      mar: '',
      abr: '',
      may: '',
      jun: '',
      jul: '',
      ago: '',
      sep: '',
      oct: '',
      nov: '',
      dic: '',
    };

    let existInYear = false;

    reproductionRecord.records.map((record, index) => {
      record.registrosPalp.map(registroPalp => {
        const monthNumber = Number(getMonthNumber(registroPalp.fecha));
        const recordYear = Number(getYear(registroPalp.fecha));

        if (recordYear === year) {
          existInYear = true;
          set(
            monthStatus,
            MONTHS_ABREVIADOS[monthNumber - 1],
            registroPalp.registroPalpacion,
          );
        }
      });

      if (!existInYear) {
        setRowsData(prevVal =>
          remove(
            prevVal,
            el => el.numeroArete === reproductionRecord.idVaca.split('-')[1],
          ),
        );
      }
    });

    return monthStatus;
  };

  const getFechaDeNacimiento = async (idVaca: string) => {
    try {
      const resposne = await axios.get<{fechaNacimiento: string}>(
        `${API_BASE_PATH}/cow/getFechaNacimiento/${idVaca}`,
      );

      return resposne.data.fechaNacimiento;
    } catch (e) {
      console.log(
        // @ts-ignore
        `ENDPOINT ERROR RESPONSE: ${idVaca} : ${e.response.request._response}`,
      );

      Alert.alert(
        'Error de base de datos',
        `El registro de ${idVaca} no pudo ser encontrado, porfavor contactese con el administrador`,
      );
    }
  };

  useEffect(() => {
    getRowData();
  }, [allRecords, year]);

  return {
    YearButtomFilterProps: {year, setYear, yearArray},
    allRecords,
    rowsData,
    loading,
  };
};
