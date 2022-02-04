import React from 'react';
import {Text, View, ViewComponent} from 'react-native';
import {ReproductionLabel} from '../../constants/ProductionLabel';
import {styles} from '../../theme/GlobalStyles';
import {hasIn} from 'lodash';

interface ICowCardFooterInfo {
  isDefault?: boolean;
  title?: string;
  data?: string | number;
  color?: string;
  fontSize?: number;
}

export const CowCardFooterInfo = ({
  isDefault = false,
  title = '?',
  data = '?',
  color = '',
  fontSize = 16,
}: ICowCardFooterInfo) => {
  if (isDefault) {
    return (
      <View style={styles.CowCardFooterInfoContainer}>
        <View style={styles.CowCardFooterInfoIcon}>
          <View style={styles.InnerIcon}>
            <View
              style={{
                backgroundColor: '#6FCF97',
                height: 10,
                width: 10,
                borderRadius: 100,
              }}></View>
          </View>
        </View>
        <View style={{marginLeft: 8}}>
          <View style={{marginLeft: 3}}>
            <Text style={styles.CowCardTitle}>{title}</Text>
          </View>
          <View>
            <Text style={styles.CowCardSubTitle}>{data}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.CowCardFooterInfoContainer}>
        <View style={{...styles.CowCardFooterInfoIcon, backgroundColor: color}}>
          <View style={styles.InnerIcon}>
            <View
              style={{
                backgroundColor: color,
                height: 10,
                width: 10,
                borderRadius: 100,
              }}></View>
          </View>
        </View>
        <View style={{marginLeft: 8}}>
          <View style={{marginLeft: 3}}>
            <Text style={[styles.CowCardTitle, {color: color}]}>{title}</Text>
          </View>
          <View>
            <Text style={{...styles.CowCardSubTitle, fontSize: fontSize}}>
              {hasIn(ReproductionLabel, data)
                ? //@ts-ignore
                  ReproductionLabel?.[data!]
                : data}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};
