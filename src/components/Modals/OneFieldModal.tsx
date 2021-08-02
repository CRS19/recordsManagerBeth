import React, {Dispatch, SetStateAction} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import {LogoHembra} from '../../assets/LogoHembra';
import {LogoMacho} from '../../assets/LogoMacho';

interface IOneFieldModal {
  title: string;
  openCloseModal: boolean;
  onCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const OneFieldModal = (props: IOneFieldModal) => {
  const {openCloseModal, onCloseModal} = props;

  return (
    <Modal
      animationType="fade"
      visible={openCloseModal}
      transparent={true}
      statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 320,
            height: 275,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            elevation: 10,
          }}>
          <View
            style={{
              width: 320,
              height: 275,
              paddingHorizontal: 18.5,
              paddingTop: 19,
              paddingBottom: 17,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontSize: 18,
                letterSpacing: 0.4,
                textTransform: 'uppercase',
              }}>
              Seleccione el sexo
            </Text>
            <View style={{flex: 1}}>
              <View
                style={{
                  paddingTop: 13,
                  paddingHorizontal: 25.5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <LogoHembra></LogoHembra>
                <LogoMacho></LogoMacho>
              </View>
              <View
                style={{
                  paddingVertical: 13,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#6FCF97',
                      width: 133,
                      height: 58,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontSize: 18,
                        letterSpacing: 1.25,
                        color: 'white',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                      }}>
                      hembra
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#6FCF97',
                      width: 133,
                      height: 58,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontSize: 18,
                        letterSpacing: 1.25,
                        color: 'white',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                      }}>
                      Macho
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Button title="cerrar modal" onPress={() => onCloseModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
