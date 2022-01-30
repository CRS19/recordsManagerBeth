import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {IDailyMilkRecord} from '../../../../interfaces/DailyMilkRecord';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from 'react-native-responsive-linechart';
import {LactanciaViewCard} from '../../../../components/LactanciaViewCard/LactanciaViewCard';
import {useSelector} from 'react-redux';
import {IAppState} from '../../../../store/reducer';
import {
  IMilkData,
  useProductionReportScreen,
} from './state/useProductionReportScreen';
import {defaultTo, isEmpty, isNil} from 'lodash';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {ScrollView} from 'react-native-gesture-handler';
import {DailyMilkingProdReportHeader} from '../../../../components/Tables/ReportTables/DailyMilkingProdReport/DailyMilkingProdReportHeader';

export const ProductionReportScreen = ({route, navigation}: any) => {
  const params: IDailyMilkRecord = route.params.record;
  const dailyRecords = useSelector(
    (state: IAppState) => state.currentCowDailyRecord!,
  );

  const {milkingData} = useProductionReportScreen({
    idVaca: params.idVaca,
    prodCicle: params.prodCicle,
  });

  console.log('MILING DATA?????? -> ', milkingData);

  // VALIDACIONES PENDEJAS QUE ESA LIBRERIA DEBIA HACER 🙄
  const getDataToPlot = (milkingData: IMilkData[]) => {
    if (isNil(milkingData) || isEmpty(milkingData)) {
      return [{x: 0, y: 0}];
    } else {
      return milkingData;
    }
  };

  return (
    <View>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro Reproducción'}
        findIcon={false}
        backIcon={true}
      />
      <ScrollView>
        <View style={{marginTop: 15}}>
          <GeneralTitle title={`Lactancia N° x - ${params.prodCicle}`} />
        </View>
        <View>
          <Text
            style={{
              maxWidth: 300,
              transform: [{rotate: '-90deg'}],
              position: 'relative',
              right: 110,
              top: 180,
            }}>
            Producción de leche en Litros (Lt)
          </Text>
          <Text
            style={{
              maxWidth: 300,
              position: 'relative',
              left: 380,
              top: 430,
            }}>
            Días de Lactación
          </Text>
        </View>
        <View style={{marginHorizontal: 50, flexDirection: 'row'}}>
          <View
            style={{
              height: 400,
              width: 753,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <Chart
              style={{
                height: 400,
                width: '100%',
                backgroundColor: 'transparent',
              }}
              xDomain={{min: 0, max: 305}}
              yDomain={{min: 0, max: 250}}
              padding={{left: 40, bottom: 20, right: 20, top: 20}}>
              <VerticalAxis tickValues={[0, 50, 100, 150, 200, 250]} />
              <HorizontalAxis tickValues={[0, 50, 100, 150, 200, 250, 305]} />
              <Line
                data={getDataToPlot(milkingData)}
                smoothing="cubic-spline"
                theme={{stroke: {color: 'blue', width: 1}}}
              />
            </Chart>
          </View>
          <View style={{marginLeft: 40}}>
            <LactanciaViewCard productionRecords={dailyRecords} />
          </View>
        </View>

        <View>
          <GeneralTitle title="Registro Diario de Leche" />
          <DailyMilkingProdReportHeader dailyRecord={params} />
        </View>
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};
