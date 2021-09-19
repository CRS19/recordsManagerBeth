import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AddImageIcon} from '../../../assets/AddImageIcon';
import {styles} from '../../../theme/GlobalStyles';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export const AddImage = () => {
  const img = require('../../../assets/Images/registro/p.png');
  const [tempUri, setTempUri] = useState('empty');

  return (
    <View
      style={{
        ...styles.ImagenCardContainer,
        height: 286,
        padding: 5,
      }}>
      {tempUri !== 'empty' ? (
        <Image
          style={{width: 375, height: 270, backgroundColor: 'red'}}
          source={{uri: tempUri}}
        />
      ) : (
        <Image style={{flex: 1}} source={img} />
      )}
      <TouchableOpacity
        style={{
          ...styles.ImageCardLoginFooter,
          width: 375,
          left: 5,
          bottom: 5,
          height: 48,
        }}
        onPress={() =>
          launchCamera(
            {
              mediaType: 'photo',
              quality: 0.8,
              maxHeight: 286,
              maxWidth: 400,
            },
            (resp: ImagePickerResponse) => {
              if (resp.didCancel) return;
              if (!resp.assets![0].uri) console.log(resp);
              setTempUri(resp.assets![0].uri!);
            },
          )
        }></TouchableOpacity>
      <AddImageIcon bottom={5} left={10} />
    </View>
  );
};
