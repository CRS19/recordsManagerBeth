import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BirthDateInput} from '../../assets/BirthDateInput';
import {Ciguenia} from '../../assets/Ciguenia';
import {Dumbbells} from '../../assets/Dumbbells';
import {EstadisticaClinica} from '../../assets/EstadisticaClinica/EstadisticaClinica';
import {FolderDescarte} from '../../assets/FolderDescarte/FolderDescarte';
import {Ginecologia} from '../../assets/Ginecologia/Ginecologia';
import {GraficaNoNacidos} from '../../assets/GraficaNoNacidos/GraficaNoNacidos';
import {MilkVaso} from '../../assets/MilkVaso';
import {Ovulos} from '../../assets/Ovulos/Ovulos';
import {Ultrasonido} from '../../assets/Ultrasonido/Ultrasonido';
import {Utero} from '../../assets/Utero/Utero';
import {GeneralButtom} from '../../components/GeneralButtom';

export const ReproductiveStatus = () => {
  return (
    <View>
      <ScrollView>
        <Text>Estado reproductivo</Text>
        <GeneralButtom
          title="Control Ginecológico"
          color="#F0E4CA"
          Icon={<Ginecologia />}
          navigateTo={'ControlGinecológico'}
        />
        <GeneralButtom
          title="Inseminación Monta"
          color="#F59257"
          Icon={<Ovulos />}
          navigateTo={'InseminaciónMonta'}
        />
        <GeneralButtom
          title="Gestación "
          color="#D3C221"
          Icon={<Ultrasonido />}
          navigateTo={'Gestación'}
        />
        <GeneralButtom
          title="Control Clinico de la Reproducción"
          color="#E0E0E0"
          Icon={<EstadisticaClinica />}
          navigateTo={'ControlClinicodelaReproducción'}
        />
        <GeneralButtom
          title="Nacimientos"
          color="#03DAC5"
          Icon={<Ciguenia />}
          navigateTo={'Nacimientos'}
        />
        <GeneralButtom
          title="Control de peso Terneros"
          color="#EFC6C5"
          Icon={<Dumbbells />}
          navigateTo={'ControlDePesoTerneros'}
        />
        <GeneralButtom
          title="Natimortos"
          color="#AAC3D7"
          Icon={<GraficaNoNacidos />}
          navigateTo={'Natimortos'}
        />
        <GeneralButtom
          title="Descartes"
          color="#D8B285"
          Icon={<FolderDescarte />}
          navigateTo={'Descartes'}
        />
        <GeneralButtom
          title="Eficiencia Reproductiva"
          color="#EFE6C9"
          Icon={<Utero />}
          navigateTo={'EficienciaReproductiva'}
        />
      </ScrollView>
    </View>
  );
};
