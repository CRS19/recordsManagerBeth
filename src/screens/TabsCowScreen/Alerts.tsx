import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DescarteIcon} from '../../assets/DescarteIcon';
import {DescarteBottom} from '../../components/Buttoms/DescarteBottom';

export const Alerts = () => {
  return (
    <View>
      <Text>Alerts screen</Text>
      <TouchableOpacity>
        <DescarteIcon />
      </TouchableOpacity>
      <DescarteBottom />
    </View>
  );
};
