import {ThunkAction} from 'redux-thunk';
import {getDrugsList, IAppAction} from '../store/actionCreators';
import {IAppState} from '../store/reducer';

export enum DispatchActionsEnum {
  GET_DRUGS_LIST = 'GET_DRUGS_LIST',
}

export const DISPATCH_DIRECTORY: Record<
  DispatchActionsEnum,
  ThunkAction<void, IAppState, undefined, IAppAction>
> = {
  [DispatchActionsEnum.GET_DRUGS_LIST]: getDrugsList(),
};
