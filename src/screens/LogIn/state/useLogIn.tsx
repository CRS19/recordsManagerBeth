import {useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useState} from 'react';

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
    navigation.navigate('DrawerNavigator');
  };

  return {
    username,
    password,
    validar,
    setUsername,
    setPassword,
  };
};
