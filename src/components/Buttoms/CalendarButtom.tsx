import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {MONTHS} from '../../utils/time-utils';
import {useMonthYearButtom} from './state/useMonthYearButtom';

export const CalendarButtom = () => {
  const {monthNumber, setMonthNmber, setYear, year, yearArray} =
    useMonthYearButtom({componentName: CalendarButtom.name});

  return (
    <View
      style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 10}}>
      <View style={styles.CalendarButtomLabel}>
        <Text style={{fontSize: 18}}>{MONTHS[monthNumber]}</Text>
        <View
          style={{
            right: -10,
            width: 50,
            borderColor: 'transparent',
          }}>
          <Picker
            selectedValue={MONTHS[monthNumber]}
            onValueChange={(itemValue, itemIndex) => {
              console.log(itemValue);
              setMonthNmber(itemIndex);
            }}>
            {MONTHS.map((month, index: number) => (
              <Picker.Item
                key={`${month}-${index}`}
                label={`${month}`}
                value={`${month}`}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.CalendarButtomLabel}>
        <Text style={{fontSize: 18}}>{year}</Text>
        <View
          style={{
            right: -10,
            width: 50,
            borderColor: 'transparent',
          }}>
          <Picker
            selectedValue={yearArray[10]}
            onValueChange={(itemValue, itemIndex) => {
              console.log(itemValue);
              setYear(Number(itemValue));
            }}>
            {yearArray.map((year, index: number) => (
              <Picker.Item
                key={`${year}-${index}`}
                label={`${year}`}
                value={`${year}`}
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};
