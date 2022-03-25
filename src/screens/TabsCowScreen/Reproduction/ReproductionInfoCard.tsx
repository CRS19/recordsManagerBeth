import React, {useEffect} from 'react';
import {View} from 'react-native';
import {InputTextView} from '../../../components/Views/InputTextView';
import {
  IReproductionRecord,
  RecordReproductionType,
} from '../../../interfaces/ReproductionRecord';
import {isEmpty, get, last, isNil} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '../../../store/reducer';
import {updatePartialMainCowRecord} from '../../../store/actionCreators';
import {estadoProductivoType} from '../../../interfaces/CowInterface';

export interface IReproductionInfoCardProps {
  record: IReproductionRecord;
}

export const getNumeroPartos = (record: IReproductionRecord) => {
  if (!isNil(record)) {
    const partos = record.records.filter(
      el => el.recordType === RecordReproductionType.PARTO,
    );

    return `${partos.length}`;
  } else {
    return '0';
  }
};

export const ReproductionInfoCard = ({record}: IReproductionInfoCardProps) => {
  const dispatch = useDispatch();
  const currentCow = useSelector((state: IAppState) => state.CurrentCow!);

  const getEstadoReproductivo = () => {
    const lastRecord = last(record.records);

    if (!isNil(lastRecord)) {
      if (!isEmpty(lastRecord.registrosPalp)) {
        return record.records[record.records.length - 1].registrosPalp[
          record.records[record.records.length - 1].registrosPalp.length - 1
        ].registroPalpacion;
      } else if (record.records.length > 2) {
        return record.records[record.records.length - 2].registrosPalp[
          record.records[record.records.length - 2].registrosPalp.length - 1
        ].registroPalpacion;
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  const getEdadPrimerParto = () => {
    return `${Number(get(record, 'edadPrimerParto.months', 0)).toFixed(
      0,
    )} meses / ${Number(get(record, 'edadPrimerParto.days', 0)).toFixed(
      0,
    )} dias`;
  };

  const getGestationDays = () => {
    const lastRecord = last(record.records);

    if (!isNil(lastRecord)) {
      if (lastRecord.recordType === RecordReproductionType.CURRENT) {
        return record.records[
          record.records.length - 1
        ].gestationDays.toString();
      } else {
        return '0';
      }
    } else {
      return '0';
    }
  };

  const getNumeroAbortos = () => {
    const abortos = record.records.filter(
      el => el.recordType === RecordReproductionType.ABORTO,
    );

    return `${abortos.length}`;
  };

  const getIntervalos = () => {
    return `${Number(get(record, 'intervaloEntrePartos.months', 0)).toFixed(
      0,
    )} meses / ${Number(get(record, 'intervaloEntrePartos.days', 0)).toFixed(
      0,
    )} dias`;
  };

  const getServiciosXConcepcion = () => {
    return `${get(record, 'serviciosPorParto', 0)}`;
  };

  useEffect(() => {
    if (currentCow.estadoReproductivo !== getEstadoReproductivo()) {
      console.log(
        'Estado reproductivo en current cow -> ',
        currentCow.estadoReproductivo,
      );
      console.log(
        'Estado reproductivo en rep records -> ',
        getEstadoReproductivo(),
      );
      dispatch(
        updatePartialMainCowRecord({
          idVaca: currentCow.idVaca,
          // @ts-ignore
          partialCow: {estadoReproductivo: getEstadoReproductivo()},
        }),
      );
    }
    if (
      currentCow.vacaInfo!.numeroDePartos !== Number(getNumeroPartos(record))
    ) {
      dispatch(
        updatePartialMainCowRecord({
          idVaca: currentCow.idVaca,
          // @ts-ignore
          partialCow: {'vacaInfo.numeroDePartos': getNumeroPartos()},
        }),
      );
    }

    if (currentCow.vacaInfo!.numeroDeAbortos !== Number(getNumeroAbortos())) {
      dispatch(
        updatePartialMainCowRecord({
          idVaca: currentCow.idVaca,
          // @ts-ignore
          partialCow: {'vacaInfo.numeroDeAbortos': getNumeroAbortos()},
        }),
      );
    }
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#03DAC5',
        height: 461,
        width: 337,
        paddingHorizontal: 25,
        paddingVertical: 10,
      }}>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Estado reproductivo'}
          value={getEstadoReproductivo()}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Número de partos'}
          value={getNumeroPartos(record)}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'EDAD AL PRIMER PARTO'}
          value={getEdadPrimerParto()}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView label={'Dias de gestación'} value={getGestationDays()} />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView label={'Número de abortos'} value={getNumeroAbortos()} />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Intervalo entre parto'}
          value={getIntervalos()}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <InputTextView
          label={'Servicios x Concepcion'}
          value={getServiciosXConcepcion()}
        />
      </View>
    </View>
  );
};
