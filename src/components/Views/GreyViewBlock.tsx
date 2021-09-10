import React from 'react';
import {Text, View} from 'react-native';

interface IGreyViewBlockProps {
  title: string;
}

export const GreyViewBlock = (props: IGreyViewBlockProps) => {
  return (
    <View
      style={{
        backgroundColor: '#979797',
        width: 105,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16, fontWeight: 'normal'}}>{props.title} Kg</Text>
    </View>
  );
};
