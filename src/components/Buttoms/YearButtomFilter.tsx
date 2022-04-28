import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

export interface IYearButtomFilterProps {
  year: number;
  yearArray: number[];
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

export const YearButtomFilter = ({
  year,
  yearArray,
  setYear,
}: IYearButtomFilterProps) => {
  return (
    <View style={{alignSelf: 'center'}}>
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
