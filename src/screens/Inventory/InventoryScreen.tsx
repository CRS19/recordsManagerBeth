import React from 'react';
import {Text, View} from 'react-native';
import {DrugControl} from '../../assets/DrugControl';
import {Espermatozoide} from '../../assets/Espermatozoide';
import {Ginecologia} from '../../assets/Ginecologia/Ginecologia';
import {HeadCow} from '../../assets/HeadCow';
import {Toro} from '../../assets/Toro';
import {GeneralButtom} from '../../components/GeneralButtom';

export const InventoryScreen = () => {
  return (
    <View>
      <Text>Inventario</Text>
      <GeneralButtom
        title="Bovinos"
        color="#AAC3D7"
        Icon={<Toro />}
        navigateTo={'Bovinos'}
      />
      <GeneralButtom
        title="Farmacos"
        color="#65CAC0"
        Icon={<Espermatozoide />}
        navigateTo={'Farmacos'}
      />
    </View>
  );
};
