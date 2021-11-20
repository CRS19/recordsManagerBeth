import {cloneDeep, isNil} from 'lodash';
import {Dispatch, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IControlGinecologicoProps} from '../../../../components/ReproductionComponents/ControlGinecologico';
import {IGeneralControlProps} from '../../../../components/ReproductionComponents/GeneralControl';
import {
  IReproductionRecord,
  Record,
  RegistroPalp,
} from '../../../../interfaces/ReproductionRecord';
import {updateReproductionRecord} from '../../../../store/actionCreators';
import {recordSinTipo} from '../../../../utils/recordsTemplates/reproduction_template';

interface IUseCenterView {
  controlGinecologico: IControlGinecologicoProps;
  controlServicio: IGeneralControlProps;
  controlMonta: IGeneralControlProps;
}

interface IUseCenterViewProps {
  openCloseIaModal: (isOpen: boolean) => void;
  currentRecordSinType: Record;
  record: IReproductionRecord;
  currentRecord: Record | undefined;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const useCenterView = ({
  openCloseIaModal,
  currentRecordSinType,
  record,
  currentRecord,
  setIsLoading,
}: IUseCenterViewProps): IUseCenterView => {
  const dispatch = useDispatch();
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

    if (isNil(currentRecordSinType)) {
      console.log('DEBUG: llamado al endpoint');
      const newRecord = cloneDeep(recordSinTipo);
      setIsLoading(true);
      record.records.push(newRecord);
      dispatch(updateReproductionRecord(record));
      setIsLoading(false);
    } else {
      console.log(
        'EL REGISTRO ES: ',
        JSON.stringify(currentRecordSinType, null, 3),
      );
    }
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

  useEffect(() => {
    if (!isNil(currentRecord)) {
      setIsChequeoBtnActive(false);
    }
  }, [currentRecord]);

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
