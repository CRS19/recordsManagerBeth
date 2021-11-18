import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {get, isNil} from 'lodash';

interface IFillButton {
  title: string;
  onPress: () => void;
  color?: string;
  width?: number;
  height?: number;
  disable?: boolean;
}

export const FillButton = (props: IFillButton) => {
  const customDimentions = isNil(props.width) && isNil(props.height);
  const disable = isNil(props.disable);

  const getStyles = () => {
    return customDimentions
      ? {
          ...styles.FillButtom,
          backgroundColor: get(props, 'color', '#6FCF97'),
        }
      : {
          ...styles.FillButtom,
          backgroundColor: props.disable
            ? get(props, 'color', 'rgba(111, 207, 151, 0.5)')
            : get(props, 'color', '#6FCF97'),
          width: props.width,
          height: props.height,
        };
  };

  return (
    <TouchableOpacity
      disabled={disable ? false : props.disable}
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{alignSelf: 'center'}}>
      <View style={getStyles()}>
        <Text
          style={{
            ...styles.FillButtomTitle,
            paddingHorizontal: customDimentions ? 15 : 0,
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
