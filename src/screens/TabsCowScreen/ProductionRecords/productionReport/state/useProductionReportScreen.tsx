import axios from 'axios';
import {get, isEmpty} from 'lodash';
import React, {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {API_BASE_PATH} from '../../../../../env/environment';

export interface IUseProductionReportScrenProps {
  idVaca: string;
  prodCicle: string;
}

export interface IMilkData {
  x: number;
  y: number;
}

export interface IDataRecord {
  idVaca: string;
  prodCicle: string;
  data: IMilkData[];
}

export interface IMilkingDataRespose {
  message: string;
  record: IDataRecord;
}

export interface IUseProductionReportScreen {
  milkingData: IMilkData[];
}

export const useProductionReportScreen = ({
  idVaca,
  prodCicle,
}: IUseProductionReportScrenProps): IUseProductionReportScreen => {
  const [milkingData, setMilkingData] = useState<IMilkData[]>([]);

  console.log(
    `DEBUG: prodcicle param ${prodCicle} y pordCicle state: ${prodCicle}`,
  );

  const getDataRecod = async () => {
    try {
      console.log('Llamando al enpoint -------- ', idVaca);
      const response = await axios.get(
        `${API_BASE_PATH}/daily-milking-data/obtenerData/${idVaca}/${prodCicle}`,
      );

      console.log(response);
      const data: IMilkingDataRespose = JSON.parse(response.request._response);

      console.log('respuesta _> ', data.record.data);
      setMilkingData(data.record.data);
    } catch (e) {
      console.log('ERRRORR ');
      setMilkingData([{x: 0, y: 0}]);
      Alert.alert(
        'Error de base de datos',
        `No existen los datos de ${idVaca} en el ciclo productivo ${prodCicle}`,
      );
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('USE EFFECT LLAAMOD');
    if (isEmpty(milkingData)) {
      getDataRecod();
    }
  }, [milkingData]);

  useEffect(() => {
    console.log('****************** ', prodCicle, idVaca);
    getDataRecod();
  }, [prodCicle]);

  return {
    milkingData,
  };
};
