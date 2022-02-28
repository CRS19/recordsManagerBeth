import React from 'react';
import {View} from 'react-native';
import {MilkVaso} from '../../assets/MilkVaso';
import {ProductiveStatistics} from '../../assets/ProductiveStatistics';
import {GeneralButtom} from '../../components/GeneralButtom';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';

export const GlobalProduction = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Producción Global"></TopBar>
      <GeneralButtom
        title="producción diaria"
        color="#03DAC5"
        Icon={<MilkVaso />}
        navigateTo={'ProductionDiaria'}
      />
      <GeneralButtom
        title="Eficiencia productiva"
        color="#F59257"
        Icon={<ProductiveStatistics />}
        navigateTo={'EficienciaProductiva'}
      />
      <View style={{...styles.LogInFooter, marginTop: 235}} />
    </View>
  );
};
