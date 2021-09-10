import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AddImageIcon} from '../../../assets/AddImageIcon';
import {styles} from '../../../theme/GlobalStyles';

export const AddImage = () => {
  const img = require('../../../assets/Images/registro/p.png');

  return (
    <View style={{...styles.ImagenCardContainer, height: 286, padding: 5}}>
      <Image style={{flex: 1}} source={img} />
      <TouchableOpacity
        style={{
          ...styles.ImageCardLoginFooter,
          width: 375,
          left: 5,
          bottom: 5,
          height: 48,
        }}></TouchableOpacity>
      <AddImageIcon bottom={5} left={10} />
    </View>
  );
};
