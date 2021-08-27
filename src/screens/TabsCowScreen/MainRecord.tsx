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
import {ChooseSexModal} from '../../components/Modals/ChooseSexModal';
import {DatePickerModal} from '../../components/Modals/DatePickerModal';
import {RazaPickerModal} from '../../components/Modals/RazaPickerModal';
import {TopBar} from '../../components/TopBar';
import {RAZAS} from '../../constants/Razas';
import {ICow} from '../../interfaces/CowInterface';
import {setCow} from '../../store/actionCreators';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {emptyCow} from '../../VaquitasPrueba/vacas';

export const MainRecord = () => {
  console.log('DEBUG: main records render');
  const dispatch = useDispatch();
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const icon = require('../../assets/Images/registro/p.png');
  const [openChooseSexModal, setOpenChooseSexModal] = useState<boolean>(false);
  const [openDatePickModal, setOpenDatePickModal] = useState<boolean>(false);
  const [openRazaPickerModal, setOpenRazaPickerModal] =
    useState<boolean>(false);
  const [newCow, setNewCow] = useState<ICow>(emptyCow);
  const onSaveIdentification = () => {
    console.log('guardar identificación');
  };
  const onSaveCaracteristics = () => {
    dispatch(newCow);
  };

  const onSaveDestete = () => {
    console.log('guardar caracteristicas');
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
                console.log(JSON.stringify(newCow, null, 3));
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
                <View
                  style={{
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.RegisterTitleGeneric}>
                    Identificación
                  </Text>
                  <View style={styles.RegisterTitleUnderLine} />
                </View>

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
                        value={newCow!}
                        setValue={setNewCow}
                        openSexChooseModal={setOpenChooseSexModal}
                        openDatePickerModal={setOpenDatePickModal}
                        openRazaPickerModal={setOpenRazaPickerModal}
                        onSave={onSaveIdentification}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#EFFF0A',
                        width: 340,
                        height: 160,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}></View>
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
                        value={newCow!}
                        setValue={setNewCow}
                        onSave={onSaveCaracteristics}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#3205AF',
                        width: 337,
                        height: 188,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}></View>
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
        setProperty={setNewCow}
        cow={newCow}
      />
      <DatePickerModal
        title={'SELECCIONE FECHA DE NACIMIENTO'}
        openCloseModal={openDatePickModal}
        onCloseModal={() => {}}
        setOpenCloseModal={setOpenDatePickModal}
        cow={newCow}
        setProperty={setNewCow}
      />
      <RazaPickerModal
        title={'SELECCIONE UNA RAZA'}
        dataOptions={RAZAS}
        onCloseModal={() => {}}
        openCloseModal={openRazaPickerModal}
        setOpenCloseModal={setOpenRazaPickerModal}
        cow={newCow}
        setProperty={setNewCow}
      />
    </View>
  );
};
