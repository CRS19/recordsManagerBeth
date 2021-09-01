// istanbull-file
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export const ProductionScreen = () => {
  const [markedD, setMarkedD] = useState({});

  useEffect(() => {}, [markedD]);

  return (
    <View style={{width: 356}}>
      <Text>Producción screen</Text>
      <Calendar
        markingType={'multi-dot'}
        markedDates={markedD}
        onDayPress={day => {
          const {dateString} = day;
          console.log(dateString);
          console.log(JSON.stringify(markedD, null, 3));
          setMarkedD({
            [dateString]: {
              marked: true,
              selectedColor: 'orange',
              dots: [
                {key: 'vacation', color: 'orange'},
                {key: 'registro', color: 'green'},
                {key: 'registro2', color: 'blue'},
                {key: 'registro3', color: 'red'},
              ],
            },
          });
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};
