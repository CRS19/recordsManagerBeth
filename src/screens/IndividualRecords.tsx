import React from 'react';
import {View, ScrollView, FlatList, SafeAreaView, Text} from 'react-native';
import {FillButton} from '../components/Buttoms/FillButton';
import {QRReaderButtom} from '../components/Buttoms/QRReaderButtom';
import {CowCardInfo} from '../components/CowCardInfo/CowCardInfo';
import {InfoStaticCard} from '../components/InfoStaticCard/InfoStaticCard';
import {ICow} from '../interfaces/CowInterface';
import {styles} from '../theme/GlobalStyles';
import {vacas} from '../VaquitasPrueba/vacas';

export const IndividualRecords = () => {
  console.log('OPTIMIZATION: IndividualRecords render');
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.IndividualRecordsContainer}>
        <View style={styles.IndividualRecordsRigthContainer}>
          <View style={{width: 449, height: 262}}>
            <QRReaderButtom />
          </View>
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
        <View style={styles.IndividualRecordsLeftContainer}>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              numColumns={2}
              data={vacas}
              keyExtractor={(item, iterator) =>
                item.idVaca.concat(String(iterator))
              }
              renderItem={vaca => (
                <CowCardInfo
                  default={vaca.item.idVaca === '007xD' ? true : false}
                  cow={vaca.item}
                />
              )}
              ListFooterComponent={<View style={{height: 10}}></View>}
              ListFooterComponentStyle={{height: 50}}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export const MemoizedIndividualRecords = React.memo(IndividualRecords);
