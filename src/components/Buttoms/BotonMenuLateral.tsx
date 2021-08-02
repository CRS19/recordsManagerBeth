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
      onPress={() =>
        props.navegation.navegationFuntion.navigate(
          props.navegation.destination,
        )
      }>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 90,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.icono}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontFamily: 'Roboto',
              letterSpacing: 0.4,
              textTransform: 'uppercase',
            }}>
            {props.label}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <View style={{backgroundColor: 'black', height: 2, width: 311}} />
      </View>
    </TouchableOpacity>
  );
};
