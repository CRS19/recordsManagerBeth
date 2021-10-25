import React from 'react';
import {View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {ICow} from '../../interfaces/CowInterface';
import {LactanciaIcon} from '../../assets/LactanciaIcon';
import {LactanciaDuration} from '../../assets/LactanciaDuration';
import {ProductionIcon} from '../../assets/ProductionIcon';
import {DiasSecos} from '../../assets/DiasSecos';
import {ViewInput} from '../ViewInput/ViewInput';

interface ILactanciaInputCardView {
  value: ICow;
}

export const LactanciaInputCardView = (props: ILactanciaInputCardView) => {
  const {value} = props;

  return (
    <View style={styles.InputCardCaracteristic}>
      <View>
        <ViewInput
          logo={<LactanciaIcon />}
          label="N° DE LACTANCIAS"
          value={`${value.vacaInfo!.numeroLactancias}`}
        />
        <ViewInput
          logo={<LactanciaDuration />}
          label="DIAS LACTANCIA PROM."
          value={`${value.vacaInfo!.duraciónLactanciaPromedio} DIAS`}
        />
        <ViewInput
          logo={<ProductionIcon />}
          label="PROD PROM LACTANCIA."
          value={`${value.vacaInfo!.produccionPromedioLactancias} LITROS`}
        />
        <ViewInput
          logo={<DiasSecos />}
          label="DÍAS SECOS TOTALES."
          value={`${value.vacaInfo!.diasSecosTotales} DIAS`}
        />
      </View>
    </View>
  );
};
