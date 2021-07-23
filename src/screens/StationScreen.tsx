import React from 'react';
import {ScrollView, View} from 'react-native';
import {DatosIndividualesIcon} from '../assets/DatosIndividualesIcon';
import {EstadoReproductivoIcon} from '../assets/EstadoReproductivoIcon';
import {InventarioIcon} from '../assets/InventarioIcon';
import {ProoduccionGlobalIcon} from '../assets/ProoduccionGlobalIcon';
import {ReproductoresIcon} from '../assets/ReproductoresIcon';
import {BasicFooter} from '../components/BasicFooter';
import {GeneralButtom} from '../components/GeneralButtom';

export const StationScreen = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <GeneralButtom
          title="datos individuales"
          color="#F0E4CA"
          Icon={<DatosIndividualesIcon />}
        />
        <GeneralButtom
          title="producción global"
          color="#D8B285"
          Icon={<ProoduccionGlobalIcon />}
        />
        <GeneralButtom
          title="Estado Reproductivo"
          color="#6E5D53"
          titleColor="white"
          Icon={<EstadoReproductivoIcon />}
        />
        <GeneralButtom
          title="Inventario"
          color="#AAC3D7"
          Icon={<InventarioIcon />}
        />
        <GeneralButtom
          title="reproductores"
          color="#F59257"
          Icon={<ReproductoresIcon />}
        />
      </View>
      <BasicFooter />
    </ScrollView>
  );
};
