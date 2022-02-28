import React from 'react';
import {ScrollView, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DatosIndividualesIcon} from '../assets/DatosIndividualesIcon';
import {EstadoReproductivoIcon} from '../assets/EstadoReproductivoIcon';
import {InventarioIcon} from '../assets/InventarioIcon';
import {ProoduccionGlobalIcon} from '../assets/ProoduccionGlobalIcon';
import {ReproductoresIcon} from '../assets/ReproductoresIcon';
import {BasicFooter} from '../components/BasicFooter';
import {TopBar} from '../components/TopBar';
import {GeneralButtom} from '../components/GeneralButtom';
import {DispatchActionsEnum} from '../constants/dispatchDirectory';

interface Props extends DrawerScreenProps<any, any> {}

export const StationScreen = ({navigation}: Props) => {
  console.log('OPTIMIZATION: StationScreenRender');

  return (
    <View>
      <TopBar
        title={'Estación Tunshi'}
        findIcon={false}
        navigation={navigation}
      />
      <ScrollView>
        <View style={{flex: 1}}>
          <GeneralButtom
            title="datos individuales"
            color="#F0E4CA"
            Icon={<DatosIndividualesIcon />}
            navigateTo={'IndividualRecords'}
            dispatchAction={DispatchActionsEnum.GET_PRICES}
          />
          <GeneralButtom
            title="producción global"
            color="#D8B285"
            Icon={<ProoduccionGlobalIcon />}
            navigateTo={'GlobalProduction'}
          />
          <GeneralButtom
            title="Estado Reproductivo"
            color="#6E5D53"
            titleColor="white"
            Icon={<EstadoReproductivoIcon />}
            navigateTo={'ReproductiveStatus'}
          />
          <GeneralButtom
            title="Inventario"
            color="#AAC3D7"
            Icon={<InventarioIcon />}
            navigateTo={'InventoryScreen'}
            dispatchAction={DispatchActionsEnum.GET_DRUGS_LIST}
          />
          <GeneralButtom
            title="reproductores"
            color="#F59257"
            Icon={<ReproductoresIcon />}
            navigateTo={'Reproductores'}
          />
        </View>
        <BasicFooter />
      </ScrollView>
    </View>
  );
};
