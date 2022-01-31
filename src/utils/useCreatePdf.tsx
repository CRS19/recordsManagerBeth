import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Alert} from 'react-native';
import {defaultTo, isNil} from 'lodash';
import FileViewer from 'react-native-file-viewer';
import {deleteme} from './recordsTemplates/deleteme';
import {IDailyMilkRecord} from '../interfaces/DailyMilkRecord';
import {getHtmlDailyMilkingReport} from '../constants/htmlReportGenerators/htmlDailyMilkingPordReport';

export interface IUseCreatePdf {
  createPd: (
    contentUri: string,
    record: IDailyMilkRecord,
    listNumber: number,
  ) => Promise<void>;
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
      //html: `<img src="${contentUri}" title="Title of image" alt="alt text here"/>`,
      html: getHtmlDailyMilkingReport(record, listNumber),
      fileName: 'test',
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

  return {createPd};
};
