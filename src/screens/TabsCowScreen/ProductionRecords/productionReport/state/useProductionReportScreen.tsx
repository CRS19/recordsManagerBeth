import axios from 'axios';
import {isEmpty} from 'lodash';
import {useEffect, useState} from 'react';
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

  const getDataRecod = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_PATH}/daily-milking-data/obtenerData/${idVaca}/${prodCicle}`,
      );

      const data: IMilkingDataRespose = JSON.parse(response.request._response);

      setMilkingData(data.record.data);
    } catch (e) {
      setMilkingData([{x: 0, y: 0}]);
      Alert.alert(
        'Error de base de datos',
        `No existen los datos de ${idVaca} en el ciclo productivo ${prodCicle}`,
      );
    }
  };

  /*
  useEffect(() => {
    if (isEmpty(milkingData)) {
      getDataRecod();
    }
  }, [milkingData]);
*/
  useEffect(() => {
    getDataRecod();
  }, [prodCicle]);

  return {
    milkingData,
  };
};
