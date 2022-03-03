import React from 'react';
import {View, ScrollView} from 'react-native';
import {BorderButtom} from '../../components/Buttoms/BorderButtom';
import {YearButtomFilter} from '../../components/Buttoms/YearButtomFilter';
import {LoadingModal} from '../../components/Modals/LoadingModal';
import {useControlGinecologico} from '../../components/ReproductionComponents/state/useControlGinecologico';
import {ControlGinecologicoTable} from '../../components/Tables/ControlGinecologicoTable/ControlGinecologicoTable';
import {GeneralTitle} from '../../components/Titles/GeneralTitle';
import {TopBar} from '../../components/TopBar';
import {SEX_ENUM} from '../../constants/SexEnum';
import {styles} from '../../theme/GlobalStyles';
import {useCreatePdf} from '../../utils/useCreatePdf';

export const ControlGinecológico = () => {
  const {YearButtomFilterProps, allRecords, rowsData, loading} =
    useControlGinecologico();

  const {createControlGinecologicoReport} = useCreatePdf();

  return (
    <View>
      <TopBar backIcon={true} title=" Control Ginecológico"></TopBar>
      <ScrollView>
        <GeneralTitle title="Registro de control ginecológico" width={1200} />
        <YearButtomFilter {...YearButtomFilterProps} />
        <ControlGinecologicoTable
          allRecords={allRecords}
          rowsData={rowsData.filter(data => data.sex === SEX_ENUM.HEMBRA)}
        />
        <View style={{marginTop: 20}}>
          <BorderButtom
            title="Imprimir"
            onPress={() =>
              createControlGinecologicoReport(
                rowsData.filter(data => data.sex === SEX_ENUM.HEMBRA),
                YearButtomFilterProps.year,
              )
            }
          />
        </View>
        <View style={{...styles.LogInFooter, marginTop: 450}} />
      </ScrollView>
      <LoadingModal title="Cargando..." openCloseModal={loading} />
    </View>
  );
};
