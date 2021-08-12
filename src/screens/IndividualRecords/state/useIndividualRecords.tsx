import React, {Dispatch, SetStateAction, useState} from 'react';

interface IUseIndividualRecords {
  precioCarne: number;
  precioLeche: number;
  guardarPrecioCarne: (value: number) => void;
  guardarPrecioLeche: (value: number) => void;
  openCloseModalCarne: boolean;
  openCloseModalLeche: boolean;
  setOpenCloseModalCarne: Dispatch<SetStateAction<boolean>>;
  setOpenCloseModalLeche: Dispatch<SetStateAction<boolean>>;
}

export const useIndividualRecords = (): IUseIndividualRecords => {
  const [openCloseModalCarne, setOpenCloseModalCarne] = useState(false);
  const [openCloseModalLeche, setOpenCloseModalLeche] = useState(false);
  const [precioCarne, setPrecioCarne] = useState(0);
  const [precioLeche, setPrecioLeche] = useState(0);

  const guardarPrecioCarne = (precio: number) => {
    setPrecioCarne(precio);
    setOpenCloseModalCarne(false);
  };

  const guardarPrecioLeche = (precio: number) => {
    setPrecioLeche(precio);
    setOpenCloseModalLeche(false);
  };

  return {
    precioCarne,
    precioLeche,
    guardarPrecioCarne,
    openCloseModalCarne,
    openCloseModalLeche,
    setOpenCloseModalCarne,
    setOpenCloseModalLeche,
    guardarPrecioLeche,
  };
};
