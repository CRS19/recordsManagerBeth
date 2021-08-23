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
import {useSelector} from 'react-redux';
import {AddImage} from '../../components/Images/AddImagesButtom/AddImage';
import {InputCard} from '../../components/InputCard/InputCard';
import {ChooseSexModal} from '../../components/Modals/ChooseSexModal';
import {TopBar} from '../../components/TopBar';
import {ICow} from '../../interfaces/CowInterface';
import {setCow} from '../../store/actionCreators';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {emptyCow} from '../../VaquitasPrueba/vacas';

export const MainRecord = () => {
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);
  const icon = require('../../assets/Images/registro/p.png');
  const [openChooseSexModal, setOpenChooseSexModal] = useState<boolean>(false);
  const [newCow, setNewCow] = useState<ICow>(emptyCow);

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
                        backgroundColor: '#03DAC5',
                        width: 340,
                        height: 430,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCard
                        value={newCow!}
                        setValue={setNewCow}
                        openSexChooseModal={setOpenChooseSexModal}
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
                      }}></View>
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
    </View>
  );
};
