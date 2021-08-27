import {get} from 'lodash';
import React, {useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NewCow} from '../../assets/NewCow';
import {COLORPRODUCCTION} from '../../constants/colorEnum';
import {FadeInImage} from '../../custom/FadeInImage';
import {estadoProductivoType, ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {CowCardFooterInfo} from './CowCardFooterInfo';
import {useCowCardInfo} from './state/useCowCardInfo';

interface ICowCardInfo {
  default?: boolean;
  cow: ICow;
}

export const CowCardInfo = (props: ICowCardInfo) => {
  console.log('OPTIMIZATION: CowCard rendered');
  const isDefaultCard = get(props, 'default', false);
  const {openCowNavigation, openInsertNewCow} = useCowCardInfo(props.cow);

  const getProductionColor = (
    estadoProductivo: estadoProductivoType,
  ): string => {
    switch (estadoProductivo) {
      case 'Vaca con alta producción':
        return COLORPRODUCCTION.altaProduccion;
        break;
      case 'Vaca con media producción':
        return COLORPRODUCCTION.mediaProduccion;
        break;
      case 'Vaca con baja producción':
        return COLORPRODUCCTION.bajaProduccion;
        break;
      case 'Reproductor':
        return COLORPRODUCCTION.toro;
        break;
      case 'Novilla no lactante':
        return COLORPRODUCCTION.noLactante;
        break;
      case 'Descarte':
        return COLORPRODUCCTION.descarte;
        break;
      default:
        return '#03DAC5';
        break;
    }
  };

  if (isDefaultCard) {
    return (
      <TouchableOpacity
        style={styles.touchableCowCardContainer}
        onPress={openInsertNewCow}
        activeOpacity={0.8}>
        <View style={styles.CowCardContainer}>
          <View style={styles.CowCardHeader}>
            <View
              style={{
                ...styles.InfoIcon,
                margin: 15,
                backgroundColor: '#03DAC5',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  top: -1,
                  left: -1,
                }}>
                +
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.CowCardHeaderTitle}>
                Agrear un nuevo animal
              </Text>
              <Text style={styles.CowCardHeaderName}>Nombre</Text>
            </View>
          </View>
          <View>
            <NewCow />
          </View>
          <View style={styles.CowCardFoter}>
            <CowCardFooterInfo isDefault={true} title="categoria" />
            <CowCardFooterInfo isDefault={true} title="Estado" />
            <CowCardFooterInfo isDefault={true} title="Edad" />
            <CowCardFooterInfo isDefault={true} title="Peso (Kg)" />
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    const color = getProductionColor(props.cow?.estadoProductivo!);
    return (
      <TouchableOpacity
        style={styles.touchableCowCardContainer}
        onPress={openCowNavigation}
        activeOpacity={0.8}>
        <View style={styles.CowCardContainer}>
          <View style={styles.CowCardHeader}>
            <View
              style={{
                ...styles.InfoIcon,
                margin: 15,
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
              }}></View>
            <View style={{marginTop: 10}}>
              <Text style={styles.CowCardHeaderTitle}>
                {`Vaca ${props.cow?.numeroDeArete}`}
              </Text>
              <Text style={styles.CowCardHeaderName}>{props.cow?.nombre}</Text>
            </View>
          </View>
          <View style={{width: 344, height: 194}}>
            <FadeInImage
              uri={props.cow.imagenPath}
              style={{
                width: 344,
                height: 194,
              }}
            />
          </View>
          <View style={styles.CowCardFoter}>
            <CowCardFooterInfo
              isDefault={false}
              title="categoria"
              color={color}
              data={props.cow?.categoria}
            />
            <CowCardFooterInfo
              isDefault={false}
              title="Estado reprod."
              color={color}
              data={props.cow?.estadoReproductivo}
            />
            <CowCardFooterInfo
              isDefault={false}
              title="Edad"
              color={color}
              data={props.cow?.fechaDeNacimiento}
            />
            <CowCardFooterInfo
              isDefault={false}
              title="Peso (Kg)"
              color={color}
              data={props.cow?.pesoActual}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export const MemoizedCard = React.memo(CowCardInfo);
