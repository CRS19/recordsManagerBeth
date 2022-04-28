import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CameraIconButtom} from '../../assets/CameraIconButtom';

export const QRReaderButtom = () => {
  const a = require('../../assets/Images/qr.png');
  return (
    <View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity activeOpacity={0.8} style={{alignSelf: 'center'}}>
          <CameraIconButtom />
          <View style={{position: 'absolute', top: 55, left: 125}}>
            <Image source={a} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
