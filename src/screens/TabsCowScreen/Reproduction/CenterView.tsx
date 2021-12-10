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
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {ReproductionRecordCard} from '../../../components/ReproductionComponents/ReproductionRecordCard';
import {FillButton} from '../../../components/Buttoms/FillButton';

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
  setIsOpenTipoPartoModal: Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMontaMontaModal: Dispatch<React.SetStateAction<boolean>>;
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
  setIsOpenTipoPartoModal,
  setIsOpenMontaMontaModal,
  setIsLoading,
}: CenterViewReproductionProps) => {
  const {controlGinecologico, controlServicio, controlMonta, onSaveActions} =
    useCenterView({
      openCloseIaModal,
      currentRecordSinType: currentRecord,
      record,
      selectedRecord,
      setIsLoading,
      setIsOpenMontaMontaModal,
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
        <PesoControl
          record={record}
          currentPeso={get(
            record.historicoPeso![record.historicoPeso!.length - 1],
            'peso',
            0,
          )}
        />
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
          {currentRecord.montaType !== '' && (
            <View style={{alignItems: 'center', marginTop: 10}}>
              <GeneralTitle title={'Registro'} />
              <View style={{flexDirection: 'row'}}>
                <ReproductionRecordCard record={currentRecord} />
                {283 - currentRecord.gestationDays < 15 && (
                  <View style={{marginLeft: 15, marginTop: 15}}>
                    <FillButton
                      title="parto"
                      onPress={() => setIsOpenTipoPartoModal(true)}
                      color={'#DF2929'}
                      width={102}
                      height={44}
                    />
                  </View>
                )}
              </View>
            </View>
          )}
          {currentRecord.montaType === '' && (
            <SaveReproductionRecordButtom {...onSaveActions} />
          )}
          <Palpation {...palpationProps} />
        </View>
      )}
      {/* Apartado para visualizar el registro seleccionado y previamente guardado */}
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
