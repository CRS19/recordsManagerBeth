import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from '../../theme/GlobalStyles';

export const CowCardSkeleton = () => {
  return (
    <View style={styles.CowCardContainer}>
      <View style={styles.CowCardHeader}>
        <SkeletonPlaceholder>
          <View
            style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
            <View style={{width: 45, height: 45, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 120, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
      <SkeletonPlaceholder>
        <View style={{width: 344, height: 194}}>
          <View style={{width: 344, height: 194}} />
        </View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <View style={{marginLeft: 20, marginTop: 10, marginRight: 10}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
          <View style={{marginLeft: 20, marginTop: 10, marginRight: 10}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
          <View style={{marginLeft: 20, marginTop: 10, marginRight: 10}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
          <View style={{marginLeft: 20, marginTop: 10, marginRight: 10}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};
