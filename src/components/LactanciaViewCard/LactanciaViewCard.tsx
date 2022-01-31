import {get, isEmpty, isNil, last} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {milk2Kg} from '../../constants/ConversionFactors';
import {IDailyMilkRecord} from '../../interfaces/DailyMilkRecord';
import {getDiffDays} from '../../utils/time-utils';
import {InputTextView} from '../Views/InputTextView';

export interface ILactanciaViewCardProps {
  productionRecords: IDailyMilkRecord[];
}

export const LactanciaViewCard = ({
  productionRecords,
}: ILactanciaViewCardProps) => {
  const lastRecord: IDailyMilkRecord | undefined = last(productionRecords);

  const getLastTimestamp = () => {
    const endLactanciaTs = get(lastRecord, 'endLactanciaTs', 0);
    if (endLactanciaTs === 0) {
      return get(last(lastRecord?.dailyRecords), 'timestamp', 0);
    } else {
      return endLactanciaTs;
    }
  };

  const getLactanciaNumber = () => {
    if (!isNil(productionRecords)) {
      return productionRecords.length.toString();
    } else {
      return '0';
    }
  };

  const getLactanciaTotalDays = () => {
    if (!isEmpty(lastRecord)) {
      return getDiffDays(lastRecord!.endCalostroTs, getLastTimestamp());
    } else {
      return '0';
    }
  };

  const getTotalProduction = () => {
    if (!isNil(lastRecord)) {
      return (
        lastRecord.dailyRecords.reduce((acc, record) => ({
          ...record,
          totalDailyProd: acc.totalDailyProd + record.totalDailyProd,
        })).totalDailyProd * milk2Kg
      );
    } else {
      return 0;
    }
  };

  const getPeriodoSeco = () => {
    if (productionRecords.length >= 2) {
      return getDiffDays(
        productionRecords[productionRecords.length - 2].endLactanciaTs,
        lastRecord!.created,
      );
    } else {
      return '0';
    }
  };

  const getDailyProdAverage = () => {
    if (!isNil(lastRecord)) {
      return (
        (lastRecord.dailyRecords.reduce((acc, dailyRecord) => ({
          ...dailyRecord,
          totalDailyProd: acc.totalDailyProd + dailyRecord.totalDailyProd,
        })).totalDailyProd /
          lastRecord.dailyRecords.length) *
        milk2Kg
      );
    } else {
      return 0;
    }
  };

  const getProdAdjust305Days = (dailyRecord: IDailyMilkRecord) => {};

  return (
    <View
      style={{
        height: 513,
        width: 337,
        backgroundColor: '#03DAC5',
        paddingHorizontal: 25,
        paddingVertical: 10,
      }}>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'N° de lactancia'}
          value={getLactanciaNumber()}
          labelUnidad=""
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Duración lactancia/ días'}
          value={getLactanciaTotalDays()}
          labelUnidad="Días"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Periodo seco / Dias'}
          value={getPeriodoSeco()}
          labelUnidad="Días"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Producción diaria promedio'}
          value={getDailyProdAverage().toFixed(2).toString()}
          labelUnidad="Kg/vaca/lactancia"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Prod real de leche'}
          value={getTotalProduction().toFixed(2).toString()}
          labelUnidad="Kg/vaca/lacatancia"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView label={'Prod ajustada 305 dias'} value="PENDIENTE" />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Edad adulta Prod ajustada 305 dia'}
          value="PENDIENTE"
        />
      </View>
    </View>
  );
};
