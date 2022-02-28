import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {DailyMilkLabTable} from '../../../components/Tables/DailyMilkLabTable/DailyMilkLabTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {get} from 'lodash';
import {InfoLabelView} from '../../../components/InfoLabelView/InfoLabelView';
import {MILK_COSTS, PROD_INFO} from '../../../constants/MilkLabConstants';
import {useProductionDiario} from './useProductionDiario';

export const ProductionDiaria = () => {
  const {labRecords, GET_ACTION} = useProductionDiario();

  return (
    <View>
      <TopBar title="Producción Diaria" backIcon={true} />
      <ScrollView>
        <View style={{marginTop: 10}}>
          <GeneralTitle
            title="Producción Total diaria estación tunshi"
            width={1200}
          />
          <CalendarButtom />

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
          {/**
           *
           *  Crear la tabla del informe y su html para el pdf, el componente escucha a un useSelector para actualizarse por mes
           *
           *
           *
           *
           */}
        </View>
        <View style={{height: 200}} />
        <Text>pantalla de producción diaria</Text>
      </ScrollView>
    </View>
  );
};
