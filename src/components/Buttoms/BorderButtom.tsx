import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IBorderButtom {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
}

export const BorderButtom = (props: IBorderButtom) => {
  return (
    <TouchableOpacity style={{alignSelf: 'center'}} onPress={props.onPress}>
      <View
        style={{
          ...styles.BorderButtom,
          borderColor: props.isSelected ? 'blue' : 'green',
        }}>
        <Text style={styles.BorderButtomTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
