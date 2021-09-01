import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Loaging...</Text>
      </TouchableOpacity>
    </View>
  );
};
