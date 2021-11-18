import {useState} from 'react';
import {IControlGinecologicoProps} from '../../../../components/ReproductionComponents/ControlGinecologico';
import {IGeneralControlProps} from '../../../../components/ReproductionComponents/GeneralControl';

interface IUseCenterView {
  controlGinecologico: IControlGinecologicoProps;
  controlServicio: IGeneralControlProps;
  controlMonta: IGeneralControlProps;
}

interface IUseCenterViewProps {
  openCloseIaModal: (isOpen: boolean) => void;
}

export const useCenterView = ({
  openCloseIaModal,
}: IUseCenterViewProps): IUseCenterView => {
  const [isCeloBtnActive, setIsCeloBtnActive] = useState<boolean>(false);
  const [isChequeoBtnActive, setIsChequeoBtnActive] = useState<boolean>(false);

  const [isServicioYes, setIsServicioYes] = useState<boolean>(false);
  const [isServicioNo, setIsServicioNo] = useState<boolean>(false);

  const [isMontaMonta, setIsMontaMonta] = useState<boolean>(false);
  const [isMontaIa, setIsMontaIa] = useState<boolean>(false);

  const onCeloClicked = () => {
    setIsCeloBtnActive(!isCeloBtnActive);
  };

  const onChequeoCliked = () => {
    setIsChequeoBtnActive(!isChequeoBtnActive);
  };

  const onServicioYesCliked = () => {
    setIsServicioYes(!isServicioYes);
  };

  const onServicioNoCliked = () => {
    setIsServicioNo(false);
    setIsCeloBtnActive(false);
  };

  const onMontaCliked = () => {
    setIsMontaMonta(!isMontaMonta);
  };

  const onIaCliked = () => {
    setIsMontaIa(!isMontaIa);
    openCloseIaModal(true);
    setIsMontaIa(false);
    setIsServicioYes(false);
    setIsCeloBtnActive(false);
  };

  return {
    controlGinecologico: {
      isCeloBtnActive,
      isChequeoBtnActive,
      onCeloClicked,
      onChequeoCliked,
    },
    controlServicio: {
      title: 'Servicio',
      tittleBtn1: 'si',
      tittleBtn2: 'no',
      isClikedBtn1: isServicioYes,
      isClikedBtn2: isServicioNo,
      onClikedBtn1: onServicioYesCliked,
      onClikedBtn2: onServicioNoCliked,
    },
    controlMonta: {
      title: 'Monta / IA',
      tittleBtn1: 'monta',
      tittleBtn2: 'ia',
      isClikedBtn1: isMontaMonta,
      isClikedBtn2: isMontaIa,
      onClikedBtn1: onMontaCliked,
      onClikedBtn2: onIaCliked,
    },
  };
};
