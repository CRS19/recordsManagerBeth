import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getDailyMilkLabRecordsByMonth} from '../../store/actionCreators';
import {styles} from '../../theme/GlobalStyles';
import {getMonthNumber, getYear, MONTHS} from '../../utils/time-utils';

export const CalendarButtom = () => {
  const dispatch = useDispatch();
  const [monthNumber, setMonthNmber] = useState<number>(getMonthNumber() - 1);
  const [year, setYear] = useState<number>(Number(getYear()));
  let yearArray = [];
  let interval = 10;
  for (let i = 1; i <= 20; i++) {
    yearArray.push(year - interval);
    interval = interval - 1;
  }

  useEffect(() => {
    console.log(
      'DEBUG: llamar endpoint con -> ',

      `${MONTHS[monthNumber]}-${year}`,
    );
    dispatch(getDailyMilkLabRecordsByMonth(`${MONTHS[monthNumber]}-${year}`));
  }, [monthNumber, year]);

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
            selectedValue={yearArray[year]}
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
