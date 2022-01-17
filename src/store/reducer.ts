import {IDailyMilkRecord} from './../interfaces/DailyMilkRecord';
import {IPrices} from './../interfaces/PricesInterface';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppAction} from './actionCreators';
import {emptyCow} from '../VaquitasPrueba/vacas';
import {IReproductionRecord, Record} from '../interfaces/ReproductionRecord';
import {IReproductoresList} from '../interfaces/ReproductoresList';
import {ILoggedInfo, UserRolEnum} from '../interfaces/LoggedInfo';
import {IProductorasArray} from '../interfaces/ProductorasId';

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
    default:
      return state;
  }
};
