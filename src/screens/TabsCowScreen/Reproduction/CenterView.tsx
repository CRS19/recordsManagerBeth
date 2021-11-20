import React, {Dispatch} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  _ScrollView,
} from 'react-native';
import {LabelIconChip} from '../../../components/LabelIconChip/LabelIconChip';
import {ControlGinecologico} from '../../../components/ReproductionComponents/ControlGinecologico';
import {GeneralControl} from '../../../components/ReproductionComponents/GeneralControl';
import {PesoControl} from '../../../components/ReproductionComponents/PesoControl';
import {ICow} from '../../../interfaces/CowInterface';
import {
  IReproductionRecord,
  Record,
  RegistroPalp,
} from '../../../interfaces/ReproductionRecord';
import {useCenterView} from './states/useCenterView';
import {isNil} from 'lodash';
import {Palpation} from '../../../components/Palpation/Palpation';

export interface CenterViewReproductionProps {
  cow: ICow;
  record: IReproductionRecord;
  isLoading: boolean;
  recordsList: Record[];
  currentRecord: Record | undefined;
  openCloseIaModal: (isOpen: boolean) => void;
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const CenterView = ({
  cow,
  record,
  isLoading,
  recordsList,
  currentRecord,
  openCloseIaModal,
  setIsOpenPalpationTypeModal,
  setIsLoading,
}: CenterViewReproductionProps) => {
  const {controlGinecologico, controlServicio, controlMonta} = useCenterView({
    openCloseIaModal,
    currentRecordSinType: recordsList[0],
    record,
    currentRecord,
    setIsLoading,
  });

  const labelChipProps = {
    name: cow.nombre,
    areteNumber: cow.numeroDeArete,
  };

  const palpationProps = {
    setIsOpenPalpationTypeModal,
  };

  return (
    <View>
      <LabelIconChip {...labelChipProps} />
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}></View>
        <ControlGinecologico {...controlGinecologico} />
        {/**  colocar las funciones apra cambiar el peso **/}
        <PesoControl />
      </View>
      {/**  Elementos renderizados dependiendo de los botones ginecologicos **/}
      <View style={{alignItems: 'flex-start'}}>
        {controlGinecologico.isCeloBtnActive && (
          <GeneralControl {...controlServicio} />
        )}
        {controlServicio.isClikedBtn1 && <GeneralControl {...controlMonta} />}
      </View>
      {controlGinecologico.isChequeoBtnActive && isNil(currentRecord) && (
        <Palpation {...palpationProps} />
      )}
      <Text>... construyendo parte del centro</Text>
      {isNil(currentRecord) ? null : <Text>{currentRecord.idReproductor}</Text>}
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            animating={true}
            size={'large'}
            color={'#32AC96'}
          />
          <Text>Cargando...</Text>
        </View>
      ) : null}
      {controlGinecologico.isChequeoBtnActive && !isNil(recordsList[0]) && (
        <View>
          <Text>{recordsList[0].recordType}</Text>
          <Text>{JSON.stringify(recordsList[0].registrosPalp, null, 3)}</Text>
        </View>
      )}
    </View>
  );
};
