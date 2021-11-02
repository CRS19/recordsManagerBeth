import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {RegisterListButtom} from '../Buttoms/RegisterListButtom';

export interface IRegisterListProps {
  title: string;
}

export const RegisterList = ({title}: IRegisterListProps) => {
  const registroGeneral = ['1', '2', '3', '4', '5'];

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <Text style={styles.RegisterListTitle}>{title}</Text>
      <View style={styles.RegisterDivider} />
      <View style={{width: 202, height: 'auto'}}>
        <FlatList
          horizontal={true}
          data={registroGeneral}
          keyExtractor={(item, iterator) => {
            return item.concat(iterator.toString());
          }}
          renderItem={registro => (
            <RegisterListButtom listNumber={registro.item} />
          )}
        />
      </View>
    </View>
  );
};
