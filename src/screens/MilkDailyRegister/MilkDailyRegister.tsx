import React from 'react';
import {Alert, Text, View, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ActivityIndicator} from 'react-native-paper';
import {BorderButtom} from '../../components/Buttoms/BorderButtom';
import {ErrorMarginBotton} from '../../components/Buttoms/ErrorMarginBotton';
import {UpdateDailyMilkLab} from '../../components/Modals/UpdateDailyMilkLab';
import {DailyTable} from '../../components/Tables/DailyMilkRegisterTable/DailyTable';
import {GeneralTitle} from '../../components/Titles/GeneralTitle';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';
import {getMaxDate} from '../../utils/time-utils';
import {useMilkDailyRegister} from './state/useMilkDailyRegister';
import {get} from 'lodash';

export const MilkDailyRegister = () => {
  const {
    MarginButtomProps,
    DailyTableProps,
    isLoading,
    guardarInfo,
    markedD,
    setMarkedD,
    modalLabActions,
  } = useMilkDailyRegister();

  return (
    <View>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro de Producción'}
        findIcon={false}
        backIcon={true}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
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
                {!DailyTableProps.isDateView && (
                  <BorderButtom
                    onPress={() => {
                      guardarInfo();
                    }}
                    title="Guardar"
                  />
                )}
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
      <UpdateDailyMilkLab
        title="Laboratoreo de Lacteos y Terneros"
        openCloseModal={modalLabActions.openLabModal}
        setOpenCloseModal={modalLabActions.setOpenCloseModalLab}
        totalVacas={
          get(DailyTableProps, 'productorasList.productoras', []).length
        }
      />
    </View>
  );
};
