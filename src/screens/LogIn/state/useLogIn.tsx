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

  const validar = () => console.log('validar');

  return {
    username,
    password,
    validar,
    setUsername,
    setPassword,
  };
};
