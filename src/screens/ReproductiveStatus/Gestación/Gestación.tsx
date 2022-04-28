import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {BorderButtom} from '../../../components/Buttoms/BorderButtom';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {PreniezReportTable} from '../../../components/Tables/PreniezReportTable/PreniezReportTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';
import {styles} from '../../../theme/GlobalStyles';
import {useCreatePdf} from '../../../utils/useCreatePdf';
import {useGestation} from './state/useGestation';

export const Gestación = () => {
  const {preniezTableData} = useGestation();
  const {createPreniezReport} = useCreatePdf();

  return (
    <View>
      <TopBar backIcon={true} title="Preñez" />
      <ScrollView horizontal={true}>
        <ScrollView>
          <GeneralTitle title="Preñez" width={1080} />
          <CalendarButtom
            calendarAction={CalendarActionsEnum.GET_PREÑEZ_MONTA}
          />
          <PreniezReportTable preniezTableData={preniezTableData} />
          <View style={{marginTop: 20}}>
            <BorderButtom
              title="Imprimir"
              onPress={() => createPreniezReport(preniezTableData)}
            />
          </View>
          <View style={{...styles.LogInFooter, marginTop: 450}} />
        </ScrollView>
      </ScrollView>
    </View>
  );
};
