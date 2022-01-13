import {useState} from 'react';

export interface IUseMilkDailyRegister {
  MarginButtomProps: {
    errorMargin: string;
    setErrorMargin: React.Dispatch<React.SetStateAction<string>>;
    saveErrorMargin: () => void;
  };
}

export const useMilkDailyRegister = (): IUseMilkDailyRegister => {
  // TODO cambiar valor inicial tomarlo de la bas ed e datos
  const [errorMargin, setErrorMargin] = useState('5');

  const saveErrorMargin = () => {
    console.log('ACTION: cambiar el margen de error');
  };

  return {
    MarginButtomProps: {
      errorMargin,
      setErrorMargin,
      saveErrorMargin,
    },
  };
};
