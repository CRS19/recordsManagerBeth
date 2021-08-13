import {IPrices} from './../interfaces/PricesInterface';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppAction} from './actionCreators';

export const INITIAL_STATE: IAppState = {
  CurrentCow: undefined,
  Prices: {
    meatPrice: 10.5,
    milkPrice: 15.4,
  },
};

export interface IAppState {
  CurrentCow?: ICow;
  Prices?: IPrices;
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
    default:
      return state;
  }
};
