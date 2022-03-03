import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Alert} from 'react-native';
import {isNil} from 'lodash';
import FileViewer from 'react-native-file-viewer';
import {IDailyMilkRecord} from '../interfaces/DailyMilkRecord';
import {getHtmlDailyMilkingReport} from '../constants/htmlReportGenerators/htmlDailyMilkingPordReport';
import {htmlDrugsReport} from '../constants/htmlReportGenerators/htmlDrugsReport';
import {IDrug} from '../interfaces/Drug.interface';
import {IDailyMilkLab} from '../interfaces/DailyMilkLab';
import {htmlDailyProductionReport} from '../constants/htmlReportGenerators/htmlDailyProductionReport';
import {IControlGinecologicoRowData} from '../interfaces/ControlGinecologico';
import {getHtmlControlGinecologicoReport} from '../constants/htmlReportGenerators/htmlControlGinecologico';

export interface IUseCreatePdf {
  createPd: (
    contentUri: string,
    record: IDailyMilkRecord,
    listNumber: number,
  ) => Promise<void>;
  createDrugsInventoryReport: (drugs: IDrug[]) => Promise<void>;
  createProductionDiariaReport: (
    labRecord: IDailyMilkLab,
    GET_ACTION: Record<string, () => string>,
  ) => Promise<void>;
  createControlGinecologicoReport: (
    rowsData: IControlGinecologicoRowData[],
    year: number,
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
      html: getHtmlDailyMilkingReport(record, listNumber),
      fileName: `${record.idVaca}_reporte_de_produccion}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const createDrugsInventoryReport = async (drugs: IDrug[]) => {
    let options = {
      html: htmlDrugsReport(drugs),
      fileName: 'Reporte_fármacos',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const createProductionDiariaReport = async (
    labRecord: IDailyMilkLab,
    GET_ACTION: Record<string, () => string>,
  ) => {
    let options = {
      html: htmlDailyProductionReport(labRecord, GET_ACTION),
      fileName: `Reporte_Produccion_diaria_${labRecord.monthYear}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const createControlGinecologicoReport = async (
    rowsData: IControlGinecologicoRowData[],
    year: number,
  ) => {
    let options = {
      html: getHtmlControlGinecologicoReport(rowsData, year),
      fileName: `Reporte_Ginecologico_${year}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const validatePDF = (file: RNHTMLtoPDF.Pdf) => {
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

  return {
    createPd,
    createDrugsInventoryReport,
    createProductionDiariaReport,
    createControlGinecologicoReport,
  };
};
