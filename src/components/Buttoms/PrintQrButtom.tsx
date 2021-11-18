import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {QrPrintIcon} from '../../assets/QrPrintIcon';

export const PrintQrButtom = () => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#27AE60',
            width: 53,
            height: 53,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <QrPrintIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};
