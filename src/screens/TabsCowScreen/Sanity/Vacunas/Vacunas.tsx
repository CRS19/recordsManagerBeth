import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {styles} from '../../../../theme/GlobalStyles';
import {Calendar} from 'react-native-calendars';
import {useVacunas} from './state/useVacunas';
import {LabelIconChip} from '../../../../components/LabelIconChip/LabelIconChip';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {VacunaInputCard} from '../../../../components/InputCard/VacunaInputCard';
import DatePicker from 'react-native-date-picker';
import {setPreviusValue} from '../../../../constants/SanityRecords';
import {IVacunaFormKeys} from '../../../../interfaces/SanityRecords';

export const Vacunas = () => {
  const [markedD, setMarkedD] = useState({});
  const {
    labelChipProps,
    vacunaInputCardProps,
    openVacunaDatePicker,
    setOpenVacunaDatePicker,
  } = useVacunas();

  return (
    <View>
      <TopBar backIcon={true} title="Vacunas" />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <Calendar
              markingType={'multi-dot'}
              markedDates={markedD}
              onDayPress={day => {
                const {dateString} = day;
                setMarkedD({
                  [dateString]: {
                    marked: true,
                    selectedColor: 'orange',
                    dots: [{key: 'vacation', color: 'orange'}],
                  },
                });
              }}
              enableSwipeMonths={true}
            />
          </View>
          <ScrollView>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
                flex: 1,
                width: '100%',
                flexDirection: 'column',
                paddingLeft: 50,
              }}>
              <LabelIconChip {...labelChipProps} />
              <GeneralTitle title="VACUNAS" />
              <VacunaInputCard {...vacunaInputCardProps} />
            </View>
            <View style={{height: 200}} />
          </ScrollView>
        </View>
      </View>

      {openVacunaDatePicker && (
        <DatePicker
          modal
          title={'SELECCIONE FECHA DE NACIMIENTO'}
          date={new Date()}
          open={true}
          mode={'date'}
          locale="es"
          onConfirm={date => {
            setOpenVacunaDatePicker(false);
            vacunaInputCardProps.setVacunaForm(prevVal =>
              setPreviusValue(
                prevVal,
                date.getTime(),
                IVacunaFormKeys.CREATED,
                true,
              ),
            );
          }}
          onCancel={() => setOpenVacunaDatePicker(false)}
        />
      )}
    </View>
  );
};
