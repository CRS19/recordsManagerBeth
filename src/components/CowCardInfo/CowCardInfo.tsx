import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EstadoReproductivoIcon} from '../../assets/EstadoReproductivoIcon';
import {NewCow} from '../../assets/NewCow';
import {
  estadoProductivo,
  estadoReproductivo,
  ICow,
} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {CowCardFooterInfo} from './CowCardFooterInfo';

export const CowCardInfo = () => {
  return (
    <TouchableOpacity style={{borderRadius: 10}} activeOpacity={0.8}>
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
          <CowCardFooterInfo isDefault={true} title="Peso" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
