import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {TabReproductionIcon} from '../../assets/TabReproductionIcon';

interface ITabNavigationButtom {
  props: BottomTabBarProps<BottomTabBarOptions>;
  index: number;
  navigateTo?: string;
  ReturnTo?: string;
  title: string;
  icon?: JSX.Element;
}

export const TabNavigationButtom = (params: ITabNavigationButtom) => {
  const {props, index, navigateTo, icon, title, ReturnTo} = params;
  const returnTo = useNavigation();

  const screenToNavigate = (): void => {
    if (navigateTo === undefined) {
      returnTo.navigate(ReturnTo!);
    } else {
      props.navigation.navigate(navigateTo);
    }
  };

  return (
    <TouchableNativeFeedback
      style={{flex: 1}}
      onPress={() => screenToNavigate()}>
      <View
        style={{
          flex: 1,
          height: 88,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 88,
            backgroundColor:
              props.state.index === index
                ? '#CF4F4E'
                : props.activeBackgroundColor,
          }}>
          {icon}
          <Text
            style={{
              fontFamily: 'Roboto',
              textTransform: 'uppercase',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 16,
              letterSpacing: 1.25,
              color: props.state.index === index ? 'white' : '#EFC6C5',
              bottom: props.state.index === index ? 7 : 10.67,
            }}>
            {title}
          </Text>
        </View>
        {props.state.index === index && (
          <View style={{backgroundColor: 'green', height: 3.67}}></View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};
