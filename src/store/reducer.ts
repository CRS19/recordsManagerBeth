import {IPrices} from './../interfaces/PricesInterface';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppAction} from './actionCreators';
import {emptyCow} from '../VaquitasPrueba/vacas';
import {IReproductionRecord} from '../interfaces/ReproductionRecord';
import {IReproductoresList} from '../interfaces/ReproductoresList';

export const INITIAL_STATE: IAppState = {
  CurrentCow: undefined,
  Prices: {
    meatPrice: 10.5,
    milkPrice: 15.4,
  },
  insertNewCow: false,
  newCow: emptyCow,
  reproductionRecord: undefined,
  reproductoresList: undefined,
};

export interface IAppState {
  CurrentCow?: ICow;
  Prices?: IPrices;
  insertNewCow?: boolean;
  newCow?: ICow;
  reproductionRecord?: IReproductionRecord;
  reproductoresList?: IReproductoresList[];
}

export const reducer = (
  state: IAppState = INITIAL_STATE,
  action: IAppAction,
): IAppState => {
  switch (action.type) {
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
    default:
      return state;
  }
};
