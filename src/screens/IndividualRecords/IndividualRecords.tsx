import React from 'react';
import {View, FlatList, SafeAreaView, Text} from 'react-native';
import {FillButton} from '../../components/Buttoms/FillButton';
import {MemoizedCard} from '../../components/CowCardInfo/CowCardInfo';
import {InfoStaticCard} from '../../components/InfoStaticCard/InfoStaticCard';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';
import {emptyCow, vacas} from '../../VaquitasPrueba/vacas';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {OneFieldModal} from '../../components/Modals/OneFieldModal';
import {useIndividualRecords} from './state/useIndividualRecords';
import {ICow} from '../../interfaces/CowInterface';
import {ActivityIndicator} from 'react-native-paper';
import {isEmpty} from 'lodash';
import {EmptyCowListBtn} from '../../components/EmptyCowListBtn/EmptyCowListBtn';
interface IIndividualRecordsProps extends DrawerScreenProps<any, any> {}

export interface IMemoCardProps {
  cows: ICow[];
  loadCows: () => void;
  endList: boolean;
  refresh: boolean;
  onRefresh: () => void;
}

export const IndividualRecords = ({navigation}: IIndividualRecordsProps) => {
  const {
    precioCarne,
    precioLeche,
    cowList,
    isLoading,
    refresh,
    loadCows,
    endList,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    setOpenCloseModalLeche,
    guardarPrecioLeche,
    onRefresh,
  } = useIndividualRecords();

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
          {/* rigth part */}
          <View style={styles.IndividualRecordsLeftContainer}>
            <View
              style={{
                marginVertical: 21,
                marginHorizontal: 20,
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 13}}>
                <FillButton
                  title="Precio KG Carne"
                  onPress={() => {
                    setOpenCloseModalCarne(true);
                  }}
                />
                <FillButton
                  title="Precio LT leche"
                  onPress={() => {
                    setOpenCloseModalLeche(true);
                  }}
                />
              </View>
            </View>
            <SafeAreaView style={{flex: 1}}>
              {isLoading || refresh ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator
                    animating={true}
                    size={'large'}
                    color={'#32AC96'}
                  />
                  <Text>Cargando...</Text>
                </View>
              ) : !isEmpty(cowList) && !refresh ? (
                <MemoizedCardList
                  cows={cowList}
                  loadCows={loadCows}
                  endList={endList}
                  refresh={refresh}
                  onRefresh={onRefresh}
                />
              ) : (
                <EmptyCowListBtn cow={emptyCow} />
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
          default={vaca.item.idVaca === '007-xD' ? true : false}
          cow={vaca.item}
        />
      )}
      ListFooterComponent={
        props.endList ? <View /> : <ActivityIndicator color={'#32AC96'} />
      }
      ListFooterComponentStyle={{height: 200}}
      onEndReached={props.loadCows}
      onRefresh={props.onRefresh}
      refreshing={props.refresh}
      onEndReachedThreshold={0.4}
    />
  );
};

const MemoizedCardList = React.memo(CardList);

export const MemoizedIndividualRecords = React.memo(IndividualRecords);
