import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {DewormingInputCard} from '../../../../components/InputCard/DewormingInputCard';
import {LabelIconChip} from '../../../../components/LabelIconChip/LabelIconChip';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../components/TopBar';
import {styles} from '../../../../theme/GlobalStyles';
import DatePicker from 'react-native-date-picker';
import {useDeworming} from './state/useDeworming';
import {setDewormingFormValue} from '../../../../constants/SanityRecords';
import {IDewormingFormKeys} from '../../../../interfaces/SanityRecords';

export const Desparacintaciones = () => {
  const [markedD, setMarkedD] = useState({});

  const {labelChipProps, datePicker, dewormingInputCardProps} = useDeworming();

  return (
    <View>
      <TopBar backIcon={true} title="Desparacitaciones" />
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
              <GeneralTitle title="DESPARACITACIÓN" />
              <DewormingInputCard {...dewormingInputCardProps} />
            </View>
            <View style={{height: 200}} />
          </ScrollView>
        </View>
      </View>

      {datePicker.openDewormingDatePicker && (
        <DatePicker
          modal
          title={'SELECCIONE FECHA DE NACIMIENTO'}
          date={new Date()}
          open={true}
          mode={'date'}
          locale="es"
          onConfirm={date => {
            datePicker.setOpenDewormingDatePicker(false);
            dewormingInputCardProps.setDewormingForm(prevVal =>
              setDewormingFormValue(
                prevVal,
                date.getTime(),
                IDewormingFormKeys.CREATED,
                true,
              ),
            );
          }}
          onCancel={() => datePicker.setOpenDewormingDatePicker(false)}
        />
      )}
    </View>
  );
};
