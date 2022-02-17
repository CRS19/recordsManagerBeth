import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Alert} from 'react-native';
import {defaultTo, isNil} from 'lodash';
import FileViewer from 'react-native-file-viewer';
import {deleteme} from './recordsTemplates/deleteme';
import {IDailyMilkRecord} from '../interfaces/DailyMilkRecord';
import {getHtmlDailyMilkingReport} from '../constants/htmlReportGenerators/htmlDailyMilkingPordReport';
import {htmlDrugsReport} from '../constants/htmlReportGenerators/htmlDrugsReport';
import {IDrug} from '../interfaces/Drug.interface';

export interface IUseCreatePdf {
  createPd: (
    contentUri: string,
    record: IDailyMilkRecord,
    listNumber: number,
  ) => Promise<void>;
  createDrugsInventoryReport: (drugs: IDrug[]) => Promise<void>;
}

export const useCreatePdf = (): IUseCreatePdf => {
  const openPDF = (path: string) => {
    FileViewer.open(path, {showOpenWithDialog: true});
  };

  const createPd = async (
    contentUri: string,
    record: IDailyMilkRecord,
    listNumber: number,
  ) => {
    let options = {
      html: getHtmlDailyMilkingReport(record, listNumber),
      fileName: `${record.idVaca}_reporte_de_produccion}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    if (!isNil(file.filePath)) {
      Alert.alert(
        'Pdf Creado exitosamente',
        `Pdf creado en: ${file.filePath}`,
        [
          {
            text: 'OK',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Abrir PDF',
            onPress: () => openPDF(file.filePath!),
          },
        ],
      );
    } else {
      Alert.alert(
        'Error de creación de PDF',
        'Pongase en contacto con el administrador del sistema',
      );
    }
  };

  const createDrugsInventoryReport = async (drugs: IDrug[]) => {
    let options = {
      html: htmlDrugsReport(drugs),
      fileName: 'Reporte_fármacos',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    if (!isNil(file.filePath)) {
      Alert.alert(
        'Pdf Creado exitosamente',
        `Pdf creado en: ${file.filePath}`,
        [
          {
            text: 'OK',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Abrir PDF',
            onPress: () => openPDF(file.filePath!),
          },
        ],
      );
    } else {
      Alert.alert(
        'Error de creación de PDF',
        'Pongase en contacto con el administrador del sistema',
      );
    }
  };

  return {createPd, createDrugsInventoryReport};
};
