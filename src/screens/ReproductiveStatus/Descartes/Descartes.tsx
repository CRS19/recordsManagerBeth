import {truncate} from 'lodash';
import React from 'react';
import {Text, View} from 'react-native';
import {Ginecologia} from '../../../assets/Ginecologia/Ginecologia';
import {SalesChart} from '../../../assets/SalesChart';
import {Truck} from '../../../assets/truck';
import {GeneralButtom} from '../../../components/GeneralButtom';
import {Rip} from '../../Rip';

export const Descartes = () => {
  return (
    <View>
      <Text>pantalla de descartes </Text>
      <GeneralButtom
        title="Muertes"
        color="#03DAC5"
        Icon={<Rip />}
        navigateTo={'Muertes'}
      />
      <GeneralButtom
        title="Traslados"
        color="#EFE6C9"
        Icon={<Truck />}
        navigateTo={'Traslados'}
      />
      <GeneralButtom
        title="Ventas"
        color="#F59257"
        Icon={<SalesChart />}
        navigateTo={'Ventas'}
      />
    </View>
  );
};
