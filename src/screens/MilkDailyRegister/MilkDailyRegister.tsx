import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import {BorderButtom} from '../../components/Buttoms/BorderButtom';
import {ErrorMarginBotton} from '../../components/Buttoms/ErrorMarginBotton';
import {DailyTable} from '../../components/Tables/DailyMilkRegisterTable/DailyTable';
import {GeneralTitle} from '../../components/Titles/GeneralTitle';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';
import {getMaxDate} from '../../utils/time-utils';
import {useMilkDailyRegister} from './state/useMilkDailyRegister';

export const MilkDailyRegister = () => {
  const {
    MarginButtomProps,
    DailyTableProps,
    isLoading,
    guardarInfo,
    markedD,
    setMarkedD,
  } = useMilkDailyRegister();

  return (
    <View>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro de Producción'}
        findIcon={false}
        backIcon={false}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <Calendar
              markedDates={markedD}
              onDayPress={day => {
                const {dateString} = day;
                console.log(dateString);
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
            <View style={{margin: 30}}>
              <ErrorMarginBotton {...MarginButtomProps} />
            </View>
            <View>
              <Text
                onPress={() =>
                  console.log(
                    JSON.stringify(
                      DailyTableProps.productorasList.productoras,
                      null,
                      3,
                    ),
                  )
                }>
                mostrar lista de reproductores
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
              <GeneralTitle title="Registro de producción diaria" />
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <DailyTable {...DailyTableProps} />
              )}
              <View style={{marginTop: 40}}>
                <BorderButtom
                  onPress={() => {
                    console.log('guardar');
                    guardarInfo();
                  }}
                  title="Guardar"
                />
              </View>
              <View style={{height: 400}} />
            </View>
          </ScrollView>
        </View>
      </View>
      {DailyTableProps.productorasList.productoras.length === 0 &&
        isLoading &&
        Alert.alert(
          'Error de servidor',
          'No se pudieron obtener los registros de las vacas productoras, contactese con el administrador',
        )}
    </View>
  );
};
