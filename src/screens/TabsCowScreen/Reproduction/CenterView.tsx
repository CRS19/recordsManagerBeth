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
  RecordReproductionType,
  RegistroPalp,
} from '../../../interfaces/ReproductionRecord';
import {useCenterView} from './states/useCenterView';
import {isNil, get} from 'lodash';
import {Palpation} from '../../../components/Palpation/Palpation';
import {ReproRecordView} from '../../../components/ReproductionRecordView/ReproRecordView';
import {SaveReproductionRecordButtom} from '../../../components/Buttoms/SaveReproductionRecordButtom';

export interface CenterViewReproductionProps {
  cow: ICow;
  record: IReproductionRecord;
  isLoading: boolean;
  currentRecord: Record;
  selectedRecord: Record | undefined;
  recordNumber: number;
  openCloseIaModal: (isOpen: boolean) => void;
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const CenterView = ({
  cow,
  record,
  isLoading,
  currentRecord,
  selectedRecord,
  openCloseIaModal,
  recordNumber,
  setIsOpenPalpationTypeModal,
  setIsLoading,
}: CenterViewReproductionProps) => {
  const {controlGinecologico, controlServicio, controlMonta} = useCenterView({
    openCloseIaModal,
    currentRecordSinType: currentRecord,
    record,
    selectedRecord,
    setIsLoading,
  });

  const labelChipProps = {
    name: cow.nombre,
    areteNumber: cow.numeroDeArete,
  };

  const palpationProps = {
    setIsOpenPalpationTypeModal,
    recordsList: currentRecord,
    isInsertComponent: true,
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
      {isNil(selectedRecord) && !isNil(currentRecord) && (
        <View>
          {currentRecord.recordType !== RecordReproductionType.CURRENT &&
            !isNil(currentRecord) && (
              <View>
                <SaveReproductionRecordButtom />
                <ReproRecordView recordNumber={0} record={currentRecord} />
              </View>
            )}
          <Palpation {...palpationProps} />
        </View>
      )}
      <Text>... construyendo parte del centro</Text>

      {!isNil(selectedRecord) && (
        <ReproRecordView recordNumber={recordNumber} record={selectedRecord} />
      )}
      {isLoading && (
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
      )}
    </View>
  );
};
