import {isNil} from 'lodash';
import {useSelector} from 'react-redux';
import {IDailyMilkLab} from '../../../interfaces/DailyMilkLab';
import {IAppState} from '../../../store/reducer';

export interface IUseProductionDiario {
  labRecords: IDailyMilkLab;
  GET_ACTION: Record<string, () => string>;
}

export const useProductionDiario = (): IUseProductionDiario => {
  const labRecords = useSelector(
    (state: IAppState) => state.dailyMilkLabRecord!,
  );
  const existLabRecord = isNil(labRecords);
  const milkPrice = useSelector((state: IAppState) => state.Prices!.milkPrice);

  const getMilkCost = () => {
    return `${milkPrice.toString()} $`;
  };

  const getTotalEntregadoMensual = () => {
    let total = 0;
    labRecords.data.map(record => (total += record.totalLab));
    return `${total} lt`;
  };

  const getTotal = () => {
    const total = getTotalEntregadoMensual().split(' ')[0];
    const costoLitro = getMilkCost().split(' ')[0];

    return `${Number(total) * Number(costoLitro)} $`;
  };

  const getMonthsDays = () => {
    return `${labRecords.data.length} Días`;
  };

  const getPromVacasProd = () => {
    let sumVacas = 0;
    labRecords.data.map(record => {
      sumVacas += record.totalCows;
    });
    const days = Number(getMonthsDays().split(' ')[0]);

    return `${sumVacas / days}`;
  };

  const getRedondeo = () => {
    const promVacas = Math.round(Number(getPromVacasProd().split(' ')[0]));
    return `${promVacas}`;
  };

  const getProdCowDay = () => {
    let total = 0;
    labRecords.data.map(record => {
      total += record.totalCalf + record.totalLab;
    });
    const monthDays = Number(getMonthsDays().split(' ')[0]);
    const averageCows = Number(getPromVacasProd().split(' ')[0]);

    return `${(total / monthDays / averageCows).toFixed(2)}`;
  };

  const getPromProdDaily = () => {
    let total = 0;
    labRecords.data.map(record => {
      total += record.totalCalf + record.totalLab;
    });
    const monthDays = Number(getMonthsDays().split(' ')[0]);

    return `${(total / monthDays).toFixed(2)} lt`;
  };

  const GET_ACTION: Record<string, () => string> = {
    ['Costo de litro']: existLabRecord ? () => '0' : getMilkCost,
    ['Total Entregado PL Mensual']: existLabRecord
      ? () => '0'
      : getTotalEntregadoMensual,
    ['Total USD']: existLabRecord ? () => '0' : getTotal,
    ['Dias del mes']: existLabRecord ? () => '0' : getMonthsDays,
    ['Prom. Vacas en Producción']: existLabRecord
      ? () => '0'
      : getPromVacasProd,
    ['Redondeo']: existLabRecord ? () => '0' : getRedondeo,
    ['Prom/Vaca/Día/Productiva']: existLabRecord ? () => '0' : getProdCowDay,
    ['Promedio Producción Diaria']: existLabRecord
      ? () => '0'
      : getPromProdDaily,
  };

  return {labRecords, GET_ACTION};
};
