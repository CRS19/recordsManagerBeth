import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {BallButtom} from '../../../components/Buttoms/BallButtom';
import {AddNewDrugModal} from '../../../components/Modals/AddNewDrugModal';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {useFarmacos} from './state/useFarmacos';

export const Farmacos = () => {
  const {
    openNewDrugsModal,
    openDatePickerModal,
    setOpenDrugsModal,
    openCloseDatePickerModal,
    newDrug,
    setNewDrug,
    setExpDate,
  } = useFarmacos();

  return (
    <View>
      <TopBar title="Fármacos" backIcon={true} />
      <View style={{marginTop: 15}}>
        <GeneralTitle title="Inventario Farmacológico" width={1180} />
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}}>
          <BallButtom onPress={() => setOpenDrugsModal(true)} title={'+'} />
          <Text style={{fontSize: 18}}>Agregar fármaco</Text>
        </View>
      </View>
      <AddNewDrugModal
        openCloseModal={openNewDrugsModal}
        closeModal={() => console.log('jeeelp')}
        setOpenCloseModal={setOpenDrugsModal}
        DrugToInsert={newDrug}
        setNewDrug={setNewDrug}
        openCloseDatePickerModal={openCloseDatePickerModal}
      />
      {openDatePickerModal && (
        <DatePicker
          modal
          title={'Ingrese una fecha de caducidad'}
          date={new Date()}
          open={true}
          mode={'date'}
          locale="es"
          onConfirm={date => {
            console.log(date.getTime());
            setExpDate(date.getTime());
          }}
          onCancel={() => openCloseDatePickerModal(false)}
        />
      )}
    </View>
  );
};
