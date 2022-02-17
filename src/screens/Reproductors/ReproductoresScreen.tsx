import React from 'react';
import {Text, View} from 'react-native';
import {DrugControl} from '../../assets/DrugControl';
import {Espermatozoide} from '../../assets/Espermatozoide';
import {Toro} from '../../assets/Toro';
import {GeneralButtom} from '../../components/GeneralButtom';
import {Pajuelas} from './Pajuelas/Pajuelas';

export const ReproductoresScreen = () => {
  return (
    <View>
      <Text>Reproductores</Text>
      <GeneralButtom
        title="Total Reproductores"
        color="#65CAC0"
        Icon={<Toro />}
        navigateTo={'TotalReproductores'}
      />
      <GeneralButtom
        title="Pajuelas"
        color="#387496"
        Icon={<Espermatozoide />}
        navigateTo={'Pajuelas'}
      />
    </View>
  );
};
