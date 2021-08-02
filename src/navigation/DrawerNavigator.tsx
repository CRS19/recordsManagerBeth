import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {StationScreen} from '../screens/StationScreen';
import {MilkDailyRegister} from '../screens/MilkDailyRegister';
import {BotonMenuLateral} from '../components/Buttoms/BotonMenuLateral';
import {TestIcon} from '../assets/TestIcon';
import {GeneralAppStack} from './GeneralAppStack';

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
  <DrawerContentScrollView style={{}}>
    <BotonMenuLateral
      icono={<TestIcon width="250" heigth="250" />}
      label="Navegación"
      navegation={{
        navegationFuntion: props.navigation,
        destination: 'GeneralAppStack',
      }}
    />
    <BotonMenuLateral
      icono={<TestIcon width="250" heigth="250" />}
      label="Ajustes"
      navegation={{
        navegationFuntion: props.navigation,
        destination: 'MilkDailyRegister',
      }}
    />
  </DrawerContentScrollView>
);
