import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '../theme/GlobalStyles';

interface ICardImage {
  imagePath: string;
}

export const ImageCardLogin = (props: ICardImage) => {
  let icon: any;
  const a = require('../assets/Images/a.png');
  const b = require('../assets/Images/b.png');
  const c = require('../assets/Images/c.png');
  const d = require('../assets/Images/d.png');

  switch (props.imagePath) {
    case 'a':
      icon = a;
      break;
    case 'b':
      icon = b;
      break;
    case 'c':
      icon = c;
      break;
    case 'd':
      icon = d;
      break;
    default:
      icon = a;
      break;
  }

  return (
    <View style={styles.ImagenCardContainer}>
      {/* Recordar poner las imagenes en el servidor y jalarlas
          con el URI
      */}
      {<Image style={{flex: 1}} source={icon} />}
      <View style={styles.ImageCardLoginFooter}></View>
    </View>
  );
};
