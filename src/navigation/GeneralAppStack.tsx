import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StationScreen} from '../screens/StationScreen';
import {ReproductoresScreen} from '../screens/Reproductors/ReproductoresScreen';
import {MemoizedIndividualRecords} from '../screens/IndividualRecords/IndividualRecords';
import {InventoryScreen} from '../screens/Inventory/InventoryScreen';
import {ReproductiveStatus} from '../screens/ReproductiveStatus/ReproductiveStatus';
import {GlobalProduction} from '../screens/GlobalProduction/GlobalProduction';
import {ProductionDiaria} from '../screens/GlobalProduction/productionDiaria/ProductionDiaria';
import {ProductionIndividual} from '../screens/GlobalProduction/ProducciónIndividual/ProductionIndividual';
import {EficienciaProductiva} from '../screens/GlobalProduction/EficienciaProductiva/EficienciaProductiva';
import {ControlGinecológico} from '../screens/ReproductiveStatus/ControlGinecológico';
import {Gestación} from '../screens/ReproductiveStatus/Gestación/Gestación';
import {ControlClinicodelaReproducción} from '../screens/ReproductiveStatus/ControlClinicodelaReproducción';
import {Nacimientos} from '../screens/ReproductiveStatus/Nacimientos/Nacimientos';
import {ControlDePesoTerneros} from '../screens/ReproductiveStatus/ControlDePesoTerneros/ControlDePesoTerneros';
import {Natimortos} from '../screens/ReproductiveStatus/Natimortos/Natimortos';
import {Descartes} from '../screens/ReproductiveStatus/Descartes/Descartes';
import {EficienciaReproductiva} from '../screens/ReproductiveStatus/EficienciaReproductiva/EficienciaReproductiva';
import {Muertes} from '../screens/ReproductiveStatus/Descartes/Muertes/Muertes';
import {Traslados} from '../screens/ReproductiveStatus/Descartes/Traslados/Traslados';
import {Ventas} from '../screens/ReproductiveStatus/Descartes/Ventas/Ventas';
import {Bovinos} from '../screens/Inventory/Bovinos/Bovinos';
import {Farmacos} from '../screens/Inventory/Farmacos/Farmacos';
import {TotalReproductores} from '../screens/Reproductors/TotalReproductores/TotalReproductores';
import {Pajuelas} from '../screens/Reproductors/Pajuelas/Pajuelas';
import {InseminaciónMonta} from '../screens/ReproductiveStatus/InseminacionMonta/InseminaciónMonta';
import {MuerteIndividual} from '../screens/ReproductiveStatus/Descartes/Muertes/MuerteIndividual/MuerteIndividual';
import {IDeathCertificate} from '../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';

export type GeneralStackScreensParams = {
  StationScreen: undefined;
  IndividualRecords: undefined;
  GlobalProduction: undefined;
  ProductionDiaria: undefined;
  ProducciónIndividual: undefined;
  EficienciaProductiva: undefined;
  ReproductiveStatus: undefined;
  ControlGinecológico: undefined;
  InseminaciónMonta: undefined;
  ControlClinicodelaReproducción: undefined;
  ControlDePesoTerneros: undefined;
  Natimortos: undefined;
  Descartes: undefined;
  Gestación: undefined;
  Muertes: undefined;
  Nacimientos: undefined;
  MuerteIndividuo: {deathCertificate: IDeathCertificate};
  Traslados: undefined;
  Ventas: undefined;
  EficienciaReproductiva: undefined;
  InventoryScreen: undefined;
  Bovinos: undefined;
  Farmacos: undefined;
  Reproductores: undefined;
  TotalReproductores: undefined;
  Pajuelas: undefined;
};

const StackGeneral = createStackNavigator<GeneralStackScreensParams>();

export const GeneralAppStack = () => {
  return (
    <StackGeneral.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <StackGeneral.Screen name="StationScreen" component={StationScreen} />
      <StackGeneral.Screen
        name="IndividualRecords"
        component={MemoizedIndividualRecords}
      />
      <StackGeneral.Screen
        name="GlobalProduction"
        component={GlobalProduction}
      />
      <StackGeneral.Screen
        name="ProductionDiaria"
        component={ProductionDiaria}
      />
      <StackGeneral.Screen
        name="ProducciónIndividual"
        component={ProductionIndividual}
      />
      <StackGeneral.Screen
        name="EficienciaProductiva"
        component={EficienciaProductiva}
      />
      <StackGeneral.Screen
        name="ReproductiveStatus"
        component={ReproductiveStatus}
      />
      <StackGeneral.Screen
        name="ControlGinecológico"
        component={ControlGinecológico}
      />
      <StackGeneral.Screen
        name="InseminaciónMonta"
        component={InseminaciónMonta}
      />
      <StackGeneral.Screen name="Gestación" component={Gestación} />
      <StackGeneral.Screen
        name="ControlClinicodelaReproducción"
        component={ControlClinicodelaReproducción}
      />
      <StackGeneral.Screen name="Nacimientos" component={Nacimientos} />
      <StackGeneral.Screen
        name="ControlDePesoTerneros"
        component={ControlDePesoTerneros}
      />
      <StackGeneral.Screen name="Natimortos" component={Natimortos} />
      <StackGeneral.Screen name="Descartes" component={Descartes} />
      <StackGeneral.Screen name="Muertes" component={Muertes} />
      <StackGeneral.Screen
        name="MuerteIndividuo"
        component={MuerteIndividual}
      />
      <StackGeneral.Screen name="Traslados" component={Traslados} />
      <StackGeneral.Screen name="Ventas" component={Ventas} />
      <StackGeneral.Screen
        name="EficienciaReproductiva"
        component={EficienciaReproductiva}
      />
      <StackGeneral.Screen name="InventoryScreen" component={InventoryScreen} />
      <StackGeneral.Screen name="Bovinos" component={Bovinos} />
      <StackGeneral.Screen name="Farmacos" component={Farmacos} />
      <StackGeneral.Screen
        name="Reproductores"
        component={ReproductoresScreen}
      />
      <StackGeneral.Screen
        name="TotalReproductores"
        component={TotalReproductores}
      />
      <StackGeneral.Screen name="Pajuelas" component={Pajuelas} />
    </StackGeneral.Navigator>
  );
};
