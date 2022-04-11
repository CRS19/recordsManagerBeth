import React from 'react';
import {View} from 'react-native';
import {SalesChart} from '../../../assets/SalesChart';
import {Truck} from '../../../assets/truck';
import {GeneralButtom} from '../../../components/GeneralButtom';
import {TopBar} from '../../../components/TopBar';
import {DispatchActionsEnum} from '../../../constants/dispatchDirectory';
import {styles} from '../../../theme/GlobalStyles';
import {Rip} from '../../Rip';

export const Descartes = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Descartes"></TopBar>
      <GeneralButtom
        title="Muertes"
        color="#03DAC5"
        Icon={<Rip />}
        navigateTo={'Muertes'}
        dispatchAction={DispatchActionsEnum.GET_ALL_DEATH_CERTIFIACTES}
      />
      {/** TODO: implementar traslados y ventas**/}
      {/**<GeneralButtom
        title="Traslados"
        color="#EFE6C9"
        Icon={<Truck />}
        navigateTo={'Traslados'}
        />**/}
      {/**<GeneralButtom
        title="Ventas"
        color="#F59257"
        Icon={<SalesChart />}
        navigateTo={'Ventas'}
      />**/}
      <View style={{...styles.LogInFooter, marginTop: 30}} />
    </View>
  );
};
