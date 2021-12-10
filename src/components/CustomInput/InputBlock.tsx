import React, {Dispatch} from 'react';
import {Text, TextInput, TextInputBase, View} from 'react-native';

export interface IInputBlockProps {
  initialValue: string;
  setPeso: Dispatch<React.SetStateAction<string>>;
}

export const InputBlock = ({initialValue, setPeso}: IInputBlockProps) => {
  return (
    <View
      style={{
        borderWidth: 2,
        backgroundColor: 'white',
        width: 105,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TextInput
        style={{fontSize: 18, fontWeight: 'normal'}}
        value={initialValue}
        onChangeText={text => setPeso(text)}
      />
      <Text style={{fontSize: 18, fontWeight: 'normal'}}>Kg</Text>
    </View>
  );
};
