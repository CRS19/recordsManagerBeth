import React from 'react';
import {View, Text} from 'react-native';

interface IRegisterListButtomProps {
  listNumber: string;
}

export const RegisterListButtom = ({listNumber}: IRegisterListButtomProps) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>{listNumber}</Text>
    </View>
  );
};
