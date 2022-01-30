// istanbull-file
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LineChart} from 'react-native-chart-kit';
import {IndividualProductionView} from '../../../components/IndividualProductionView/IndividualProductionView';
import {LabelIconChip} from '../../../components/LabelIconChip/LabelIconChip';
import {LactanciaViewCard} from '../../../components/LactanciaViewCard/LactanciaViewCard';
import {GeneralRegisterList} from '../../../components/RegisterLIst/GeneralRegisterList';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';
import {getMaxDate} from '../../../utils/time-utils';
import {ICalendarSelected} from '../../MilkDailyRegister/state/useMilkDailyRegister';
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
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View
            style={{
              ...styles.LeftGenericTabContainer,
              backgroundColor: 'pink',
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
            <GeneralRegisterList
              title={'Registro de N° de lactancias'}
              prodRecords={prodRecord}
            />
          </View>
          <View
            style={{
              ...styles.RigthGenericTabContainer,
              maxWidth: 500,
              backgroundColor: 'red',
            }}>
            <View>
              <LabelIconChip
                name={cow.nombre}
                areteNumber={cow.numeroDeArete}
              />
              <GeneralTitle title="Registro de produccicón individual" />
              <IndividualProductionView {...IndivitualProdProps} />
              <View style={{height: 40}} />
            </View>
          </View>
          <View
            style={{
              ...styles.RigthGenericTabContainer,
              maxWidth: 500,
              backgroundColor: 'pink',
              alignItems: 'center',
            }}>
            <View style={{margin: 10, marginLeft: 50}}>
              <LactanciaViewCard productionRecords={prodRecord} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
