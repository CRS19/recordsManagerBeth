import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Ovulos} from '../../assets/Ovulos/Ovulos';
import {GeneralButtom} from '../GeneralButtom';
import {GeneralLabel} from '../Labels/GeneralLabel';

export const VacunaHistorico = () => {
  return (
    <View
      style={{
        backgroundColor: '#F0E4CA',
        width: 420,
        height: 100,
        marginLeft: 40,
        marginBottom: 20,
      }}>
      <GeneralLabel titulo="fecha de vacunación" valor="23/21/22" color="red" />
      <Text>Fecha de vacunación: </Text>
      <Text>Dosis: </Text>
      <Text>Nombre comercial de la vacuna: </Text>
    </View>
  );
};
