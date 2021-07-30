import React from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {FillButton} from '../components/Buttoms/FillButton';
import {CowCardInfo} from '../components/CowCardInfo/CowCardInfo';
import {InfoStaticCard} from '../components/InfoStaticCard/InfoStaticCard';
import {CowCardSkeleton} from '../components/Skeletons/CowCardSkeleton';
import {styles} from '../theme/GlobalStyles';

export const IndividualRecords = () => {
  return (
    <View style={styles.IndividualRecordsContainer}>
      <View style={styles.IndividualRecordsRigthContainer}>
        <View style={{width: 449, height: 262}}></View>
        <View style={{marginHorizontal: 19}}>
          <InfoStaticCard />
        </View>
        <View
          style={{
            marginVertical: 21,
            marginHorizontal: 42,
            flexDirection: 'row',
          }}>
          <View style={{marginRight: 13}}>
            <FillButton
              title="Precio KG Carne"
              onPress={() => console.log('precio carne')}
            />
          </View>

          <FillButton
            title="Precio LT leche"
            onPress={() => console.log('precio leche')}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.IndividualRecordsLeftContainer}>
          <CowCardInfo />
          {/**<CowCardSkeleton />**/}
          {/**<CowCardSkeleton />**/}
          {/**<CowCardSkeleton />**/}
        </View>
      </ScrollView>
    </View>
  );
};
