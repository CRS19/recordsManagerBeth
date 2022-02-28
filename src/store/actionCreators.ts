import {IDailyMilkLab, IDailyMilkLabData} from './../interfaces/DailyMilkLab';
import {IDiagnosis} from './../interfaces/SanityRecords';
import {getTimestamp} from './../utils/time-utils';
import {IDrugsListResponse} from './../interfaces/getDrugsListResponse';
import {IDrug} from './../interfaces/Drug.interface';
import {API_BASE_PATH} from './../env/environment';
import {IDailyMilkRecord} from './../interfaces/DailyMilkRecord';
import {IProductorasArray} from './../interfaces/ProductorasId';
import {ILoggedInfo} from './../interfaces/LoggedInfo';
import {LogInRequest} from './../interfaces/LogInRequest';
import {ActionTypes} from './actionTypes';
import {ICow} from './../interfaces/CowInterface';
import {IAppState} from './reducer';
import {IPrices} from '../interfaces/PricesInterface';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import axios from '../utils/axios-utils';
import {ImagePickerResponse} from 'react-native-image-picker';
import {set} from 'lodash';
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
import {GetSanityRecordResponse} from '../interfaces/httpInOutInterfaces/GetSanityRecordResponse';
import {GetOneMainRecordResponse} from '../interfaces/httpInOutInterfaces/GetOneMainRecordResponse';
import {ICreateSanityRecordResponse} from '../interfaces/httpInOutInterfaces/CreateSanityRecordResponse';

export type IAppAction = {
  type: string;
} & IAppState;

export const setDailyMilkLab = (
  payload: IDailyMilkLab | undefined,
): IAppAction => {
  return {
    type: ActionTypes.SET_DAILY_MILK_LAB,
    dailyMilkLabRecord: payload,
  };
};

export const setDrugsList = (payload: IDrug[]): IAppAction => {
  return {
    type: ActionTypes.SET_DRUGS_LIST,
    drugs: payload,
  };
};

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

export const getMainRecordCowById = (
  idVaca: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    // dispatch(setIsLoading(true));
    const path = `${API_BASE_PATH}/cow/getOne/${idVaca}`;

    try {
      const response = await axios.get<GetOneMainRecordResponse>(path);

      const cowResoponse: GetOneMainRecordResponse = JSON.parse(
        response.request._response,
      );
      console.log(JSON.stringify(cowResoponse.cow, null, 3));
      dispatch(setCow(cowResoponse.cow));
    } catch (e) {
      // @ts-ignore
      console.log(JSON.stringify(e, null, 3));
      Alert.alert(
        'Error al obtener registro master de rumiante',
        `Posible error de conexión`,
      );
    } finally {
      //   dispatch(setIsLoading(false));
    }
  };
};

export const updateDesteteCow = (
  newCow: ICow,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/cow/updatedDestete`;

    try {
      const response = await axios.post(path, newCow);
      console.log('respuesta de la actualización');
      dispatch(setCow(response.data.updateResponse));
    } catch (e) {
      // @ts-ignore
      console.log(JSON.stringify(e, null, 3));

      Alert.alert('Error al ', `Posible error de conexión`);
    }
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
    dispatch(setIsLoading(true));
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
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const createReproductionRecord = (payload: {
  idVaca: string;
  pesoNacimiento: number;
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
      set(reproductionTemplate, 'historicoPeso', [
        {peso: payload.pesoNacimiento, timestamp: getTimestamp()},
      ]);
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
      console.log(
        // @ts-ignore
        `ENDPOINT ERROR RESPONSE: /daily-prod-record/obtenerRegistroPorFecha/${dateInTs} : ${e.response.request._response}`,
      );

      Alert.alert(
        'Error al obtener los registros de producción',
        `Hubo un error al conseguir el los registros de producción diaria por fecha`,
      );
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

export const getDrugsList = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    console.log('Obteniendo la lista de farmacos');

    const path = `${API_BASE_PATH}/drugs/getAll`;

    try {
      const response = await axios.get(path);
      const drugsResponse: IDrugsListResponse = JSON.parse(
        response.request._response,
      );

      dispatch(setDrugsList(drugsResponse.drugs));
      dispatch(setIsLoading(false));
    } catch (e) {
      dispatch(setIsLoading(false));
      // @ts-ignore
      console.log(e.response.request._response);
      Alert.alert(
        'Error al obtener los fármacos',
        `Error de conexión, revise su conección a internet`,
      );
    }
  };
};

export const getPrices = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/prices/getPrices`;
    try {
      const resposne = await axios.get<{
        message: string;
        prices: {_id: string; Prices: {meatPrice: number; milkPrice: number}}[];
      }>(path);

      dispatch(setPrice(resposne.data.prices[0].Prices));
    } catch (e) {
      // @ts-ignore
      console.log(e);
      Alert.alert(
        'Error al los precios',
        `Error de conexión, revise su conección a internet`,
      );
    }
  };
};

export const updatePrices = (
  prices: Partial<IPrices>,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/prices/update`;

    try {
      const response = await axios.patch(path, prices);

      console.log(response.data);
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Error al actualizar los precios',
        `Error de conexión, revise su conección a internet`,
      );
    }
  };
};

export const createNewDrug = (
  payload: IDrug,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/drugs/create`;
    try {
      dispatch(setIsLoading(true));
      const response = await axios.post(path, payload);
      const drugResponse = JSON.parse(response.request._response);
      dispatch(getDrugsList());
      dispatch(setIsLoading(false));
    } catch (e) {
      dispatch(setIsLoading(false));
      // @ts-ignore
      console.log(e.response.request._response);
      Alert.alert(
        'Error al añadir nuevo farmaco',
        `Error de conexión, revise su conección a internet`,
      );
    }
  };
};

export const deleteDrug = (
  id: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/drugs/delete/${id}`;
    try {
      const response = await axios.delete(path);
      dispatch(getDrugsList());
    } catch (e) {
      // @ts-ignore

      Alert.alert(
        'Error al añadir nuevo farmaco',
        `Error de conexión, revise su conección a internet`,
      );
    }
  };
};

export const createSanityRecord = (
  idVaca: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/sanity-records/create/${idVaca}`;

    try {
      const response = await axios.post<ICreateSanityRecordResponse>(path);
    } catch (e) {
      console.log(
        // @ts-ignore
        `ENDPOINT ERROR RESPONSE: /sanity-records/create${idVaca} : ${e.response.request._response}`,
      );

      Alert.alert(
        'Error al crear registro de sanidad',
        `Hubo un error al crear el registro de ${idVaca}`,
      );
    }
  };
};

export const getSanityRecordById = (
  idVaca: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/sanity-records/get/${idVaca}`;

    try {
      const axiosResponse = await axios.get<GetSanityRecordResponse>(path);
    } catch (e) {
      console.log(
        // @ts-ignore
        `ENDPOINT ERROR RESPONSE: /sanity-records/get${idVaca} : ${e.response.request._response}`,
      );

      Alert.alert(
        'Error al obtener el registro de sanidad',
        `Hubo un error al conseguir el registro de ${idVaca}`,
      );
    }
  };
};

export const updateDiagnosis = (
  payload: {
    idVaca: string;
    newDiagnosis: IDiagnosis;
  },
  successFullCallback: () => void,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    const path = `${API_BASE_PATH}/sanity-records/updateDiagnosis`;

    try {
      const response = await axios.post(path, payload);

      console.log(JSON.stringify(response.data));
      dispatch(setIsLoading(false));
      Alert.alert(
        'Diagnostico Ingresado exitosamente',
        `El regsitro de sanidad del rumiante: ${payload.idVaca} ha sido registrado exitosamente`,
        [
          {
            text: 'OK',
            onPress: successFullCallback,
            style: 'cancel',
          },
        ],
      );
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
      // @ts-ignore
      const drugsWithOutStock: {
        message: string;
        drugsId: {drugId: string; dosis: number; drugName: string}[];
        // @ts-ignore
      } = JSON.parse(e.response.request._response);

      Alert.alert(
        'No hay suficientes fármacos',
        `Los farmacos con insuficiente stock son: \n ${drugsWithOutStock.drugsId
          .map(drug => drug.drugName)
          .join('\n')}`,
      );
      dispatch(setIsLoading(false));
    }
  };
};

export const getDailyMilkLabRecordsByMonth = (
  monthYear: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/daily-milk-lab-records/get/${monthYear}`;

    try {
      const response = await axios.get<{
        message: string;
        record: IDailyMilkLab;
      }>(path);

      const dailyMilkLabRecord: IDailyMilkLab = response.data.record;

      dispatch(setDailyMilkLab(dailyMilkLabRecord));
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);

      Alert.alert(
        `No se pudo obtener el registro del mes: ${monthYear}`,
        'El registro no existe o no hay un problema con la conexión',
      );
      dispatch(setDailyMilkLab(undefined));
    }
  };
};

export const updateMilkRegisterLab = (
  payload: Partial<IDailyMilkLabData>,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/daily-milk-lab-records/update`;

    try {
      const response = await axios.patch(path, payload);

      console.log(response.data);
    } catch (e) {
      // @ts-ignore
      console.log(e.response.request._response);
    }
  };
};
