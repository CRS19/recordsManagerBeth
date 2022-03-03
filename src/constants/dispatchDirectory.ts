import {getAllReproductionRecords} from './../store/actionCreators';
import {ThunkAction} from 'redux-thunk';
import {getDrugsList, getPrices, IAppAction} from '../store/actionCreators';
import {IAppState} from '../store/reducer';

export enum DispatchActionsEnum {
  GET_DRUGS_LIST = 'GET_DRUGS_LIST',
  GET_PRICES = 'GET_PRICES',
  GET_ALL_REPROD_RECORDS = 'GET_ALL_REPROD_RECORDS',
}

export const DISPATCH_DIRECTORY: Record<
  DispatchActionsEnum,
  ThunkAction<void, IAppState, undefined, IAppAction>
> = {
  [DispatchActionsEnum.GET_DRUGS_LIST]: getDrugsList(),
  [DispatchActionsEnum.GET_PRICES]: getPrices(),
  [DispatchActionsEnum.GET_ALL_REPROD_RECORDS]: getAllReproductionRecords(),
};
