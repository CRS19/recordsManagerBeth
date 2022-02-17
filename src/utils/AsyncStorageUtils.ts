import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosRequestConfig} from 'axios';

export const getJwt = async (config: any): Promise<AxiosRequestConfig<any>> => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
};
