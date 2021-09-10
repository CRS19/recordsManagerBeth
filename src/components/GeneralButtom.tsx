import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';

import {styles} from '../theme/GlobalStyles';

interface IGeneralButtom {
  title: string;
  color: string;
  Icon: JSX.Element;
  titleColor?: string;
  navigateTo: string;
}

export const GeneralButtom = (props: IGeneralButtom) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate(props.navigateTo)}>
      <View
        style={[styles.GeneralButtomContainer, {backgroundColor: props.color}]}>
        <View style={styles.GeneralButtonIconPosition}>{props.Icon}</View>
        <View style={styles.GeneralButtonTitlePosition}>
          <Text style={[styles.GeneralButtomTitle, {color: props.titleColor}]}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
