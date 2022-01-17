import React from 'react';
import {Text, View} from 'react-native';
import {DailyMilking} from '../../assets/DailyMilking';
import {DatosIndividualesIcon} from '../../assets/DatosIndividualesIcon';
import {MilkVaso} from '../../assets/MilkVaso';
import {ProductiveStatistics} from '../../assets/ProductiveStatistics';
import {GeneralButtom} from '../../components/GeneralButtom';

export const GlobalProduction = () => {
  return (
    <View>
      <Text>Producción Global</Text>
      <GeneralButtom
        title="producción diaria"
        color="#03DAC5"
        Icon={<MilkVaso />}
        navigateTo={'ProductionDiaria'}
      />
      <GeneralButtom
        title="producción individual"
        color="#EFE6C9"
        Icon={<DailyMilking />}
        navigateTo={'ProducciónIndividual'}
      />
      <GeneralButtom
        title="Eficiencia productiva"
        color="#F59257"
        Icon={<ProductiveStatistics />}
        navigateTo={'EficienciaProductiva'}
      />
    </View>
  );
};
