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
          title1={'Vaca con '}
          title2={' alta producción'}
          IconColor={COLORPRODUCCTION.altaProduccion}
        />
        <InfoText
          title1={'Vaca con '}
          title2={' baja producción'}
          IconColor={COLORPRODUCCTION.bajaProduccion}
        />
        <InfoText
          title1={' Toro '}
          title2={' '}
          IconColor={COLORPRODUCCTION.toro}
        />

        <InfoText
          title1={'Vaca con '}
          title2={' media producción'}
          IconColor={COLORPRODUCCTION.mediaProduccion}
        />
        <InfoText
          title1={' Novilla no'}
          title2={' lactante'}
          IconColor={COLORPRODUCCTION.noLactante}
        />
        <InfoText
          title1={'Descarte '}
          title2={''}
          IconColor={COLORPRODUCCTION.descarte}
        />
      </View>
    </View>
  );
};
