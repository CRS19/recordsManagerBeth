import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {DRUGS_PRESENTATIONS} from '../../../constants/PresentationEnum';
import {IDrug} from '../../../interfaces/Drug.interface';
import {styles} from '../../../theme/GlobalStyles';
import {getDateOfDay} from '../../../utils/time-utils';

interface IDrugViewTableProps {
  drugs: IDrug[];
  onDeleteDrug: (id: string) => void;
}

export const DrugViewTable = ({drugs, onDeleteDrug}: IDrugViewTableProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: 60,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 138}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            Fecha de ingreso
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 160}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Nombre del producto
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 160}}>
          <Text style={{fontSize: 18}}>Fecha de caducidad</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 160}}>
          <Text style={{fontSize: 18}}>Presentación</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 134}}>
          <Text style={{fontSize: 18}}>unidad de medida</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 163}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Contenido por unidad
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 103}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Cantidad</Text>
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 130,
            borderRightWidth: 2,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Disponible</Text>
        </View>
      </View>
      <View>
        {drugs.map((drug, index) => (
          <TouchableOpacity
            key={`${drug.name}-${index}`}
            onPress={() => {
              Alert.alert(
                'Eliminar farmaco',
                `Estas seguro de eliminar el farmaco ${drug.name} con disponibilidad de ${drug.available} ${drug.unitType}`,
                [
                  {
                    text: 'No',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  {
                    text: 'Si',
                    onPress: () => onDeleteDrug(drug._id!),
                  },
                ],
              );
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{...styles.DailyMilkRow, width: 138, borderTopWidth: 0}}>
                <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
                  {getDateOfDay(drug.created, 'DD/MM/yyyy')}
                </Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 160, borderTopWidth: 0}}>
                <Text style={{fontSize: 18, textAlign: 'center'}}>
                  {drug.name}
                </Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 160, borderTopWidth: 0}}>
                <Text style={{fontSize: 18}}>
                  {getDateOfDay(drug.expDate, 'DD/MM/yyyy')}
                </Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 160, borderTopWidth: 0}}>
                <Text style={{fontSize: 18}}>{drug.presentationForm}</Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 134, borderTopWidth: 0}}>
                <Text style={{fontSize: 18}}>
                  {
                    DRUGS_PRESENTATIONS.find(el => el.value === drug.unitType)!
                      .description
                  }
                </Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 163, borderTopWidth: 0}}>
                <Text style={{fontSize: 18, textAlign: 'center'}}>
                  {drug.unitContent}
                </Text>
              </View>
              <View
                style={{...styles.DailyMilkRow, width: 103, borderTopWidth: 0}}>
                <Text style={{fontSize: 18, textAlign: 'center'}}>
                  {drug.amount}
                </Text>
              </View>
              <View
                style={{
                  ...styles.DailyMilkRow,
                  width: 130,
                  borderRightWidth: 2,
                  borderTopWidth: 0,
                }}>
                <Text style={{fontSize: 18, textAlign: 'center'}}>
                  {drug.available}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
