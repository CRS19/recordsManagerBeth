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
import {
  IMontaIaReportTableInfo,
  IPreniezDataReportInfo,
} from '../interfaces/ReproductionRecord';
import {htmlInseminacionMontaReport} from '../constants/htmlReportGenerators/htmlInseminacionMontaReport';
import {getMonthAndYearString, getTimestamp} from './time-utils';
import {htmlPreniezReport} from '../constants/htmlReportGenerators/htmlPreniezReport';
import {
  categoryInfo,
  IDataCow,
  sexInfo,
} from '../screens/Reproductors/TotalReproductores/stateDeleteme/useDeleteme';
import {generateCatalog} from '../constants/htmlReportGenerators/htmlGenerateCatalog';

export interface IUseCreatePdf {
  createPd: (
    contentUri: string,
    record: IDailyMilkRecord,
    listNumber: number,
  ) => Promise<void>;
  createDrugsInventoryReport: (drugs: IDrug[]) => Promise<void>;
  createInseminationMontaReport: (
    inseminationMontaReportData: IMontaIaReportTableInfo[],
  ) => Promise<void>;
  createPreniezReport: (preniezData: IPreniezDataReportInfo[]) => Promise<void>;
  createProductionDiariaReport: (
    labRecord: IDailyMilkLab,
    GET_ACTION: Record<string, () => string>,
  ) => Promise<void>;
  createControlGinecologicoReport: (
    rowsData: IControlGinecologicoRowData[],
    year: number,
  ) => Promise<void>;
  generateCatalogMacaji: (
    CowData: IDataCow[],
    isLast: boolean,
    raza: string,
    subTitle: string,
    sexInfo: sexInfo,
    categoryInfo: categoryInfo,
    equino: boolean,
    isRemate: boolean,
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

  const generateCatalogMacaji = async (
    CowData: IDataCow[],
    isLast: boolean,
    raza: string,
    subTitle: string,
    sexInfo: sexInfo,
    categoryInfo: categoryInfo,
    equino: boolean,
    isRemate: boolean,
  ) => {
    let options = {
      html: generateCatalog(
        CowData,
        isLast,
        raza,
        subTitle,
        sexInfo,
        categoryInfo,
        equino,
        isRemate,
      ),
      fileName: `${getTimestamp()}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const createPreniezReport = async (preniezData: IPreniezDataReportInfo[]) => {
    let options = {
      html: htmlPreniezReport(preniezData),
      fileName: `Reporte_Preniez_${getMonthAndYearString()}`,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    validatePDF(file);
  };

  const createInseminationMontaReport = async (
    inseminationMontaReportData: IMontaIaReportTableInfo[],
  ) => {
    let options = {
      html: htmlInseminacionMontaReport(inseminationMontaReportData),
      fileName: `Reporte_InseminaciónMonta_${getMonthAndYearString()}`,
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
    createInseminationMontaReport,
    createControlGinecologicoReport,
    createPreniezReport,
    generateCatalogMacaji,
  };
};
