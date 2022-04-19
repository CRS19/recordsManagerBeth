import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BorderButtom} from '../../../components/Buttoms/BorderButtom';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {InseminationMontaTable} from '../../../components/Tables/InseminationMontaTable/InseminationMontaTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';
import {IMontaIaReportTableInfo} from '../../../interfaces/ReproductionRecord';
import {styles} from '../../../theme/GlobalStyles';
import {useCreatePdf} from '../../../utils/useCreatePdf';
import {useInseminationMonta} from './state/useInseminationMonta';

export const InseminaciónMonta = () => {
  const {montaIaReportTableData} = useInseminationMonta();
  const {createInseminationMontaReport} = useCreatePdf();

  return (
    <View>
      <TopBar backIcon={true} title=" InseminaciónMonta"></TopBar>
      <ScrollView horizontal={true}>
        <ScrollView>
          <GeneralTitle title="Inseminaciones / montas" />
          <CalendarButtom
            calendarAction={CalendarActionsEnum.GET_INSEMINACIONES_MONTAS}
          />
          <InseminationMontaTable montaIaReportData={montaIaReportTableData} />
          <View style={{marginTop: 30}}>
            <BorderButtom
              title="Imprimir"
              onPress={() =>
                createInseminationMontaReport(montaIaReportTableData)
              }
            />
          </View>
          <View style={{height: 350}} />
          <View style={{...styles.LogInFooter}} />
        </ScrollView>
      </ScrollView>
    </View>
  );
};
