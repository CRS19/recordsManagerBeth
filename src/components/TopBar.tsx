import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewComponent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HamburgerIcon} from '../assets/HamburgerIcon';
import {styles} from '../theme/GlobalStyles';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {get} from 'lodash';
import {BackDrawerIcon} from '../assets/BackDrawerIcon';

interface ITopBar {
  title: string;
  findIcon?: boolean;
  backIcon?: boolean;
  hamburguerDisplay?: 'none' | 'flex';
  navigation?: DrawerNavigationProp<any, any>;
}

export const TopBar = (props: ITopBar) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const hasBackIcon = get(props, 'backIcon', false);

  return (
    <View style={{width}}>
      <View style={styles.TopBar}>
        <View style={styles.TopBarTitlePosition}>
          <View style={styles.TapBarBackIcon}>
            {hasBackIcon ? (
              <TouchableOpacity
                style={{
                  top: -4,
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <BackDrawerIcon />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  top: -10,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display:
                    props.hamburguerDisplay === undefined
                      ? 'flex'
                      : props.hamburguerDisplay,
                }}
                activeOpacity={0.8}
                onPress={() => {
                  //@ts-ignore
                  navigation.toggleDrawer();
                }}>
                <HamburgerIcon />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.TopBarTitle}>{props.title}</Text>

          <TouchableOpacity
            style={{
              position: 'relative',
              top: -10,
              right: 28,
            }}
            onPress={() => {}}>
            <View style={styles.AvatarPosition}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                source={{
                  uri: 'https://www.espoch.edu.ec/images/header/logo_espoch.png',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
