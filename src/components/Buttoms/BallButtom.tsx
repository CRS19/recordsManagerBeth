import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

export interface IBallButtomProps {
  title: string;
  onPress: () => void;
}

export const BallButtom = ({title, onPress}: IBallButtomProps) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#28425B', false, 28)}
      onPress={onPress}>
      <View
        style={{
          ...styles.InfoIcon,
          margin: 15,
          height: 56,
          width: 56,
          backgroundColor: '#03DAC5',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            top: -1,
            left: -1,
          }}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
