import React from 'react';
import {View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {IDeathCertificate} from '../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {styles} from '../../theme/GlobalStyles';
import {getDateOfDay} from '../../utils/time-utils';
import {ViewInput} from '../ViewInput/ViewInput';

export interface IDescarteInfoCardProps {
  deathCertificate: IDeathCertificate;
}

export const DescarteInfoCard = ({
  deathCertificate,
}: IDescarteInfoCardProps) => {
  return (
    <View
      style={{
        ...styles.InputCardCaracteristic,
        height: 417,
        width: 360,
        backgroundColor: '#03DAC5',
        margin: 10,
      }}>
      <ViewInput
        logo={<GeneralIcon />}
        label="FECHA DE NACIMIENTO"
        value={`${getDateOfDay(
          deathCertificate.fechaNacimiento,
          'DD/MM/YYYY',
        )}`}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="ESPECIE"
        value={deathCertificate.especie.toUpperCase()}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="EDAD MESES"
        value={`${deathCertificate.edadMeses}`}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="RAZA"
        value={`${deathCertificate.raza}`}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="SEXO"
        value={`${deathCertificate.sexo}`}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="N° DE ARETE"
        value={`${deathCertificate.areteNumber}`}
      />
      <ViewInput
        logo={<GeneralIcon />}
        label="PRECIO USD"
        value={`${deathCertificate.precio}`}
      />
    </View>
  );
};
