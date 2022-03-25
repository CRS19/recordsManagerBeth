import React, {useEffect, useState} from 'react';
import {Alert, AlertButton, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {DescarteBottom} from '../../../components/Buttoms/DescarteBottom';
import {SaveButtom} from '../../../components/Buttoms/SaveButtom';
import {AddImage} from '../../../components/Images/AddImagesButtom/AddImage';
import {GestacionInputCard} from '../../../components/InputCard/GestacionInputCard';
import {InputCard} from '../../../components/InputCard/InputCard';
import {InputCardCaracteristics} from '../../../components/InputCard/InputCardCaracteristics';
import {LactanciaInputCard} from '../../../components/InputCard/LactanciaInputCard';
import {ChooseSexModal} from '../../../components/Modals/ChooseSexModal';
import {DatePickerModal} from '../../../components/Modals/DatePickerModal';
import {RazaPickerModal} from '../../../components/Modals/RazaPickerModal';
import {ThreeFieldModal} from '../../../components/Modals/ThreeFieldModal';
import {TwoFieldModal} from '../../../components/Modals/TwoFieldModal';
import {InputPeso} from '../../../components/PesoHistory/InputPeso';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {ICowKeys} from '../../../constants/ICowKeysEnum';
import {RAZAS} from '../../../constants/Razas';
import {ICow} from '../../../interfaces/CowInterface';
import {
  createReproductionRecord,
  createSanityRecord,
  insertNewCow,
  setCow,
  setInsertNewCow,
  setIsNewborn,
  setNewCow,
  updateReproductionRecord,
} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {styles} from '../../../theme/GlobalStyles';
import {emptyCow} from '../../../VaquitasPrueba/vacas';
import {cloneDeep, isEmpty, set} from 'lodash';
import {useNavigation} from '@react-navigation/core';
import {LoadingModal} from '../../../components/Modals/LoadingModal';
import {useTime} from '../../../custom/useTime';
import {RecordReproductionType} from '../../../interfaces/ReproductionRecord';
import DatePicker from 'react-native-date-picker';

export const MainRecord = () => {
  console.log('DEBUG: main records render');
  const navigation = useNavigation();
  const {getEcuatorTimestamp} = useTime();
  const [insertCow, setInsertCow] = useState<ICow>(emptyCow);
  const dispatch = useDispatch();
  const isNewBorn = useSelector((state: IAppState) => state.isNewBorn!);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openChooseSexModal, setOpenChooseSexModal] = useState<boolean>(false);
  const [openDatePickModal, setOpenDatePickModal] = useState<boolean>(false);
  const [openMomDataModal, setOpenMomDataModal] = useState<boolean>(false);
  const [openDadDataModal, setOpenDadDataModal] = useState<boolean>(false);
  const [openEdadPartoModal, setOpenEdadPartoModal] = useState<boolean>(false);
  const [infoCardFinish, setInfoCardFinish] = useState<boolean>(false);
  const [infoCardLactanciasFinish, setInfoCardLactanciasFinish] =
    useState<boolean>(false);
  const [infoCardGestationFinish, setInfoCardGestationFinish] =
    useState<boolean>(false);
  const [propertyFecha, setPropertyFecha] = useState<ICowKeys>(
    ICowKeys.fechaDeNacimiento,
  );
  const reproductionRecord = useSelector(
    (state: IAppState) => state.reproductionRecord!,
  );
  // RECIBIR EL PARAMETRO INICIAL POR PROPSPARA SABER SI ES INICIADA POR PARTO O COMPRADA
  const [hasMomDad, setHasMomDad] = useState<boolean>(false);
  const [validInfoCard, setValidInfoCard] = useState<boolean>(false);

  const [isUploadPhotos, setIsUploadPhotos] = useState<{
    phothoOne: Boolean;
    phothoTwo: Boolean;
  }>({phothoOne: false, phothoTwo: false});

  const [openRazaPickerModal, setOpenRazaPickerModal] =
    useState<boolean>(false);

  const handleWeigth = () => {
    insertCow.pesoActual = insertCow.pesoNacimiento;
  };

  const verifyFormCompleted = () => {
    const arePhotosUploaded =
      isUploadPhotos.phothoOne && isUploadPhotos.phothoTwo;

    return arePhotosUploaded === true &&
      infoCardFinish === true &&
      infoCardGestationFinish === true &&
      infoCardLactanciasFinish === true
      ? true
      : false;
  };

  const showAlert = (
    title: string,
    message: string,
    buttons?: AlertButton[],
  ) => {
    isEmpty(buttons)
      ? Alert.alert(title, message)
      : Alert.alert(title, message, buttons);
  };

  const saveNewCow = () => {
    const idVaca = `${insertCow.nombre.toLowerCase()}-${
      insertCow.numeroDeArete
    }`;
    if (insertCow.sexo === 'HEMBRA') {
      if (verifyFormCompleted()) {
        SaveCow(idVaca);
      } else {
        showAlert(
          'Formulario Incompleto',
          'Porfavor, asegurese de llenar todo el formulario.',
        );
      }
    } else {
      isUploadPhotos.phothoOne &&
      isUploadPhotos.phothoTwo &&
      infoCardFinish === true
        ? SaveCow(idVaca)
        : showAlert(
            'Formulario Incompleto',
            'Porfavor, asegurese de llenar todo el formulario.',
          );
    }
  };

  const finishMotherReproductionRecord = () => {
    const record = cloneDeep(reproductionRecord);
    set(
      record.records[record.records.length - 1],
      'nombreYNumeroDeLaCria',
      `${insertCow.nombre.toLowerCase()}-${insertCow.numeroDeArete}`,
    );
    set(
      record.records[record.records.length - 1],
      'pesoDeLaCria',
      `${insertCow.pesoNacimiento}`,
    );
    set(
      record.records[record.records.length - 1],
      'recordType',
      RecordReproductionType.PARTO,
    );

    dispatch(updateReproductionRecord(record));
  };

  const SaveCow = (idVaca: string) => {
    //Agregar aquí la creación de los demas regístros
    setIsLoading(true);
    dispatch(insertNewCow(insertCow));
    dispatch(
      createReproductionRecord({
        idVaca,
        pesoNacimiento: insertCow.pesoNacimiento,
        sex: insertCow.sexo,
      }),
    );
    dispatch(createSanityRecord(idVaca));
    if (isNewBorn) finishMotherReproductionRecord();
    dispatch(setIsNewborn(false));
    setIsLoading(false);
    showAlert(
      `Animal: ${idVaca} ingresado exitosamente`,
      '¿Desea ingresar un nuevo animal?',
      [
        {
          text: 'No',
          onPress: () => {
            dispatch(setInsertNewCow(false));
            navigation.goBack();
          },
          style: 'cancel',
        },
        {
          text: 'Si',
          onPress: () => clearPage(),
          style: 'default',
        },
      ],
    );
  };

  const clearPage = () => {
    setInfoCardFinish(false);
    setInfoCardLactanciasFinish(false);
    setInfoCardGestationFinish(false);
    setInsertCow(emptyCow);
  };

  const onSaveIdentification = () => {
    //LLAMADA AXIOS PARA GUARDAR LA INFO
    handleWeigth();
    dispatch(setNewCow(insertCow));
    setInfoCardFinish(true);
  };
  const onSaveCaracteristics = () => {
    dispatch(setNewCow(insertCow));
  };

  const onSaveLactancia = () => {
    setInfoCardLactanciasFinish(true);
  };

  const onSaveGestacion = () => {
    setInfoCardGestationFinish(true);
  };

  useEffect(() => {
    if (isNewBorn) {
      const updateCow = cloneDeep(insertCow);

      const nombreMadreArete = reproductionRecord.idVaca.split('-');
      const nombrePadreArete =
        reproductionRecord.records[
          reproductionRecord.records.length - 1
        ].idReproductor.split('-');

      set(updateCow, 'nombreDeMadre', nombreMadreArete[0]);
      set(updateCow, 'numeroAreteMadre', nombreMadreArete[1]);
      set(updateCow, 'nombreDePadre', nombrePadreArete[0]);
      set(updateCow, 'numeroAretePadre', nombrePadreArete[1]);
      set(updateCow, 'fechaDeNacimiento', getEcuatorTimestamp());

      setInsertCow(updateCow);
    }
  }, [isNewBorn]);

  useEffect(() => {
    setOpenDatePickModal(false);
  });

  console.log('DEBUG: Open date picker modal -> ', openDatePickModal);
  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro Master'}
        findIcon={false}
        backIcon={false}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <AddImage
              index={0}
              newCow={insertCow}
              isUploadPhotos={isUploadPhotos}
              setIsUploadPhotos={setIsUploadPhotos}
            />
            <AddImage
              index={1}
              newCow={insertCow}
              isUploadPhotos={isUploadPhotos}
              setIsUploadPhotos={setIsUploadPhotos}
            />
            <TouchableOpacity
              onPress={() => {
                console.log(JSON.stringify(insertCow, null, 3));
              }}>
              <Text>abrir modal</Text>
            </TouchableOpacity>
          </View>
          {/* rigth part */}

          <ScrollView>
            <View style={{flexDirection: 'row-reverse'}}>
              <View style={{alignItems: 'center', marginRight: 25}}>
                <DescarteBottom />
                <SaveButtom onPress={saveNewCow} />
              </View>
              <View>
                <GeneralTitle title={'Identificación'} />

                <View style={styles.RigthGenericTabContainer}>
                  <View>
                    <View
                      style={{
                        width: 340,
                        height: 430,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCard
                        isSaved={infoCardFinish}
                        value={insertCow!}
                        setValue={setInsertCow}
                        openSexChooseModal={setOpenChooseSexModal}
                        openDatePickerModal={setOpenDatePickModal}
                        openRazaPickerModal={setOpenRazaPickerModal}
                        onSave={onSaveIdentification}
                        setPropertyFecha={setPropertyFecha}
                      />
                    </View>
                    <View
                      style={{
                        width: 340,
                        height: 160,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputPeso
                        title1={'Nacimiento'}
                        title2={'Peso al Deste'}
                        title3={'Peso Actual'}
                        value1={`${insertCow.pesoNacimiento}`}
                        value2={`${insertCow.pesoAlDestete}`}
                        value3={`${insertCow.pesoActual}`}
                      />
                    </View>
                    {insertCow.sexo === 'HEMBRA' ? (
                      <View
                        style={{
                          backgroundColor: '#00FFD5',
                          width: 340,
                          height: 264,
                          marginLeft: 40,
                          marginBottom: 20,
                        }}>
                        <LactanciaInputCard
                          value={insertCow}
                          setValue={setInsertCow}
                          onSave={onSaveLactancia}
                          isSaved={infoCardLactanciasFinish}
                        />
                      </View>
                    ) : (
                      <View />
                    )}
                  </View>
                  <View>
                    <View
                      style={{
                        backgroundColor: '#03DAC5',
                        width: 337,
                        height: 373,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCardCaracteristics
                        value={insertCow!}
                        setValue={setInsertCow}
                        onSave={onSaveCaracteristics}
                        hasMomDad={hasMomDad}
                        openMomDataModal={setOpenMomDataModal}
                        setOpenDadDataModal={setOpenDadDataModal}
                        isInsert={true}
                      />
                    </View>

                    {insertCow.sexo === 'HEMBRA' ? (
                      <View
                        style={{
                          backgroundColor: '#FF0000',
                          width: 337,
                          height: 312,
                          marginLeft: 40,
                          marginBottom: 20,
                        }}>
                        <GestacionInputCard
                          value={insertCow}
                          setValue={setInsertCow}
                          openEdadPrimerPartoModal={setOpenEdadPartoModal}
                          setPropertyFecha={setPropertyFecha}
                          onSave={onSaveGestacion}
                          isSaved={infoCardGestationFinish}
                          openDatePickerModal={setOpenDatePickModal}
                        />
                      </View>
                    ) : (
                      <View />
                    )}
                    <View style={{height: 400, width: 300}} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <ChooseSexModal
        openCloseModal={openChooseSexModal}
        onCloseModal={setOpenChooseSexModal}
        setProperty={setInsertCow}
        cow={insertCow}
      />
      <DatePickerModal
        title={'SELECCIONE FECHA DE NACIMIENTO'}
        openCloseModal={false}
        onCloseModal={() => {}}
        setOpenCloseModal={setOpenDatePickModal}
        cow={insertCow}
        setProperty={setInsertCow}
        property={propertyFecha}
      />
      <RazaPickerModal
        title={'SELECCIONE UNA RAZA'}
        dataOptions={RAZAS}
        onCloseModal={() => {}}
        openCloseModal={openRazaPickerModal}
        setOpenCloseModal={setOpenRazaPickerModal}
        cow={insertCow}
        setProperty={setInsertCow}
      />
      <TwoFieldModal
        title="Ingrese datos de la Madre"
        openCloseModal={openMomDataModal}
        setOpenCloseModal={setOpenMomDataModal}
        onCloseModal={() => {}}
        cow={insertCow}
        setProperty={setInsertCow}
        propertyOne={ICowKeys.nombreDeMadre}
        propertyTwo={ICowKeys.numeroAreteMadre}
      />
      <TwoFieldModal
        title="Ingrese datos del Padre"
        openCloseModal={openDadDataModal}
        setOpenCloseModal={setOpenDadDataModal}
        onCloseModal={() => {}}
        cow={insertCow}
        setProperty={setInsertCow}
        propertyOne={ICowKeys.nombreDePadre}
        propertyTwo={ICowKeys.numeroAretePadre}
      />
      <ThreeFieldModal
        title="Ingrese edad al primer parto"
        openCloseModal={openEdadPartoModal}
        setOpenCloseModal={setOpenEdadPartoModal}
        onCloseModal={() => {}}
        cow={insertCow}
        setProperty={setInsertCow}
      />
      {openDatePickModal && (
        <DatePicker
          modal
          title={'SELECCIONE FECHA DE NACIMIENTO'}
          date={new Date()}
          open={true}
          mode={'date'}
          locale="es"
          onConfirm={date => {
            setInsertCow({...insertCow, [propertyFecha]: date.getTime()});
            setOpenDatePickModal(false);
          }}
          onCancel={() => setOpenDatePickModal(false)}
        />
      )}
      {isLoading && (
        <LoadingModal openCloseModal={isLoading} title={'Cargando...'} />
      )}
    </View>
  );
};
