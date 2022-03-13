import {IPreniezDataReportInfo} from './../interfaces/ReproductionRecord';
import {ISanityRecord} from './../interfaces/SanityRecords';
import {IDrug} from './../interfaces/Drug.interface';
import {IDailyMilkRecord} from './../interfaces/DailyMilkRecord';
import {IPrices} from './../interfaces/PricesInterface';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppAction} from './actionCreators';
import {emptyCow} from '../VaquitasPrueba/vacas';
import {
  IReproductionRecord,
  IMontaIaReportTableInfo,
  Record,
} from '../interfaces/ReproductionRecord';
import {IReproductoresList} from '../interfaces/ReproductoresList';
import {ILoggedInfo, UserRolEnum} from '../interfaces/LoggedInfo';
import {IProductorasArray} from '../interfaces/ProductorasId';
import {IDailyMilkLab} from '../interfaces/DailyMilkLab';

export const INITIAL_STATE: IAppState = {
  isLoading: false,
  CurrentCow: undefined,
  LoggedInfo: {
    isLoggedIn: false,
    rol: UserRolEnum.ADMINISTRADOR,
  },
  Prices: {
    meatPrice: 10.5,
    milkPrice: 15.4,
  },
  insertNewCow: false,
  isNewBorn: false,
  isUsingControlGinecologico: false,
  newCow: emptyCow,
  reproductionRecord: undefined,
  reproductoresList: undefined,
  reproductionRecordsSplited: undefined,
  productorasList: {
    productoras: [],
  },
  dailyProductionRecords: [],
  dailyProdRecordByDate: [],
  currentCowDailyRecord: [],
  drugs: undefined,
  sanityRecord: undefined,
  dailyMilkLabRecord: undefined,
  allReproductionRecords: undefined,
  montaIaReportTableData: [],
  preniezReportTableData: [],
};

export interface IAppState {
  isLoading?: boolean;
  CurrentCow?: ICow;
  Prices?: IPrices;
  LoggedInfo?: ILoggedInfo;
  insertNewCow?: boolean;
  isNewBorn?: boolean;
  isUsingControlGinecologico?: boolean;
  newCow?: ICow;
  reproductionRecord?: IReproductionRecord;
  reproductoresList?: IReproductoresList[];
  reproductionRecordsSplited?: Record[][];
  productorasList?: IProductorasArray;
  dailyProductionRecords?: IDailyMilkRecord[];
  dailyProdRecordByDate?: IDailyMilkRecord[];
  currentCowDailyRecord?: IDailyMilkRecord[];
  drugs?: IDrug[];
  sanityRecord?: ISanityRecord;
  dailyMilkLabRecord?: IDailyMilkLab;
  allReproductionRecords?: IReproductionRecord[];
  montaIaReportTableData?: IMontaIaReportTableInfo[];
  preniezReportTableData?: IPreniezDataReportInfo[];
}

export const reducer = (
  state: IAppState = INITIAL_STATE,
  action: IAppAction,
): IAppState => {
  switch (action.type) {
    case ActionTypes.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ActionTypes.SET_COW:
      return {
        ...state,
        CurrentCow: action.CurrentCow,
      };
    case ActionTypes.SET_PRICE:
      return {
        ...state,
        Prices: action.Prices,
      };
    case ActionTypes.SET_INSERT_NEW_COW:
      return {
        ...state,
        insertNewCow: action.insertNewCow,
      };
    case ActionTypes.SET_NEW_COW:
      return {
        ...state,
        newCow: action.newCow,
      };
    case ActionTypes.SET_REPRODUCTION_RECORD:
      return {
        ...state,
        reproductionRecord: action.reproductionRecord,
      };
    case ActionTypes.SET_REPRODUCTORES_LIST:
      return {
        ...state,
        reproductoresList: action.reproductoresList,
      };
    case ActionTypes.SET_REPRODUCTION_RECORDS_SPLITED:
      return {
        ...state,
        reproductionRecordsSplited: action.reproductionRecordsSplited,
      };
    case ActionTypes.SET_IS_USING_CONTROL_GINECOLOGICO:
      return {
        ...state,
        isUsingControlGinecologico: action.isUsingControlGinecologico,
      };
    case ActionTypes.SET_IS_NEWBORN:
      return {
        ...state,
        isNewBorn: action.isNewBorn,
      };
    case ActionTypes.SET_LOGGED_INFO:
      return {
        ...state,
        LoggedInfo: action.LoggedInfo,
      };
    case ActionTypes.SET_DAILY_PROD_RECORDS:
      return {
        ...state,
        dailyProductionRecords: action.dailyProductionRecords,
      };
    case ActionTypes.SET_PRODUCTORAS_LSIT:
      return {
        ...state,
        productorasList: action.productorasList,
      };
    case ActionTypes.SET_DAILY_PROD_RECORS_BY_DATE:
      return {
        ...state,
        dailyProdRecordByDate: action.dailyProdRecordByDate,
      };
    case ActionTypes.SET_DAILY_PROD_RECORDS_BY_IDVACA:
      return {
        ...state,
        currentCowDailyRecord: action.currentCowDailyRecord,
      };
    case ActionTypes.SET_DRUGS_LIST:
      return {
        ...state,
        drugs: action.drugs,
      };
    case ActionTypes.SET_SANITY_RECORD:
      return {
        ...state,
        sanityRecord: action.sanityRecord,
      };
    case ActionTypes.SET_DAILY_MILK_LAB:
      return {
        ...state,
        dailyMilkLabRecord: action.dailyMilkLabRecord,
      };
    case ActionTypes.SET_ALL_REPRODUCTION_RECORDS:
      return {
        ...state,
        allReproductionRecords: action.allReproductionRecords,
      };
    case ActionTypes.SET_MONTA_IA_REPORT_DATA: {
      return {
        ...state,
        montaIaReportTableData: action.montaIaReportTableData,
      };
    }
    case ActionTypes.SET_PRENIEZ_REPORT_DATA:
      return {
        ...state,
        preniezReportTableData: action.preniezReportTableData,
      };
    default:
      return state;
  }
};
