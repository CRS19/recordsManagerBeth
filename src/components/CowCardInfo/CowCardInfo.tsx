import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NewCow} from '../../assets/NewCow';
import {COLORPRODUCCTION} from '../../constants/colorEnum';
import {FadeInImage} from '../../custom/FadeInImage';
import {estadoProductivoType, ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {CowCardFooterInfo} from './CowCardFooterInfo';
import {useCowCardInfo} from './state/useCowCardInfo';
import {get, defaultTo} from 'lodash';
import {API_BASE_PATH} from '../../env/environment';
import {useGetOld} from '../../utils/useGetOld';

interface ICowCardInfo {
  default?: boolean;
  cow: ICow;
}

export const CowCardInfo = (props: ICowCardInfo) => {
  const isDefaultCard = get(props, 'default', false);
  const {openCowNavigation, openInsertNewCow} = useCowCardInfo(props.cow);
  const {edadAños, edadMesesA} = useGetOld({
    birtdayTiemstamp: get(props.cow, 'fechaDeNacimiento', 0),
  });

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
    const color = getProductionColor(
      get(
        props.cow,
        'estadoProductivo',
        get(props.cow, 'vacaInfo.estadoProductivo', 'Reproductor'),
      ),
    );
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
              uri={`${API_BASE_PATH}/cow/getImage/${
                props.cow.imagenPath[1].split('/')[2]
              }`}
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
              data={props.cow!.estadoReproductivo}
            />
            <CowCardFooterInfo
              isDefault={false}
              title="Edad"
              color={color}
              data={`${edadAños} Años-${edadMesesA} Meses`}
              fontSize={15}
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
