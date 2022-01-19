import React from 'react';
import {Text, View} from 'react-native';
import {DrugControl} from '../../assets/DrugControl';
import {Espermatozoide} from '../../assets/Espermatozoide';
import {Ginecologia} from '../../assets/Ginecologia/Ginecologia';
import {HeadCow} from '../../assets/HeadCow';
import {Toro} from '../../assets/Toro';
import {GeneralButtom} from '../../components/GeneralButtom';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';

export const InventoryScreen = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Inventario"></TopBar>
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
      <View style={{...styles.LogInFooter, marginTop: 244}} />
    </View>
  );
};
