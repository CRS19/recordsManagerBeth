import {API_BASE_PATH} from './../env/environment';
import {IDailyMilkRecord} from './../interfaces/DailyMilkRecord';
import {IProductorasArray} from './../interfaces/ProductorasId';
import {ILoggedInfo, UserRolEnum} from './../interfaces/LoggedInfo';
import {LogInRequest} from './../interfaces/LogInRequest';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppState} from './reducer';
import {IPrices} from '../interfaces/PricesInterface';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import axios from '../utils/axios-utils';
import {ImagePickerResponse} from 'react-native-image-picker';
import {set, get} from 'lodash';
import {UploadImageResponse} from '../interfaces/UploadImageResponse';
import {IGetReproductionRecordResponse} from '../interfaces/getReproductionRecord';
import {IReproductionRecord, Record} from '../interfaces/ReproductionRecord';
import {reproductionTemplate} from '../utils/recordsTemplates/reproduction_template';
import {Alert} from 'react-native';
import {IGetReproductorsListResponse} from '../interfaces/getReproductorsListResponse';
import {IReproductoresList} from '../interfaces/ReproductoresList';
import {splitReproductionRecords} from '../constants/SplitReproductionRecords';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IDailyRecordResponse} from '../interfaces/getDailyProdRecordsResponse';

export type IAppAction = {
  type: string;
} & IAppState;

export const setProductorasList = (payload: IProductorasArray): IAppAction => {
  return {
    type: ActionTypes.SET_PRODUCTORAS_LSIT,
    productorasList: payload,
  };
};

export const setCurrentDailyRecords = (
  payload: IDailyMilkRecord[],
): IAppAction => {
  return {
    type: ActionTypes.SET_DAILY_PROD_RECORDS_BY_IDVACA,
    currentCowDailyRecord: payload,
  };
};

export const setDailyRecordsByDate = (
  payload: IDailyMilkRecord[],
): IAppAction => {
  return {
    type: ActionTypes.SET_DAILY_PROD_RECORS_BY_DATE,
    dailyProdRecordByDate: payload,
  };
};

export const setDailyRecords = (payload: IDailyMilkRecord[]): IAppAction => {
  return {
    type: ActionTypes.SET_DAILY_PROD_RECORDS,
    dailyProductionRecords: payload,
  };
};

export const setIsLoading = (payload: boolean): IAppAction => {
  return {
    type: ActionTypes.SET_ISLOADING,
    isLoading: payload,
  };
};

export const setLoggedInfo = (payload: ILoggedInfo): IAppAction => {
  return {
    type: ActionTypes.SET_LOGGED_INFO,
    LoggedInfo: payload,
  };
};

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

export const setReproductoresList = (
  payload: IReproductoresList[],
): IAppAction => {
  return {
    type: ActionTypes.SET_REPRODUCTORES_LIST,
    reproductoresList: payload,
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

export const setReproductionRecordsSplited = (
  payload: Record[][],
): IAppAction => {
  return {
    type: ActionTypes.SET_REPRODUCTION_RECORDS_SPLITED,
    reproductionRecordsSplited: payload,
  };
};

export const setIsNewborn = (payload: boolean): IAppAction => {
  return {
    type: ActionTypes.SET_IS_NEWBORN,
    isNewBorn: payload,
  };
};

export const setIsUsingControlGinecologico = (payload: boolean): IAppAction => {
  return {
    type: ActionTypes.SET_IS_USING_CONTROL_GINECOLOGICO,
    isUsingControlGinecologico: payload,
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

export const getReproductorsList = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    try {
      const path = `${API_BASE_PATH}/cow/onlyReproductors`;

      const response = await axios.get(path);
      const reproductorsList: IGetReproductorsListResponse = response.data;
      dispatch(setReproductoresList(reproductorsList.list));
    } catch (e) {
      console.log(e);
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
      dispatch(
        setReproductionRecordsSplited(
          splitReproductionRecords(reproductionRecord.record),
        ),
      );
    } catch (e) {
      console.log(
        // @ts-ignore
        `ENDPOINT ERROR RESPONSE: /reproduction-register/get/${payload.idVaca} : ${e.response.request._response}`,
      );
      Alert.alert(
        'Error de base de datos',
        `Error al conseguir el registro de repducción del rumiante: ${payload.idVaca}`,
      );
    }
  };
};

export const updateReproductionRecord = (
  payload: IReproductionRecord,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const pathToUpdate = `${API_BASE_PATH}/reproduction-register/updateOne`;
    const pathToGet = `${API_BASE_PATH}/reproduction-register/get/${payload.idVaca}`;
    try {
      console.log('ENPOINT CALL: actualizando registro');
      const response = await axios.post(pathToUpdate, payload);

      console.log(
        'INFO: registro de reproducción actualizado exitosamente',
        response.data,
      );

      const getResponse = await axios.get(pathToGet);

      console.log(
        'INFO: registro actualizado obtenido exitosamente',
        getResponse.data,
      );

      const reproductionRecord: IGetReproductionRecordResponse =
        getResponse.data;

      dispatch(setReproductionRecord(reproductionRecord.record));
      dispatch(
        setReproductionRecordsSplited(
          splitReproductionRecords(reproductionRecord.record),
        ),
      );
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Error de base de datos',
        `no se ha podido ingresar el registro, revise su conexión a internet`,
      );
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

export const getLogIn = (
  payload: LogInRequest,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    console.log('Loggin request', payload);
    const path = `${API_BASE_PATH}/auth/login`;

    try {
      console.log('Loggin request');
      const response = await axios.post(path, payload);
      console.log(JSON.parse(response.request._response));
      const {access_token, rol} = JSON.parse(response.request._response);

      dispatch(
        setLoggedInfo({
          isLoggedIn: true,
          rol,
        }),
      );

      await AsyncStorage.setItem('token', access_token);
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
      Alert.alert(
        'Correo o contraseña incorrectos',
        `Asegurese de colocar su correo y contraseña asignados, si necesita recuperar la contraseña contáctese con el administrador`,
      );
    }
  };
};

export const getPoductorasIdList = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    setIsLoading(true);
    console.log('llamada a getProductors');
    const path = `${API_BASE_PATH}/cow/getProductors`;
    try {
      const response = await axios.get(path);
      console.log(response.request._response);
      dispatch(setProductorasList(JSON.parse(response.request._response)));
      console.log(
        'actualizar lista de repro',
        JSON.stringify(JSON.parse(response.request._response).list, null, 3),
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const getDailyProdRecords = (
  request: IProductorasArray,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/daily-prod-record/getAllCurrentRecords`;
    try {
      const response = await axios.post(path, request);
      const records: IDailyRecordResponse = JSON.parse(
        response.request._response,
      );
      dispatch(setDailyRecords(records.records));
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
};

export const saveDailyProducts = (
  recordsToSave: IDailyMilkRecord[],
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/daily-prod-record/updateRecords`;
    try {
      const response = await axios.post(path, recordsToSave);
      console.log(response.request._response);

      dispatch(getPoductorasIdList());
    } catch (e) {
      console.log(e);
    }
  };
};

export const changeProd = (payload: {
  idVaca: string;
  productivity: boolean;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/cow/changeProductivity`;
    try {
      const response = await axios.post(path, payload);
      console.log(response.request._response);
      dispatch(getPoductorasIdList());
    } catch (e) {
      console.log(e);
    }
  };
};

export const getRecordsByDate = (
  dateInTs: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/daily-prod-record/obtenerRegistroPorFecha/${dateInTs}`;
    try {
      const response = await axios.get(path);
      console.log(response.request._response);
      const records: IDailyRecordResponse = JSON.parse(
        response.request._response,
      );
      dispatch(setDailyRecordsByDate(records.records));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getRecordsById = (
  idVaca: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    console.log('trayendo los registros diarios de prod');
    const path = `${API_BASE_PATH}/daily-prod-record/obtenerRegistrosIndividuales/${idVaca}`;
    try {
      const response = await axios.get(path);
      const records: IDailyRecordResponse = JSON.parse(
        response.request._response,
      );
      console.log(records);
      dispatch(setCurrentDailyRecords(records.records));
    } catch (e) {
      console.log(e);
    }
  };
};
