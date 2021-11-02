import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {RegisterList} from '../../components/RegisterLIst/RegisterList';
import {TopBar} from '../../components/TopBar';
import {styles} from '../../theme/GlobalStyles';

export const Reproduction = () => {
  const [markedD, setMarkedD] = useState({});

  useEffect(() => {}, [markedD]);

  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro Reproducción'}
        findIcon={false}
        backIcon={false}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
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
            <View>
              <RegisterList title={'Registro de Chequeo General'} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
