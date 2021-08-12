import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {FillButton} from '../../components/Buttoms/FillButton';
import {QRReaderButtom} from '../../components/Buttoms/QRReaderButtom';
import {
  CowCardInfo,
  MemoizedCard,
} from '../../components/CowCardInfo/CowCardInfo';
import {InfoStaticCard} from '../../components/InfoStaticCard/InfoStaticCard';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';
import {vacas} from '../../VaquitasPrueba/vacas';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {OneFieldModal} from '../../components/Modals/OneFieldModal';
import {useIndividualRecords} from './state/useIndividualRecords';
import {CowCardSkeleton} from '../../components/Skeletons/CowCardSkeleton';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface IIndividualRecordsProps extends DrawerScreenProps<any, any> {}

export const IndividualRecords = ({navigation}: IIndividualRecordsProps) => {
  console.log('OPTIMIZATION: IndividualRecords render');

  const {
    precioCarne,
    precioLeche,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    guardarPrecioLeche,
    setOpenCloseModalLeche,
  } = useIndividualRecords();

  console.log('DEBUG: precio carne: ', precioCarne);
  console.log('DEBUG: precio leche: ', precioLeche);

  return (
    <View>
      <TopBar
        title={'Datos individuales'}
        findIcon={true}
        navigation={navigation}
        backIcon={true}
      />
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
                  onPress={() => {
                    console.log('precio carne');
                    setOpenCloseModalCarne(true);
                  }}
                />
              </View>
              <FillButton
                title="Precio LT leche"
                onPress={() => {
                  console.log('precio leche');
                  setOpenCloseModalLeche(true);
                }}
              />
            </View>
          </View>
          <View style={styles.IndividualRecordsLeftContainer}>
            <SafeAreaView style={{flex: 1}}>
              <MemoizedCardList />
            </SafeAreaView>
          </View>
        </View>
      </View>
      <OneFieldModal
        title="Ingrese precio kg carne"
        openCloseModal={openCloseModalCarne}
        setOpenCloseModal={setOpenCloseModalCarne}
        closeModal={guardarPrecioCarne}
      />
      <OneFieldModal
        title="Ingrese precio kg leche"
        openCloseModal={openCloseModalLeche}
        setOpenCloseModal={setOpenCloseModalLeche}
        closeModal={guardarPrecioLeche}
      />
    </View>
  );
};

//Memoized Component
const CardList = () => {
  return (
    <FlatList
      numColumns={2}
      data={vacas}
      keyExtractor={(item, iterator) => {
        return item.idVaca.concat(String(iterator));
      }}
      renderItem={vaca => (
        <MemoizedCard
          default={vaca.item.idVaca === '007xD' ? true : false}
          cow={vaca.item}
        />
      )}
      ListFooterComponent={<View style={{height: 10}}></View>}
      ListFooterComponentStyle={{height: 100}}
    />
  );
};

const MemoizedCardList = React.memo(CardList);

export const MemoizedIndividualRecords = React.memo(IndividualRecords);
