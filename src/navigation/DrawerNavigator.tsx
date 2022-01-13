import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {MilkDailyRegister} from '../screens/MilkDailyRegister/MilkDailyRegister';
import {BotonMenuLateral} from '../components/Buttoms/BotonMenuLateral';
import {GeneralAppStack} from './GeneralAppStack';
import {MilkDrawerIcon} from '../assets/MilkDrawerIcon';
import {StationIcon} from '../assets/StationIcon';
import {QrIconDrawer} from '../assets/QrIconDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen
        name="GeneralAppStack"
        options={{title: 'GeneralAppStack'}}
        component={GeneralAppStack}
      />
      <Drawer.Screen
        name="MilkDailyRegister"
        options={{title: 'MilkDailyRegister'}}
        component={MilkDailyRegister}
      />
    </Drawer.Navigator>
  );
};

const MenuContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => (
  <DrawerContentScrollView style={{backgroundColor: '#03DAC5'}}>
    <BotonMenuLateral
      icono={<StationIcon />}
      label="Estación"
      navegation={{
        navegationFuntion: props.navigation,
        destination: 'GeneralAppStack',
      }}
    />
    <BotonMenuLateral
      icono={<MilkDrawerIcon />}
      label="Ingreso registro de leche"
      navegation={{
        navegationFuntion: props.navigation,
        destination: 'MilkDailyRegister',
      }}
    />
    <BotonMenuLateral
      icono={<QrIconDrawer />}
      label="Buscar por código qr"
      navegation={{
        navegationFuntion: props.navigation,
        destination: 'IndividualRecords',
      }}
    />
  </DrawerContentScrollView>
);
