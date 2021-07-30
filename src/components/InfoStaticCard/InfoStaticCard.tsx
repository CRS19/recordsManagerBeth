import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {InfoText} from './InfoText';

export const InfoStaticCard = () => {
  return (
    <View style={styles.InfoStaticCard}>
      <View style={styles.InfoComponentMargin}>
        <InfoText
          title1={'Vaca con '}
          title2={' alta producción'}
          IconColor="#01890E"
        />
        <InfoText
          title1={'Vaca con '}
          title2={' baja producción'}
          IconColor="#CC0202"
        />
        <InfoText title1={' Toro '} title2={' '} IconColor="#0098EE" />

        <InfoText
          title1={'Vaca con '}
          title2={' media producción'}
          IconColor="#FFEE52"
        />
        <InfoText
          title1={' Novilla no'}
          title2={' lactante'}
          IconColor="#9B51E0"
        />
        <InfoText title1={'Descarte '} title2={''} IconColor="#121212" />
      </View>
    </View>
  );
};
