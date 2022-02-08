import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BallButtom} from '../../../components/Buttoms/BallButtom';
import {BorderButtom} from '../../../components/Buttoms/BorderButtom';
import {AddNewDrugModal} from '../../../components/Modals/AddNewDrugModal';
import {LoadingModal} from '../../../components/Modals/LoadingModal';
import {DrugViewTable} from '../../../components/Tables/DrugViewTable/DrugViewTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {useCreatePdf} from '../../../utils/useCreatePdf';
import {useFarmacos} from './state/useFarmacos';

export const Farmacos = () => {
  const {
    openNewDrugsModal,
    openDatePickerModal,
    drugsList,
    isLoading,
    setOpenDrugsModal,
    openCloseDatePickerModal,
    newDrug,
    setNewDrug,
    setExpDate,
    onSaveNewDrug,
    onDeleteDrug,
  } = useFarmacos();

  const {createDrugsInventoryReport} = useCreatePdf();

  console.log('PERFORMANCE: farmacos screen render');

  return (
    <View>
      <TopBar title="Fármacos" backIcon={true} />
      <ScrollView>
        <View style={{marginTop: 15}}>
          <GeneralTitle title="Inventario Farmacológico" width={1180} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 40,
            }}>
            <BallButtom onPress={() => setOpenDrugsModal(true)} title={'+'} />
            <Text style={{fontSize: 18}}>Agregar fármaco</Text>
          </View>
          <DrugViewTable drugs={drugsList} onDeleteDrug={onDeleteDrug} />
          <View style={{marginTop: 40}}>
            <BorderButtom
              title="descargar pdf"
              onPress={() => createDrugsInventoryReport(drugsList)}
            />
          </View>
          <View style={{height: 300}} />
        </View>
      </ScrollView>
      <LoadingModal
        title="Guardando nuevo farmaco"
        openCloseModal={isLoading}
      />
      <AddNewDrugModal
        openCloseModal={openNewDrugsModal}
        closeModal={onSaveNewDrug}
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
