import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {BorderButtom} from '../../../../components/Buttoms/BorderButtom';
import {SanityTableFilter} from '../../../../components/Filters/SanityTableFilter';
import {LabelIconChip} from '../../../../components/LabelIconChip/LabelIconChip';
import {ClinicalHistoryTable} from '../../../../components/Tables/ClinicalHistoryTable/ClinicalHistoryTable';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../components/TopBar';
import {useDeworming} from '../Desparacitaciones/state/useDeworming';
import {useClinicHistory} from './state/useClinicHistory';

export const HistoriaClinica = () => {
  const {sanityRecord, sanityFilterProps, filteredSanityRecordData} =
    useClinicHistory();
  const {labelChipProps} = useDeworming();

  return (
    <View>
      <TopBar backIcon={true} title="HistoriaClinica" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <LabelIconChip {...labelChipProps} />
        <SanityTableFilter {...sanityFilterProps} />
      </View>
      <ScrollView>
        <GeneralTitle title="Historial Clinico" />
        <ClinicalHistoryTable rowData={filteredSanityRecordData} />
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};
