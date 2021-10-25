import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FillButton} from '../../components/Buttoms/FillButton';
import {QRReaderButtom} from '../../components/Buttoms/QRReaderButtom';
import {MemoizedCard} from '../../components/CowCardInfo/CowCardInfo';
import {InfoStaticCard} from '../../components/InfoStaticCard/InfoStaticCard';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';
import {vacas} from '../../VaquitasPrueba/vacas';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {OneFieldModal} from '../../components/Modals/OneFieldModal';
import {useIndividualRecords} from './state/useIndividualRecords';
import {ICow} from '../../interfaces/CowInterface';
import {ActivityIndicator} from 'react-native-paper';

interface IIndividualRecordsProps extends DrawerScreenProps<any, any> {}

export interface IMemoCardProps {
  cows: ICow[];
}

export const IndividualRecords = ({navigation}: IIndividualRecordsProps) => {
  console.log('OPTIMIZATION: IndividualRecords render');

  const {
    precioCarne,
    precioLeche,
    cowList,
    isLoading,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    guardarPrecioLeche,
    setOpenCloseModalLeche,
    printState,
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
                    setOpenCloseModalCarne(true);
                  }}
                />
              </View>
              <FillButton
                title="Precio LT leche"
                onPress={() => {
                  setOpenCloseModalLeche(true);
                }}
              />
            </View>
            <TouchableOpacity onPress={printState}>
              <Text>imprimir estado</Text>
            </TouchableOpacity>
          </View>
          {/* rigth part */}
          <View style={styles.IndividualRecordsLeftContainer}>
            <SafeAreaView style={{flex: 1}}>
              {isLoading ? (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator
                    animating={true}
                    size={'large'}
                    color={'#32AC96'}
                  />
                </View>
              ) : (
                <MemoizedCardList cows={cowList} />
              )}
            </SafeAreaView>
          </View>
        </View>
      </View>
      <OneFieldModal
        title="Ingrese precio kg carne"
        openCloseModal={openCloseModalCarne}
        setOpenCloseModal={setOpenCloseModalCarne}
        closeModal={guardarPrecioCarne}
        initialPrice={precioCarne}
      />
      <OneFieldModal
        title="Ingrese precio kg leche"
        openCloseModal={openCloseModalLeche}
        setOpenCloseModal={setOpenCloseModalLeche}
        closeModal={guardarPrecioLeche}
        initialPrice={precioLeche}
      />
    </View>
  );
};

//Memoized Component
const CardList = (props: IMemoCardProps) => {
  return (
    <FlatList
      numColumns={2}
      data={props.cows}
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
