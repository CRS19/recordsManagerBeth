import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import {Text, View, TouchableOpacity, Touchable} from 'react-native';

interface navegateTo {
  navegationFuntion: DrawerNavigationHelpers;
  destination: string;
}

interface IBotonMenuLateral {
  label: string;
  icono: JSX.Element;
  navegation: navegateTo;
}

export const BotonMenuLateral = (props: IBotonMenuLateral) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: '#4D4D4D4D'}}
      onPress={() =>
        props.navegation.navegationFuntion.navigate(
          props.navegation.destination,
        )
      }>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 100, height: 100}}>{props.icono}</View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>{props.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
