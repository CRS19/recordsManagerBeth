import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Ciguenia} from '../../../assets/Ciguenia';
import {ClinicHistory} from '../../../assets/ClinicHistory';
import {Desparacitaciones1} from '../../../assets/Desparacitaciones1';
import {Diagnostico} from '../../../assets/Diagnostico';
import {SalesChart} from '../../../assets/SalesChart';
import {Truck} from '../../../assets/truck';
import {Vaccines} from '../../../assets/Vaccines';
import {GeneralButtom} from '../../../components/GeneralButtom';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';
import {ControlGinecológico} from '../../ReproductiveStatus/ControlGinecológico';
import {Rip} from '../../Rip';

export const Sanity = () => {
  return (
    <View>
      <TopBar hamburguerDisplay={'none'} title="Registro de Sanidad"></TopBar>
      <ScrollView>
        <GeneralButtom
          title="Diagnostico"
          color="#65CAC0"
          Icon={<Diagnostico />}
          navigateTo={'Diagnostico'}
        />
        <GeneralButtom
          title="Vacunas"
          color="#F59257"
          Icon={<Vaccines />}
          navigateTo={'Vacunas'}
        />
        <GeneralButtom
          title="Desparacitaciones"
          color="#D3C221"
          Icon={<Desparacitaciones1 />}
          navigateTo={'Desparacitaciones'}
        />
        <GeneralButtom
          title="Historia Clinica"
          color="#EFC6C5"
          Icon={<ClinicHistory />}
          navigateTo={'HistoriaClinica'}
        />
        <View style={{height: 70}} />
      </ScrollView>
    </View>
  );
};
