import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IDeathCertificate} from '../../../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {styles} from '../../../../theme/GlobalStyles';
import {getDateOfDay} from '../../../../utils/time-utils';
import {get} from 'lodash';
import {useNavigation} from '@react-navigation/native';

interface IDeathCertifiateItemProps {
  deathCertificate: IDeathCertificate;
}

export const DeathCertificate = ({
  deathCertificate,
}: IDeathCertifiateItemProps) => {
  const naviage = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => naviage.navigate('MuerteIndividuo', {deathCertificate})}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
        }}>
        <View style={{...styles.DailyMilkRow, width: 138, borderTopWidth: 0}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {deathCertificate.areteNumber}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 180, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {getDateOfDay(deathCertificate.fechaNacimiento)}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 130, borderTopWidth: 0}}>
          <Text style={{fontSize: 18}}>{deathCertificate.sexo}</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 160, borderTopWidth: 0}}>
          <Text style={{fontSize: 18}}>{deathCertificate.raza}</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 184, borderTopWidth: 0}}>
          <Text style={{fontSize: 18}}>
            {getDateOfDay(get(deathCertificate, 'descarteTimestmap', 0))}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 133, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {deathCertificate.edadMeses}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 103, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {deathCertificate.precio}
          </Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 130,
            borderRightWidth: 2,
            borderTopWidth: 0,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {deathCertificate.deathCertificateId}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
