import React from 'react';
import {Text, View} from 'react-native';
import {IDeathCertificate} from '../../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {DeathCertificate} from './DeathCertificateItem/DeathCertificate';
import {isNil} from 'lodash';
import {styles} from '../../../theme/GlobalStyles';

export interface IDeathCertificateItems {
  deathCertificates: IDeathCertificate[];
}

export const DeathCertificateItems = ({
  deathCertificates,
}: IDeathCertificateItems) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          marginTop: 20,
        }}>
        <View style={{...styles.DailyMilkRow, width: 138}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            Arete
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 180}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Fecha de nacimiento
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 130}}>
          <Text style={{fontSize: 18}}>Sexo</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 160}}>
          <Text style={{fontSize: 18}}>Raza</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 184}}>
          <Text style={{fontSize: 18}}>Fecha de Muerte</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 133}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Edad Meses</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 103}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Precio ($)</Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 130,
            borderRightWidth: 2,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>N° Acta</Text>
        </View>
      </View>
      {!isNil(deathCertificates) &&
        deathCertificates.map(
          (deathCertificate: IDeathCertificate, index: number) => (
            <View key={`${deathCertificate.idVaca}-${index}`}>
              <DeathCertificate deathCertificate={deathCertificate} />
            </View>
          ),
        )}
    </View>
  );
};
