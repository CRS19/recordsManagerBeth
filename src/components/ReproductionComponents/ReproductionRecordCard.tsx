import {isNil} from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {ReproductionViewColor} from '../../constants/ReoproductionRecordColor';
import {
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {InputTextView} from '../Views/InputTextView';
import {InputViewDate} from '../Views/InputViewDate';

export interface IReproductionRecordCardProps {
  record: Record;
}

export const ReproductionRecordCard = ({
  record,
}: IReproductionRecordCardProps) => {
  return (
    <View>
      <View
        style={{
          ...styles.ReproductionMainViewContainer,
          backgroundColor:
            record.recordType === RecordReproductionType.ABORTO
              ? '#F2899C'
              : ReproductionViewColor[record.montaType],
        }}>
        <View style={styles.ReproductionMainItem}>
          <InputTextView label="Monta/Ia" value={record.montaType} />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputTextView
            label="Nombre y N° toro"
            value={record.idReproductor}
          />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputViewDate
            label="Fecha posible parto"
            value={record.fechaPosibleParto}
          />
        </View>
        <View style={styles.ReproductionMainItem}>
          <InputTextView
            label="días de gestación"
            value={record.gestationDays.toString()}
          />
        </View>
        {!isNil(record.inseminadorName) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Inseminador"
              value={record.inseminadorName.toString()}
            />
          </View>
        )}
        {!isNil(record.partoType) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Tipo de parto"
              value={record.partoType.toString()}
            />
          </View>
        )}
        {!isNil(record.estadoDeLaCria) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Estado de la cría"
              value={record.estadoDeLaCria.toString()}
            />
          </View>
        )}
        {!isNil(record.sexoDeLaCria) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Sexo de la cría"
              value={record.sexoDeLaCria.toString()}
            />
          </View>
        )}
        {!isNil(record.nombreYNumeroDeLaCria) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Nombre/N° arete cría"
              value={record.nombreYNumeroDeLaCria.toString()}
            />
          </View>
        )}
        {!isNil(record.pesoDeLaCria) && (
          <View style={styles.ReproductionMainItem}>
            <InputTextView
              label="Peso de la cría"
              value={record.pesoDeLaCria.toString()}
              labelUnidad={'Kg'}
            />
          </View>
        )}
      </View>
    </View>
  );
};
