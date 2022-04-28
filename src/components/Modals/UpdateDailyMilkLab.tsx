import {isNaN} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IDailyMilkLabData} from '../../interfaces/DailyMilkLab';
import {updateMilkRegisterLab} from '../../store/actionCreators';
import {styles} from '../../theme/GlobalStyles';
import {getTimestamp, isMorning} from '../../utils/time-utils';
import {BorderButtom} from '../Buttoms/BorderButtom';

export interface IUpdateDailyMilkLab {
  title: string;
  openCloseModal: boolean;
  totalVacas: number;
  setOpenCloseModal: () => void;
}

export const UpdateDailyMilkLab = (props: IUpdateDailyMilkLab) => {
  const dispatch = useDispatch();
  const {title, openCloseModal, setOpenCloseModal, totalVacas} = props;

  const [labMilk, setLabMilk] = useState('0');
  const [calfMilk, setCalfMilk] = useState('0');

  const [keyboardSize, setKeyboardSize] = React.useState(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardSize(e.endCoordinates.height);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const dayMoment = isMorning() ? 'Mañana' : 'Tarde';

  const showInputAlert = () => {
    Alert.alert('Porfavor ingrese una cantidad válida', 'Ejemplo: 26.2');
  };

  const onSave = () => {
    dispatch(updateMilkRegisterLab(buildRequestObject()));
    setOpenCloseModal();
  };

  const buildRequestObject = (): Partial<IDailyMilkLabData> => {
    const timestamp = getTimestamp();
    return isMorning()
      ? {
          timestamp,
          morningLab: Number(labMilk),
          morningCalf: Number(calfMilk),
          totalCows: totalVacas,
        }
      : {
          timestamp,
          aftermoonLab: Number(labMilk),
          aftermoonCalf: Number(calfMilk),
          totalCows: totalVacas,
        };
  };

  useEffect(() => {
    if (isNaN(Number(labMilk))) {
      showInputAlert();
      setLabMilk('0');
    }
    if (isNaN(Number(calfMilk))) {
      showInputAlert();
      setCalfMilk('0');
    }
  }, [labMilk, calfMilk]);

  return (
    <ScrollView>
      <Modal
        animationType="fade"
        visible={openCloseModal}
        onRequestClose={() => setOpenCloseModal()}
        transparent={true}
        statusBarTranslucent>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setOpenCloseModal()}
          style={[styles.ModalGeneralStyle, {marginBottom: keyboardSize}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            style={{backgroundColor: 'red'}}
            onPress={() => {}}>
            <View style={{...styles.ModalOneFieldContainer, height: 400}}>
              <View style={styles.ModalOneFieldInputPosition}>
                <Text style={styles.ModalOneFieldTitle}>{title}</Text>
                <View style={{marginVertical: 20, alignItems: 'center'}}>
                  <Text>{`Laboratoreo de Lacteos ${dayMoment}`}</Text>
                  <View>
                    <TextInput
                      style={styles.InputMilkLab}
                      keyboardType={'decimal-pad'}
                      selectTextOnFocus={true}
                      value={`${labMilk.toString()}`}
                      onChangeText={text => {
                        // validar
                        setLabMilk(text);
                      }}
                    />
                    <Text style={styles.InputMaskLabSufix}>lt</Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>{`Terneros ${dayMoment}`}</Text>
                  <View>
                    <TextInput
                      style={styles.InputMilkLab}
                      keyboardType={'decimal-pad'}
                      selectTextOnFocus={true}
                      value={calfMilk.toString()}
                      onChangeText={text => {
                        // validar
                        setCalfMilk(text);
                      }}
                    />
                    <Text style={styles.InputMaskLabSufix}>lt</Text>
                  </View>
                </View>
                <View style={{marginTop: 20}}>
                  <BorderButtom title="Guardar" onPress={() => onSave()} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};
