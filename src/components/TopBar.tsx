import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewComponent,
} from 'react-native';
import {styles} from '../theme/GlobalStyles';

interface ITopBar {
  title: string;
  findIcon?: boolean;
}

export const TopBar = (props: ITopBar) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{width}}>
      <View style={styles.TopBar}>
        <View style={styles.TopBarTitlePosition}>
          <Text style={styles.TopBarTitle}>{props.title}</Text>
          <TouchableOpacity
            style={{
              position: 'relative',
              top: -10,
              right: 28,
            }}
            onPress={() => console.log('presionado :v')}>
            <View style={styles.AvatarPosition}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                source={{
                  uri: 'https://static.wikia.nocookie.net/avatar/images/f/fa/Aang_en_el_Dragón_del_Jazmín.png/revision/latest?cb=20150414231706&path-prefix=es',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
