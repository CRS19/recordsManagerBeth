import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppState} from './reducer';
import {IPrices} from '../interfaces/PricesInterface';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import axios from '../utils/axios-utils';
import {API_BASE_PATH} from '../env/environment';
import {ImagePickerResponse} from 'react-native-image-picker';
import {set, get} from 'lodash';
import {UploadImageResponse} from '../interfaces/UploadImageResponse';
import {IGetReproductionRecordResponse} from '../interfaces/getReproductionRecord';
import {IReproductionRecord} from '../interfaces/ReproductionRecord';
import {reproductionTemplate} from '../utils/recordsTemplates/reproduction_template';

export type IAppAction = {
  type: string;
} & IAppState;

export const setCow = (payload: ICow): IAppAction => {
  return {
    type: ActionTypes.SET_COW,
    CurrentCow: payload,
  };
};

export const setPrice = (payload: IPrices): IAppAction => {
  return {
    type: ActionTypes.SET_PRICE,
    Prices: payload,
  };
};

export const setInsertNewCow = (payload: boolean): IAppAction => {
  return {
    type: ActionTypes.SET_INSERT_NEW_COW,
    insertNewCow: payload,
  };
};

export const setNewCow = (payload: ICow): IAppAction => {
  return {
    type: ActionTypes.SET_NEW_COW,
    newCow: payload,
  };
};

export const setReproductionRecord = (
  payload: IReproductionRecord,
): IAppAction => {
  return {
    type: ActionTypes.SET_REPRODUCTION_RECORD,
    reproductionRecord: payload,
  };
};

export const insertNewCow = (
  payload: ICow,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/cow/create`;

    console.log(
      'ENPOINT CALL: creando registro master, idVaca',
      payload.idVaca,
    );
    try {
      const response = await axios.post(path, payload);
      console.log(response);
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
    }
  };
};

export const getReproductionRecord = (payload: {
  idVaca: string;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/get/${payload.idVaca}`;

    console.log('trayendo registro de repoducción', payload);

    try {
      const response = await axios.get(path);
      const reproductionRecord: IGetReproductionRecordResponse = response.data;

      dispatch(setReproductionRecord(reproductionRecord.record));
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
    }
  };
};

export const createReproductionRecord = (payload: {
  idVaca: string;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/create`;

    console.log(
      'ENPOINT CALL: creando registro de reproducción, idVaca:',
      payload.idVaca,
    );

    try {
      set(reproductionTemplate, 'idVaca', payload.idVaca);
      const resposne = await axios.post(path, reproductionTemplate);
      console.log('INFO: registro de reproducción creado exitosamente');
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
    }
  };
};

export const setUploadImage = (
  payload: ImagePickerResponse,
  index: number,
  updateNewCow: ICow,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/cow/uploadImage`;
    let imagePath = updateNewCow.imagenPath;

    const fileToUpload = {
      uri: payload.assets![0].uri,
      type: payload.assets![0].type,
      name: payload.assets![0].fileName,
    };

    console.log(fileToUpload);

    const formData = new FormData();
    formData.append('file', fileToUpload);

    console.log('Intentando llamada al endpoint...');
    try {
      const response = await axios.post(path, formData);

      console.log('EXITOSOO !');
      console.log(response.request._response);
      console.log('-----------');

      const resposne2: UploadImageResponse = JSON.parse(
        response.request._response,
      );

      console.log(resposne2.imagePath);
      console.log('-----------');

      imagePath[index] = resposne2.imagePath;

      set(updateNewCow, 'imagenPath', imagePath);

      dispatch(setNewCow(updateNewCow));
      console.log(imagePath);
      console.log('-----------');
      console.log(JSON.stringify(updateNewCow, null, 3));
      console.log('-----------');
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
    }
  };
};
