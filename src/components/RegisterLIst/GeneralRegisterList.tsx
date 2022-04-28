import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ArrowList} from '../../assets/arrowList';
import {IDailyMilkRecord} from '../../interfaces/DailyMilkRecord';
import {styles} from '../../theme/GlobalStyles';
import {GeneralRegisterBtn} from '../Buttoms/GeneralRegisterBtn';

export interface GeneralRegisterListProps {
  title: string;
  prodRecords: IDailyMilkRecord[];
}

export const GeneralRegisterList = ({
  title,
  prodRecords,
}: GeneralRegisterListProps) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.RegisterListTitle}>{title}</Text>
      <View style={styles.RegisterDivider} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowList rigth={true} />
        <View style={{marginHorizontal: 15, width: '80%', height: 'auto'}}>
          <FlatList
            horizontal={true}
            data={prodRecords}
            keyExtractor={(item, iterator) => {
              return String(item).concat(iterator.toString());
            }}
            renderItem={({item, index}) => (
              <GeneralRegisterBtn record={item} listNumber={index} />
            )}
          />
        </View>
        <ArrowList rigth={false} />
      </View>
    </View>
  );
};
