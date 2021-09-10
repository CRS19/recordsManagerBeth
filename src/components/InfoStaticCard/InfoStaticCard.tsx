import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {InfoText} from './InfoText';
import {COLORPRODUCCTION} from '../../constants/colorEnum';

export const InfoStaticCard = () => {
  return (
    <View style={styles.InfoStaticCard}>
      <View style={styles.InfoComponentMargin}>
        <InfoText
          title1={'Alta producción'}
          IconColor={COLORPRODUCCTION.altaProduccion}
        />
        <InfoText
          title1={'Baja producción'}
          IconColor={COLORPRODUCCTION.bajaProduccion}
        />
        <InfoText title1={' Reproductor '} IconColor={COLORPRODUCCTION.toro} />

        <InfoText
          title1={'Media producción'}
          IconColor={COLORPRODUCCTION.mediaProduccion}
        />
        <InfoText
          title1={' Novilla no lactante'}
          IconColor={COLORPRODUCCTION.noLactante}
        />
        <InfoText title1={' Descarte '} IconColor={COLORPRODUCCTION.descarte} />
      </View>
    </View>
  );
};
