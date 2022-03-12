import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {DailyMilkLabTable} from '../../../components/Tables/DailyMilkLabTable/DailyMilkLabTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {get, isNil} from 'lodash';
import {InfoLabelView} from '../../../components/InfoLabelView/InfoLabelView';
import {MILK_COSTS, PROD_INFO} from '../../../constants/MilkLabConstants';
import {useProductionDiario} from './useProductionDiario';
import {useCreatePdf} from '../../../utils/useCreatePdf';
import {BorderButtom} from '../../../components/Buttoms/BorderButtom';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';

export const ProductionDiaria = () => {
  const {labRecords, GET_ACTION} = useProductionDiario();
  const {createProductionDiariaReport} = useCreatePdf();

  return (
    <View>
      <TopBar title="Producción Diaria" backIcon={true} />
      <ScrollView>
        <View style={{marginTop: 10}}>
          <GeneralTitle
            title="Producción Total diaria estación tunshi"
            width={1200}
          />
          <CalendarButtom calendarAction={CalendarActionsEnum.GET_DAILY_MILK} />

          <DailyMilkLabTable dataArray={get(labRecords, 'data', [])} />
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <View>
              {MILK_COSTS.map((titulo, index) => (
                <View key={`${titulo}`}>
                  <InfoLabelView
                    title={titulo}
                    value={GET_ACTION[titulo]}
                    hasBorderTop={index === 0}
                  />
                </View>
              ))}
            </View>
            <View style={{marginLeft: 45}}>
              {PROD_INFO.map((titulo, index) => (
                <View key={`${titulo}`}>
                  <InfoLabelView
                    title={titulo}
                    value={GET_ACTION[titulo]}
                    hasBorderTop={index === 0}
                  />
                </View>
              ))}
            </View>
          </View>
          {!isNil(labRecords) && (
            <View style={{marginTop: 20}}>
              <BorderButtom
                title="Imprimir"
                onPress={() =>
                  createProductionDiariaReport(labRecords, GET_ACTION)
                }
              />
            </View>
          )}
        </View>
        <View style={{height: 200}} />
        <Text>pantalla de producción diaria</Text>
      </ScrollView>
    </View>
  );
};
