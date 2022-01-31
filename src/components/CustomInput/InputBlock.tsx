import React, {Dispatch} from 'react';
import {Text, TextInput, TextInputBase, View} from 'react-native';

export interface IInputBlockProps {
  initialValue: string;
  setPeso: Dispatch<React.SetStateAction<string>>;
  suffix?: string;
  height?: number;
  width?: number;
}

export const InputBlock = ({
  initialValue,
  setPeso,
  suffix = 'Kg',
  height = 56,
  width = 105,
}: IInputBlockProps) => {
  return (
    <View
      style={{
        borderWidth: 2,
        backgroundColor: 'white',
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TextInput
        style={{fontSize: 18, fontWeight: 'normal'}}
        value={initialValue}
        onChangeText={text => setPeso(text)}
      />
      <Text style={{fontSize: 18, fontWeight: 'normal'}}>{suffix}</Text>
    </View>
  );
};
