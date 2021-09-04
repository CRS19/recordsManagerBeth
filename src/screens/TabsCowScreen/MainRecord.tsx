import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {AddImage} from '../../components/Images/AddImagesButtom/AddImage';
import {InputCard} from '../../components/InputCard/InputCard';
import {InputCardCaracteristics} from '../../components/InputCard/InputCardCaracteristics';
import {InputCardDestete} from '../../components/InputCard/InputCardDestete';
import {ChooseSexModal} from '../../components/Modals/ChooseSexModal';
import {DatePickerModal} from '../../components/Modals/DatePickerModal';
import {RazaPickerModal} from '../../components/Modals/RazaPickerModal';
import {TwoFieldModal} from '../../components/Modals/TwoFieldModal';
import {InputPeso} from '../../components/PesoHistory/InputPeso';
import {GeneralTitle} from '../../components/Titles/GeneralTitle';
import {TopBar} from '../../components/TopBar';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {RAZAS} from '../../constants/Razas';
import {ICow} from '../../interfaces/CowInterface';
import {setCow, setNewCow} from '../../store/actionCreators';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {emptyCow} from '../../VaquitasPrueba/vacas';

export const MainRecord = () => {
  console.log('DEBUG: main records render');
  const [insertCow, setInsertCow] = useState<ICow>(emptyCow);
  const dispatch = useDispatch();
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const icon = require('../../assets/Images/registro/p.png');
  const [openChooseSexModal, setOpenChooseSexModal] = useState<boolean>(false);
  const [openDatePickModal, setOpenDatePickModal] = useState<boolean>(false);
  const [openMomDataModal, setOpenMomDataModal] = useState<boolean>(false);
  const [openDadDataModal, setOpenDadDataModal] = useState<boolean>(false);
  const [infoCardFinish, setInfoCardFinish] = useState<boolean>(false);
  const [infoCardDesteteFinish, setInfoCardDesteteFinish] =
    useState<boolean>(false);
  const [propertyFecha, setPropertyFecha] = useState<ICowKeys>(
    ICowKeys.fechaDeNacimiento,
  );
  // RECIBIR EL PARAMETRO INICIAL POR PROPSPARA SABER SI ES INICIADA POR PARTO O COMPRADA
  const [hasMomDad, setHasMomDad] = useState<boolean>(false);
  const [validInfoCard, setValidInfoCard] = useState<boolean>(false);

  const [openRazaPickerModal, setOpenRazaPickerModal] =
    useState<boolean>(false);

  const handleWeigth = () => {
    insertCow.pesoNacimiento = insertCow.pesoActual;
  };

  const onSaveIdentification = () => {
    console.log('guardar identificación');
    //LLAMADA AXIOS PARA GUARDAR LA INFO
    handleWeigth();
    dispatch(setNewCow(insertCow));
    setInfoCardFinish(true);
  };
  const onSaveCaracteristics = () => {
    dispatch(setNewCow(insertCow));
  };
  const onSaveDestete = () => {
    console.log('guardar caracteristicas :C');
  };

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
            <AddImage />
            <AddImage />
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
              <View>
                <Text>hola como ess</Text>
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
                        }}></View>
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
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#3205AF',
                        width: 337,
                        height: 188,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCardDestete
                        value={insertCow}
                        openDatePickerModal={setOpenDatePickModal}
                        setValue={setInsertCow}
                        onSave={onSaveDestete}
                        isSaved={infoCardDesteteFinish}
                        setPropertyFecha={setPropertyFecha}
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
                        }}></View>
                    ) : (
                      <View />
                    )}
                    <View style={{height: 200, width: 300}} />
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
        openCloseModal={openDatePickModal}
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
        onCloseModal={() => console.log('guardar')}
        cow={insertCow}
        setProperty={setInsertCow}
        propertyOne={ICowKeys.nombreDeMadre}
        propertyTwo={ICowKeys.numeroAreteMadre}
      />
      <TwoFieldModal
        title="Ingrese datos del Padre"
        openCloseModal={openDadDataModal}
        setOpenCloseModal={setOpenDadDataModal}
        onCloseModal={() => console.log('guardar')}
        cow={insertCow}
        setProperty={setInsertCow}
        propertyOne={ICowKeys.nombreDePadre}
        propertyTwo={ICowKeys.numeroAretePadre}
      />
    </View>
  );
};
