import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Alert} from 'react-native';
import {API_BASE_PATH} from '../../../env/environment';

interface IuseLogIn {
  username: string;
  password: string;
  validar: () => void;
  setPassword: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
}

export const useLogIn = (): IuseLogIn => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const validar = () => {
    console.log('validar');
    console.log('navegar a estación...');
    updateCategories();
    navigation.navigate('DrawerNavigator');
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

  return {
    username,
    password,
    validar,
    setUsername,
    setPassword,
  };
};
