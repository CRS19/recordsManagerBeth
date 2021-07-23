import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {BorderButtom} from '../../components/Buttoms/BorderButtom';
import {ImageCardLogin} from '../../components/ImageCardLogin';
import {styles} from '../../theme/GlobalStyles';
import {useLogIn} from './state/useLogIn';

export const LogIn = () => {
  const {width} = useWindowDimensions();
  let imagenes = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
  const refFlat = useRef<any>(null);

  const {username, password, setPassword, setUsername, validar} = useLogIn();
  // FALTA CONSUMIER ENDPOINTS PARA VALIDAR CORRECTAMENTE EL LOGIN
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.LogInContainer}>
          <View style={styles.LogInHeader}>
            <FlatList
              ref={refFlat}
              data={imagenes}
              onScrollAnimationEnd={() => {}}
              renderItem={({item}: any) => {
                return <ImageCardLogin imagePath={item} />;
              }}
              keyExtractor={(item: string, index) => {
                return item.concat(index.toString());
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.LogInBodyContainer}>
            <View style={styles.LogInTitleContainer}>
              <Text style={styles.LogInTitle}>
                Te damos la{'\n'}bienvenida a Beth
              </Text>
            </View>
            <View style={styles.LogInFormContainer}>
              <View>
                <TextInput
                  style={{width: 454, marginTop: 88, elevation: 20}}
                  label="Usuario"
                  value={username}
                  onChangeText={text => setUsername(text)}
                  mode="outlined"
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  keyboardType="email-address"
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                />
                <TextInput
                  style={{width: 454, marginTop: 43, elevation: 10}}
                  label="Contraseña"
                  value={password}
                  textContentType="password"
                  onChangeText={text => setPassword(text)}
                  mode="outlined"
                  secureTextEntry={true}
                  outlineColor="#2B9336"
                  selectionColor="#2B9336"
                  underlineColor="#2B9336"
                  theme={{
                    colors: {primary: '#2B9336'},
                  }}
                />
                <View style={{marginTop: 13}}>
                  <BorderButtom title="Iniciar" onPress={validar} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.LogInFooter} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
