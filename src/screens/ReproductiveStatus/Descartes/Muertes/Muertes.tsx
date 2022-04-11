import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {DeathCertificateItems} from '../../../../components/DescarteComponents/DeathCertificateList/DeathCertificateItems';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../components/TopBar';
import {IAppState} from '../../../../store/reducer';
import {styles} from '../../../../theme/GlobalStyles';

export const Muertes = () => {
  const deathCertificates = useSelector(
    (state: IAppState) => state.allDeathCertificates!,
  );

  return (
    <View>
      <TopBar backIcon={true} title="Defunciones"></TopBar>
      <ScrollView>
        <GeneralTitle title="Actas de defunción" width={1200} />
        <DeathCertificateItems deathCertificates={deathCertificates} />
        <View style={{height: 590}} />
        <View style={{...styles.LogInFooter, marginTop: 40}} />
      </ScrollView>
    </View>
  );
};
