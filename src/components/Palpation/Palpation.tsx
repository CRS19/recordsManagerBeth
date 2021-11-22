import React, {Dispatch} from 'react';
import {Text, View} from 'react-native';
import {Record, RegistroPalp} from '../../interfaces/ReproductionRecord';
import {BallButtom} from '../Buttoms/BallButtom';
import {PalpationCard} from '../PalpationCard/PalpationCard';
import {GeneralTitle} from '../Titles/GeneralTitle';
import {isEmpty, get} from 'lodash';

export interface IPalpationProps {
  recordsList: Record;
  setIsOpenPalpationTypeModal?: Dispatch<React.SetStateAction<boolean>>;
  isInsertComponent: boolean;
}

export const Palpation = ({
  setIsOpenPalpationTypeModal,
  recordsList,
  isInsertComponent,
}: IPalpationProps) => {
  return (
    <View style={{alignItems: 'center', marginTop: 15}}>
      <GeneralTitle title={'Registro de palpación'} width={440} />
      <View style={{flexDirection: 'row'}}>
        <View>
          {!isEmpty(get(recordsList, 'registrosPalp', [])) &&
            recordsList.registrosPalp
              .slice()
              .reverse()
              .map((record, index) => (
                <PalpationCard
                  index={index}
                  key={`${record.registroPalpacion}-${index}`}
                  PalpationRecord={record}
                />
              ))}
        </View>
        <View>
          {isInsertComponent && (
            <BallButtom
              onPress={() => setIsOpenPalpationTypeModal!(true)}
              title={'+'}
            />
          )}
        </View>
      </View>
    </View>
  );
};
