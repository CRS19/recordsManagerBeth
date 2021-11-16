import React from 'react';
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
} from '../../../interfaces/ReproductionRecord';
import {useCenterView} from './states/useCenterView';
import {isNil} from 'lodash';

export interface CenterViewReproductionProps {
  cow: ICow;
  record: IReproductionRecord;
  isLoading: boolean;
  currentRecord: Record | undefined;
  openCloseIaModal: (isOpen: boolean) => void;
}

export const CenterView = ({
  cow,
  record,
  isLoading,
  currentRecord,
  openCloseIaModal,
}: CenterViewReproductionProps) => {
  const {controlGinecologico, controlServicio, controlMonta} = useCenterView({
    openCloseIaModal,
  });

  const labelChipProps = {
    name: cow.nombre,
    areteNumber: cow.numeroDeArete,
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
        {controlGinecologico.isCeloBtnActive ? (
          <GeneralControl {...controlServicio} />
        ) : null}
        {controlServicio.isClikedBtn1 ? (
          <GeneralControl {...controlMonta} />
        ) : null}
      </View>
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
    </View>
  );
};
