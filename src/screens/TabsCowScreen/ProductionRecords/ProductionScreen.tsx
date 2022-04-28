import React from 'react';
import {ScrollView, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {IndividualProductionView} from '../../../components/IndividualProductionView/IndividualProductionView';
import {LabelIconChip} from '../../../components/LabelIconChip/LabelIconChip';
import {LactanciaViewCard} from '../../../components/LactanciaViewCard/LactanciaViewCard';
import {GeneralRegisterList} from '../../../components/RegisterLIst/GeneralRegisterList';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';
import {getMaxDate} from '../../../utils/time-utils';
import {useProductionScreen} from './state/useProductionScreen';

export const ProductionScreen = () => {
  const {cow, prodRecord, markedD, setMarkedD, IndivitualProdProps} =
    useProductionScreen();

  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro de producción'}
        findIcon={false}
        backIcon={false}
      />
      {cow.sexo === 'HEMBRA' && (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.GenericTabContainer}>
            <View
              style={{
                ...styles.LeftGenericTabContainer,
              }}>
              <Calendar
                markedDates={markedD}
                onDayPress={day => {
                  const {dateString} = day;
                  setMarkedD({
                    [dateString]: {
                      selected: true,
                      selectedColor: 'orange',
                      activeOpacity: 0,
                    },
                  });
                }}
                maxDate={getMaxDate()}
                enableSwipeMonths={true}
              />
              <View style={{marginTop: 30}}>
                <GeneralRegisterList
                  title={'Registro de N° de lactancias'}
                  prodRecords={prodRecord}
                />
              </View>
            </View>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
              }}>
              <View>
                <LabelIconChip
                  name={cow.nombre}
                  areteNumber={cow.numeroDeArete}
                />
                <GeneralTitle title="Registro de produccicón individual" />
                <IndividualProductionView {...IndivitualProdProps} />
              </View>
            </View>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
                alignItems: 'center',
              }}>
              <ScrollView>
                <View style={{margin: 10, marginLeft: 50, marginTop: 20}}>
                  <LactanciaViewCard productionRecords={prodRecord} />
                </View>
                <View style={{height: 200}} />
              </ScrollView>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
