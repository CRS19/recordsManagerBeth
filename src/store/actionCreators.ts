import {IInventoryCowSecondTable} from './../interfaces/InventoryCow.interface';
import {IStraw} from './../interfaces/IStraws';
import {IDailyMilkLab, IDailyMilkLabData} from './../interfaces/DailyMilkLab';
import {
  IDiagnosis,
  IVaccines,
  IDeworming,
  ISanityRecord,
} from './../interfaces/SanityRecords';
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
import {
  IReproductionRecord,
  IMontaIaReportTableInfo,
  Record,
  IPreniezDataReportInfo,
} from '../interfaces/ReproductionRecord';
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
import {IInventoryCowFirstTable} from '../interfaces/InventoryCow.interface';
import {IDeathCertificate} from '../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {AxiosResponse} from 'axios';

export type IAppAction = {
  type: string;
} & IAppState;

export const setSecondTable = (payload: IInventoryCowSecondTable[]) => {
  return {
    type: ActionTypes.SET_INVENTORY_SECOND_TABLE,
    inventoryCowsSecondTable: payload,
  };
};

export const setStrawList = (payload: IStraw[]) => {
  return {
    type: ActionTypes.SET_STRAWS_LIST,
    strawList: payload,
  };
};

export const setSanityRecord = (payload: ISanityRecord) => {
  return {
    type: ActionTypes.SET_SANITY_RECORD,
    sanityRecord: payload,
  };
};

export const setAllDeathCertificates = (payload: IDeathCertificate[]) => {
  return {
    type: ActionTypes.SET_DEATH_CERTIFICATES,
    allDeathCertificates: payload,
  };
};

export const setDeathCertificateCounter = (payload: number | undefined) => {
  return {
    type: ActionTypes.SET_DEATH_CERTIFICATE_COUNTER,
    deathCertificateCounterDocument: payload,
  };
};

export const setInventoryFirstTable = (payload: IInventoryCowFirstTable[]) => {
  return {
    type: ActionTypes.SET_INVENTORY_FIRST_TABLE,
    inventoryCowsFirstTable: payload,
  };
};

export const setPreniezReportData = (payload: IPreniezDataReportInfo[]) => {
  return {
    type: ActionTypes.SET_PRENIEZ_REPORT_DATA,
    preniezReportTableData: payload,
  };
};

export const setMontaIaReportData = (payload: IMontaIaReportTableInfo[]) => {
  return {
    type: ActionTypes.SET_MONTA_IA_REPORT_DATA,
    montaIaReportTableData: payload,
  };
};

export const setAllReproductionRecords = (payload: IReproductionRecord[]) => {
  return {
    type: ActionTypes.SET_ALL_REPRODUCTION_RECORDS,
    allReproductionRecords: payload,
  };
};

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

      dispatch(setCow(cowResoponse.cow));
    } catch (e) {
      // @ts-ignore

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

      dispatch(setCow(response.data.updateResponse));
    } catch (e) {
      // @ts-ignore

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

    try {
      const response = await axios.post(path, payload);
    } catch (e) {
      // @ts-ignore
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
    } catch (e) {}
  };
};

export const getReproductionRecord = (payload: {
  idVaca: string;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/get/${payload.idVaca}`;

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
      const response = await axios.post(pathToUpdate, payload);

      const getResponse = await axios.get(pathToGet);

      const reproductionRecord: IGetReproductionRecordResponse =
        getResponse.data;

      dispatch(setReproductionRecord(reproductionRecord.record));
      dispatch(
        setReproductionRecordsSplited(
          splitReproductionRecords(reproductionRecord.record),
        ),
      );
    } catch (e) {
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
  sex: string;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/create`;

    try {
      set(reproductionTemplate, 'idVaca', payload.idVaca);
      set(reproductionTemplate, 'historicoPeso', [
        {peso: payload.pesoNacimiento, timestamp: getTimestamp()},
      ]);
      set(reproductionTemplate, 'sex', payload.sex);
      const resposne = await axios.post(path, reproductionTemplate);
    } catch (e) {
      // @ts-ignore
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

    const formData = new FormData();
    formData.append('file', fileToUpload);

    try {
      const response = await axios.post(path, formData);

      const resposne2: UploadImageResponse = JSON.parse(
        response.request._response,
      );

      imagePath[index] = resposne2.imagePath;

      set(updateNewCow, 'imagenPath', imagePath);

      dispatch(setNewCow(updateNewCow));
    } catch (e) {
      // @ts-ignore
    }
  };
};

export const getLogIn = (
  payload: LogInRequest,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/auth/login`;

    try {
      const response = await axios.post(path, payload);

      const {access_token, rol} = JSON.parse(response.request._response);

      dispatch(
        setLoggedInfo({
          isLoggedIn: true,
          rol,
        }),
      );

      await AsyncStorage.setItem('token', access_token);
    } catch (e) {
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

    const path = `${API_BASE_PATH}/cow/getProductors`;
    try {
      const response = await axios.get(path);

      dispatch(setProductorasList(JSON.parse(response.request._response)));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
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
    setIsLoading(true);
    const path = `${API_BASE_PATH}/daily-prod-record/updateRecords`;
    try {
      const response = await axios.post(path, recordsToSave);

      dispatch(getPoductorasIdList());

      Alert.alert('Datos de producción daria almacenados exitosamente');

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      Alert.alert(
        'Error al registrar los datos de producción',
        `Hubo un error al registrar los datos de producción, porfavor revisa tu conexión a internet`,
      );
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

      dispatch(getPoductorasIdList());
    } catch (e) {}
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

      const records: IDailyRecordResponse = JSON.parse(
        response.request._response,
      );
      dispatch(setDailyRecordsByDate(records.records));
    } catch (e) {
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
    const path = `${API_BASE_PATH}/daily-prod-record/obtenerRegistrosIndividuales/${idVaca}`;
    try {
      const response = await axios.get(path);
      const records: IDailyRecordResponse = JSON.parse(
        response.request._response,
      );

      dispatch(setCurrentDailyRecords(records.records));
    } catch (e) {}
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
    } catch (e) {
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

      dispatch(setSanityRecord(axiosResponse.data.record));
    } catch (e) {
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

      dispatch(getSanityRecordById(payload.idVaca));
    } catch (e) {
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
    } catch (e) {}
  };
};

export const getAllReproductionRecords = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/getAll`;

    try {
      const response = await axios.get<{
        message: string;
        records: IReproductionRecord[];
      }>(path);

      dispatch(setAllReproductionRecords(response.data.records));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener los registros de reproducción`,
        'El registro no existe o no hay un problema con la conexión',
      );
    }
  };
};

export const getInseminacionesMontasByMonth = (
  monthYear: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/inseminacionesMontas/${monthYear}`;

    try {
      const response = await axios.get<{
        message: string;
        montasIa: IMontaIaReportTableInfo[];
      }>(path);

      const montaIaReportData = response.data.montasIa;

      dispatch(setMontaIaReportData(montaIaReportData));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener el reporte de Monta / Ia`,
        'El reporte no pudo ser generado o no hay un problema con la conexión',
      );
    }
  };
};

export const getPreñezReportInfoByMonth = (
  monthYear: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/reproduction-register/preniez/${monthYear}`;

    try {
      const resposne = await axios.get<{
        message: string;
        preniezDataReport: IPreniezDataReportInfo[];
      }>(path);

      dispatch(setPreniezReportData(resposne.data.preniezDataReport));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener el reporte de Preñez`,
        'El reporte no pudo ser generado o no hay un problema con la conexión',
      );
    }
  };
};

export const updatePartialMainCowRecord = (payload: {
  idVaca: string;
  partialCow: Partial<ICow>;
}): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/cow/update/updatePartial`;

    try {
      const response = await axios.patch(path, payload);

      // @ts-ignore
      dispatch(setCow(response.data.updatedCow));
    } catch (e) {
      Alert.alert(
        `No se pudo actualizar el registro master`,
        'El registro master no pudo ser actualizado, porfavor contactese con el administrador',
      );
    }
  };
};

export const getInventoryCows = (
  monthYear: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    const path = `${API_BASE_PATH}/inventori-history-cows/getByMonth/${monthYear}`;

    try {
      const response = await axios.get<{
        message: string;
        firstTableData: IInventoryCowFirstTable[];
        secondTableReport: IInventoryCowSecondTable[];
      }>(path);

      dispatch(setInventoryFirstTable(response.data.firstTableData));

      dispatch(setSecondTable(response.data.secondTableReport));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener la información`,
        'Hubo un error al obtener los registros de inventario de animales, revise su conexión a internet',
      );
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const getDeathCertificateNumber = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/death-certificates/getCount`;

    try {
      const response = await axios.get<{
        message: string;
        counter: {counterId: string; count: number};
      }>(path);

      dispatch(setDeathCertificateCounter(response.data.counter.count));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener el número de documento`,
        'Hubo un error al obtener el número de certificado, revise su conexión a internet',
      );
    }
  };
};

export const saveDeathCertificateInDB = (
  payload: IDeathCertificate,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/death-certificates/createCertificate`;

    try {
      const response = await axios.post<
        IDeathCertificate,
        AxiosResponse<{
          message: SVGFESpecularLightingElement;
          createdCertificate: IDeathCertificate;
          updatedCow: ICow;
        }>
      >(path, payload);

      Alert.alert('Animal descartado con éxito');
    } catch (e) {
      Alert.alert(
        `No se pudo crear el certificado`,
        'Hubo un error al crear el certificado de defunción, revise su conexión a internet',
      );
    }
  };
};

export const getAllCertificates = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/death-certificates/certifiactes`;

    try {
      const repsonse = await axios.get<{
        message: string;
        deathCertificates: IDeathCertificate[];
      }>(path);

      dispatch(setAllDeathCertificates(repsonse.data.deathCertificates));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener los certificados de defunción`,
        'Hubo un error al obtener los certificados de defunción, revise su conexión a internet',
      );
    }
  };
};

export const saveVacunaRecord = (
  idVaca: string,
  newVaccine: IVaccines,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/sanity-records/updateVaccines`;

    try {
      const saveRequest = {idVaca, newVaccine};

      const response = await axios.post<
        {idVaca: string; newVaccine: IVaccines},
        AxiosResponse<{message: string}>
      >(path, saveRequest);

      Alert.alert('Vacuna ingresada exitosamente');
      dispatch(getSanityRecordById(idVaca));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener crear las vacunas`,
        'Hubo un error al intentar ingresar la vacuna, revise su conexión a internet',
      );
    }
  };
};

export const saveDeworming = (
  idVaca: string,
  newDeworming: IDeworming,
  navigateToMainRecord: () => void,
  resetForm: () => void,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/sanity-records/updateDeworming`;

    try {
      const saveRequest = {idVaca, newDeworming};

      const response = await axios.post<
        {idVaca: string; newDeworming: IDeworming},
        AxiosResponse<{message: string}>
      >(path, saveRequest);

      if (response.data.message === 'ok') {
        navigateToMainRecord();
        resetForm();
      }

      Alert.alert('Desparacitación ingresada exitosamente');
      dispatch(getSanityRecordById(idVaca));
    } catch (e) {
      // @ts-ignore
      if (e.request.status === 409) {
        // @ts-ignore
        const errorMesage = JSON.parse(e.request._response).message;
        Alert.alert(`No se pudo guardar el desparacitante`, `${errorMesage}`);
        return;
      }

      Alert.alert(
        `No se pudo guardar el desparacitante`,
        `Ocurrió un error desconocido, contactese con el administrador`,
      );
    }
  };
};

export const getOnstokStrawList = (): ThunkAction<
  void,
  IAppState,
  undefined,
  IAppAction
> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/straws/onStock`;

    try {
      const response = await axios.get<{message: string; straws: IStraw[]}>(
        path,
      );

      dispatch(setStrawList(response.data.straws));
    } catch (e) {
      Alert.alert(
        `No se pudo obtener la lista de pajuelas`,
        `Ocurrió un error desconocido, contactese con el administrador`,
      );
    }
  };
};

export const decrementStockStraw = (
  idStraw: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    const path = `${API_BASE_PATH}/straws/decrement/${idStraw}`;

    try {
      await axios.patch(path);
    } catch (e) {
      // @ts-ignore
      console.log(JSON.stringify(e.request._response));

      Alert.alert(
        `No se pudo registrar el uso de la pajuela`,
        `Ocurrió un error desconocido, contactese con el administrador`,
      );
    }
  };
};

export const saveCowSale = (
  idVaca: string,
): ThunkAction<void, IAppState, undefined, IAppAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, any, IAppAction>,
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    const path = `${API_BASE_PATH}/cow-sales/saveSale`;

    try {
      const resposne = await axios.post(path, {idVaca});
      dispatch(setIsLoading(false));
      Alert.alert('Animal descartado por VENTA registrado Exitosamente');
    } catch (e) {
      dispatch(setIsLoading(false));
      Alert.alert(
        `No se pudo registrar la venta del ejemplar`,
        `Ocurrió un error al registrar la venta del animal, verifique su conexión a internet`,
      );
    }
  };
};
