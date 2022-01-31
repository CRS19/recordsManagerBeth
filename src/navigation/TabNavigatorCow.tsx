import React, {useState} from 'react';

import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import {ProductionScreen} from '../screens/TabsCowScreen/ProductionScreen';
import {Reproduction} from '../screens/TabsCowScreen/Reproduction';
import {TabReproductionIcon} from '../assets/TabReproductionIcon';
import {TestIcon} from '../assets/TestIcon';
import {TabNavigationButtom} from '../components/Buttoms/TabNavigationButtom';
import {StationScreen} from '../screens/StationScreen';
import {IndividualRecords} from '../screens/IndividualRecords/IndividualRecords';
import {DrawerNavigator} from './DrawerNavigator';
import {StationIcon} from '../assets/StationIcon';
import {AnimalsIcon} from '../assets/AnimalsIcon';
import {MainRecordIcon} from '../assets/MainRecordIcon';
import {MainRecord} from '../screens/TabsCowScreen/MainRecords/MainRecord';
import {ProductionTabIcon} from '../assets/ProductionTabIcon';
import {Sanity} from '../screens/TabsCowScreen/Sanity/Sanity';
import {Alerts} from '../screens/TabsCowScreen/Alerts';
import {SanityTabIcon} from '../assets/SanityTabIcon';
import {AlertsTabIcon} from '../assets/AlertsTabIcon';
import {useSelector} from 'react-redux';
import {IAppState} from '../store/reducer';
import {MainRecordSwitch} from '../screens/TabsCowScreen/MainRecords/MainRecordSwitch';
import {Diagnostico} from '../screens/TabsCowScreen/Sanity/Diagnostico/Diagnostico';
import {Vacunas} from '../screens/TabsCowScreen/Sanity/Vacunas/Vacunas';
import {Desparacitaciones1} from '../assets/Desparacitaciones1';
import {HistoriaClinica} from '../screens/TabsCowScreen/Sanity/HistoriaClinica/HistoriaClinica';
import {Desparacintaciones} from '../screens/TabsCowScreen/Sanity/Desparacitaciones/Desparacitaciones';
import {Brucelosis} from '../screens/TabsCowScreen/Sanity/DirecciónVacunas/Brucelosis/Brucelosis';
import {CarbuncoTriple} from '../screens/TabsCowScreen/Sanity/DirecciónVacunas/CarbuncoTriple/CarbuncoTriple';
import {CuatroVirales} from '../screens/TabsCowScreen/Sanity/DirecciónVacunas/CuatroVirales/CuatroVirales';
import {Aftosa} from '../screens/TabsCowScreen/Sanity/DirecciónVacunas/Aftosa/Aftosa';
import {OtroTipoVacuna} from '../screens/TabsCowScreen/Sanity/DirecciónVacunas/OtroTipoVacuna/OtroTipoVacuna';

const Tab = createBottomTabNavigator();

export const TabNavigatorCow = () => {
  console.log('OPTIMIZATION: tabs render!');
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#C22321',
      }}
      tabBar={props => <MisTabs {...props} />}>
      <Tab.Screen name="MainRecord" component={MainRecordSwitch} />
      <Tab.Screen name="ProductionScreen" component={ProductionScreen} />
      <Tab.Screen name="Reproduction" component={Reproduction} />
      <Tab.Screen name="Sanity" component={Sanity} />
      <Tab.Screen name="Alerts" component={Alerts} />
      <Tab.Screen name="Diagnostico" component={Diagnostico} />
      <Tab.Screen name="Vacunas" component={Vacunas} />
      <Tab.Screen name="Brucelosis" component={Brucelosis} />
      <Tab.Screen name="CarbuncoTriple" component={CarbuncoTriple} />
      <Tab.Screen name="CuatroVirales" component={CuatroVirales} />
      <Tab.Screen name="Aftosa" component={Aftosa} />
      <Tab.Screen name="OtroTpoVacuna" component={OtroTipoVacuna} />
      <Tab.Screen name="Desparacitaciones" component={Desparacintaciones} />
      <Tab.Screen name="HistoriaClinica" component={HistoriaClinica} />
    </Tab.Navigator>
  );
};

const MisTabs = (props: BottomTabBarProps<BottomTabBarOptions>) => {
  console.log('DEBUG: tabs render!', '.. Current index: ', props.state.index!);
  const isInsertingNewCow = useSelector(
    (state: IAppState) => state.insertNewCow!,
  );

  return (
    <View style={{flexDirection: 'row'}}>
      <TabNavigationButtom
        props={props}
        disable={isInsertingNewCow}
        index={5}
        ReturnTo={'StationScreen'}
        title={'Estación'}
        icon={<StationIcon isSelected={true} bottom={12} />}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={6}
        ReturnTo={'IndividualRecords'}
        icon={<AnimalsIcon bottom={8} />}
        title={'Animales'}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={0}
        navigateTo={'MainRecord'}
        icon={
          <MainRecordIcon bottom={14} isSelected={props.state.index === 0} />
        }
        title={'R. master'}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={1}
        navigateTo={'ProductionScreen'}
        icon={
          <ProductionTabIcon bottom={14} isSelected={props.state.index === 1} />
        }
        title={'producción'}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={2}
        navigateTo={'Reproduction'}
        icon={
          <TabReproductionIcon
            isSelected={props.state.index === 2}
            width={'300'}
            heigth={'300'}
          />
        }
        title={'Reproducción'}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={3}
        navigateTo={'Sanity'}
        icon={
          <SanityTabIcon bottom={13} isSelected={props.state.index === 3} />
        }
        title={'Sanidad'}
      />
      <TabNavigationButtom
        disable={isInsertingNewCow}
        props={props}
        index={4}
        navigateTo={'Alerts'}
        icon={
          <AlertsTabIcon bottom={13} isSelected={props.state.index === 4} />
        }
        title={'Alerts'}
      />
    </View>
  );
};
