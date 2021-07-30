import React from 'react';
import {Text, View, ViewComponent} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface ICowCardFooterInfo {
  isDefault?: boolean;
  title?: string;
  data?: string;
  color?: string;
}

export const CowCardFooterInfo = ({
  isDefault = false,
  title = '?',
  data = '?',
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
  }

  return (
    <View style={styles.CowCardFooterInfoContainer}>
      <View style={{...styles.CowCardFooterInfoIcon, backgroundColor: 'red'}}>
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
};
