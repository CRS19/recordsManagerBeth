import React from 'react';
import {Text, TextInput, TextInputBase, View} from 'react-native';

export const InputBlock = () => {
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
      <TextInput style={{fontSize: 18, fontWeight: 'normal'}} value={'30'} />
      <Text style={{fontSize: 18, fontWeight: 'normal'}}>Kg</Text>
    </View>
  );
};
