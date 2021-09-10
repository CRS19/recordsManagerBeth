import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {get} from 'lodash';

interface IFillButton {
  title: string;
  onPress: () => void;
  color?: string;
}

export const FillButton = (props: IFillButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{alignSelf: 'center'}}>
      <View
        style={{
          ...styles.FillButtom,
          backgroundColor: get(props, 'color', '#6FCF97'),
        }}>
        <Text style={styles.FillButtomTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
