import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createReproductionRecord,
  getReproductionRecord,
} from '../../store/actionCreators';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {RegisterListButtom} from '../Buttoms/RegisterListButtom';

export interface IRegisterListProps {
  title: string;
}

export const RegisterList = ({title}: IRegisterListProps) => {
  const registroGeneral = ['1', '2', '3', '4', '5'];

  const dispatch = useDispatch();

  const record = useSelector((state: IAppState) => state.reproductionRecord);

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
      <TouchableOpacity
        onPress={() => dispatch(getReproductionRecord({idVaca: 'Dana-52'}))}>
        <Text>Traer registro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log(JSON.stringify(record, null, 3))}>
        <Text>Ver registro del store</Text>
      </TouchableOpacity>
    </View>
  );
};
