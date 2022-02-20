import React from 'react';
import {View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {GeneralButtom} from '../../../../components/GeneralButtom';
import {Bacteria} from '../../../../assets/Bacteria';
import {Viruss} from '../../../../assets/Viruss';
import {Virus} from '../../../../assets/Virus';
import {Bacteria1} from '../../../../assets/Bacterium1';
import {Bacterium2} from '../../../../assets/Bacterium2';
import {ScrollView} from 'react-native-gesture-handler';

export const Vacunas = () => {
  return (
    <View>
      <TopBar backIcon={true} title="Vacunas" />
      <ScrollView>
        <GeneralButtom
          title="Brucelosis"
          color="#A7D9E0"
          Icon={<Viruss />}
          navigateTo={'Brucelosis'}
        />
        <GeneralButtom
          title="Cuatro Virales"
          color="#D3C221"
          Icon={<Virus />}
          navigateTo={'CuatroVirales'}
        />
        <GeneralButtom
          title="Carbunco Triple"
          color="#D8D8D8"
          Icon={<Bacterium2 />}
          navigateTo={'CarbuncoTriple'}
        />
        <GeneralButtom
          title="Aftosa"
          color="#65CAC0"
          Icon={<Bacteria1 />}
          navigateTo={'Aftosa'}
        />
        <GeneralButtom
          title="Otro"
          color="#F59257"
          Icon={<Bacteria />}
          navigateTo={'OtroTipoVacuna'}
        />
        <View style={{height: 90}} />
      </ScrollView>
    </View>
  );
};
