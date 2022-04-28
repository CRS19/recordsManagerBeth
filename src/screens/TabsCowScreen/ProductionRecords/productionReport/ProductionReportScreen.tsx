import React, {createRef} from 'react';
import {Alert, Text, View} from 'react-native';
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
import {isEmpty, isNil} from 'lodash';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {ScrollView} from 'react-native-gesture-handler';
import {DailyMilkingProdReportHeader} from '../../../../components/Tables/ReportTables/DailyMilkingProdReport/DailyMilkingProdReportHeader';
import {BorderButtom} from '../../../../components/Buttoms/BorderButtom';
import {useCreatePdf} from '../../../../utils/useCreatePdf';
import {LabelIconChip} from '../../../../components/LabelIconChip/LabelIconChip';
import ViewShot from 'react-native-view-shot';

export const ProductionReportScreen = ({route, navigation}: any) => {
  const ViewShotRef = createRef<ViewShot>();
  const params: IDailyMilkRecord = route.params.record;
  const listNumber: number = route.params.index + 1;
  const dailyRecords = useSelector(
    (state: IAppState) => state.currentCowDailyRecord!,
  );

  const {milkingData} = useProductionReportScreen({
    idVaca: params.idVaca,
    prodCicle: params.prodCicle,
  });

  const {createPd} = useCreatePdf();

  // VALIDACIONES PENDEJAS QUE ESA LIBRERIA DEBIA HACER 🙄
  const getDataToPlot = (milkingData: IMilkData[]) => {
    if (isNil(milkingData) || isEmpty(milkingData)) {
      return [{x: 0, y: 0}];
    } else {
      return milkingData;
    }
  };

  const captureViewShot = async () => {
    try {
      const imageURI = await ViewShotRef.current!.capture!();

      createPd(imageURI, params, listNumber);
    } catch (e) {
      Alert.alert(
        'Error de capture view',
        'Ponase en contacto con el administrador del sistema',
      );
    }
  };

  return (
    <View>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro producción'}
        findIcon={false}
        backIcon={true}
      />
      <ScrollView>
        <View style={{marginTop: 15}}>
          <GeneralTitle
            title={`Lactancia N° ${listNumber} - ${params.prodCicle}`}
          />
          <View style={{alignItems: 'flex-start', marginLeft: 40}}>
            <LabelIconChip
              name={`${params.idVaca.split('-')[0]}`}
              areteNumber={`${params.idVaca.split('-')[1]}`}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              maxWidth: 300,
              position: 'relative',
              left: 85,
              top: 50,
              zIndex: 1,
            }}>
            Producción de leche en Litros (Lt)
          </Text>
          <Text
            style={{
              maxWidth: 300,
              position: 'relative',
              left: 380,
              top: 440,
              zIndex: 1,
            }}>
            Días de Lactación
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              marginLeft: 50,
              width: 1100,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <ViewShot
              ref={ViewShotRef}
              style={{flex: 1}}
              options={{format: 'jpg', quality: 1.0}}>
              <View
                style={{
                  height: 400,
                  width: 753,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  paddingTop: 20,
                }}>
                <Chart
                  style={{
                    height: 400,
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                  xDomain={{min: 0, max: 305}}
                  yDomain={{min: 0, max: 250}}
                  padding={{left: 40, bottom: 20, right: 20, top: 20}}>
                  <VerticalAxis tickValues={[0, 50, 100, 150, 200, 250]} />
                  <HorizontalAxis
                    tickValues={[0, 50, 100, 150, 200, 250, 305]}
                  />
                  <Line
                    data={getDataToPlot(milkingData)}
                    smoothing="cubic-spline"
                    theme={{stroke: {color: 'blue', width: 1}}}
                  />
                </Chart>
              </View>
            </ViewShot>
            <View style={{marginLeft: 10}}>
              <LactanciaViewCard productionRecords={dailyRecords} />
            </View>
          </View>
        </ScrollView>

        <View style={{marginTop: 35}}>
          <GeneralTitle title="Registro Diario de Leche" />
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'column'}}>
              <DailyMilkingProdReportHeader dailyRecord={params} />
              <View style={{height: 30}} />
            </View>
          </ScrollView>
        </View>

        <View style={{marginTop: 25}}>
          <BorderButtom
            title="descargar pdf"
            onPress={() => captureViewShot()}
          />
        </View>
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};
