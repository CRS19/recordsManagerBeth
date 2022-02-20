import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {API_BASE_PATH} from '../../../env/environment';
import {ILoggedInfo, UserRolEnum} from '../../../interfaces/LoggedInfo';
import {getLogIn, setLoggedInfo} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {get, isNil} from 'lodash';

interface IuseLogIn {
  mail: string;
  password: string;
  validar: () => void;
  setPassword: Dispatch<SetStateAction<string>>;
  setMail: Dispatch<SetStateAction<string>>;
}

export const useLogIn = (
  navigation: StackNavigationProp<any, any>,
): IuseLogIn => {
  const dispatch = useDispatch();
  const loggedInfo: ILoggedInfo = useSelector(
    (state: IAppState) => state.LoggedInfo!,
  );
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const validar = () => {
    console.log('validar', mail + ' ' + password);
    dispatch(getLogIn({mail, password}));
    console.log('navegar a estación...');
    updateCategories();
  };

  const updateCategories = () => {
    try {
      axios.get(`${API_BASE_PATH}/cow/updateCategory`);
    } catch (e) {
      console.log('Error de servidor', e);
      Alert.alert(
        'Error de servidor',
        'Fallo al intentar actualizar las categorias',
      );
    }
  };

  const validateJwtToken = async (jwtToken: string): Promise<boolean> => {
    const path = `${API_BASE_PATH}/auth/protegido`;

    const config = {
      headers: {Authorization: `Bearer ${jwtToken}`},
    };

    try {
      await axios.get(path, config);
      return true;
    } catch (e) {
      if (get(e, 'response.request._response', '') === '') {
        Alert.alert('Error de servidor', 'Compruebe su conexión a la red');
      }
      if (loggedInfo.isLoggedIn === true) {
        dispatch(
          setLoggedInfo({
            isLoggedIn: false,
            rol: UserRolEnum.ADMINISTRADOR,
          }),
        );
      }
      return false;
    }
  };

  const checkJwtTokenInStorage = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');

    if (!token || loggedInfo.isLoggedIn === false)
      console.log('mostrar el login');

    if (token) {
      console.log(token);
      const isTokenValid = await validateJwtToken(token);
      if (isTokenValid) {
        navigation.replace('DrawerNavigator');
        updateCategories();
      }
    }
  }, []);

  useEffect(() => {
    checkJwtTokenInStorage();
  }, [loggedInfo]);

  return {
    mail,
    password,
    validar,
    setMail,
    setPassword,
  };
};
