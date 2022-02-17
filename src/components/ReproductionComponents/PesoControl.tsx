import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IReproductionRecord} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {InputBlock} from '../CustomInput/InputBlock';
import moment from 'moment';
import {cloneDeep, get, set} from 'lodash';
import {
  getMainRecordCowById,
  updateReproductionRecord,
} from '../../store/actionCreators';
import {LoadingModal} from '../Modals/LoadingModal';
import {IAppState} from '../../store/reducer';

export interface IPesoControlProps {
  record: IReproductionRecord;
  currentPeso: number;
}

export const PesoControl = ({record, currentPeso}: IPesoControlProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IAppState) => state.isLoading!);
  const [peso, setPeso] = useState<string>(`${currentPeso}`);

  const updatePeso = () => {
    const recordToUpdate = cloneDeep(record);

    set(recordToUpdate, 'historicoPeso', get(record, 'historicoPeso', []));

    recordToUpdate.historicoPeso!.push({
      peso: Number(peso),
      timestamp: moment.now(),
    });

    dispatch(updateReproductionRecord(recordToUpdate));
  };

  useEffect(() => {
    dispatch(getMainRecordCowById(record.idVaca));
  }, [record.historicalDataToPlot]);

  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.RegisterListTitle}>PESO k</Text>
        <Text
          style={{
            ...styles.RegisterListTitle,
            textTransform: 'lowercase',
          }}>
          g
        </Text>
      </View>
      <View style={{...styles.RegisterDivider, width: 205}} />
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{marginHorizontal: 3.5}}>
          <InputBlock initialValue={peso} setPeso={setPeso} />
        </View>
        <View style={{marginHorizontal: 3.5, justifyContent: 'center'}}>
          <BorderButtom title="Modificar" onPress={updatePeso} />
        </View>
      </View>
      <LoadingModal title="Actualizando peso..." openCloseModal={isLoading} />
    </View>
  );
};
