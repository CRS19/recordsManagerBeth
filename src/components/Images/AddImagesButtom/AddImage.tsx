import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AddImageIcon} from '../../../assets/AddImageIcon';
import {styles} from '../../../theme/GlobalStyles';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {setUploadImage} from '../../../store/actionCreators';
import {ICow} from '../../../interfaces/CowInterface';
import {
  PhotoDirectory,
  photoKeysEnum,
} from '../../../constants/PhotosConstants';

interface AddImageProps {
  index: number;
  newCow: ICow;
  isUploadPhotos: {
    phothoOne: Boolean;
    phothoTwo: Boolean;
  };
  setIsUploadPhotos: React.Dispatch<
    React.SetStateAction<{
      phothoOne: Boolean;
      phothoTwo: Boolean;
    }>
  >;
}

export const AddImage = (props: AddImageProps) => {
  const dispatch = useDispatch();
  const img = require('../../../assets/Images/registro/p.png');
  const [tempUri, setTempUri] = useState('empty');

  useEffect(() => {
    setTempUri('empty');
  }, [props.newCow]);

  return (
    <View
      style={{
        ...styles.ImagenCardContainer,
        width: 300,
        height: 220,
        marginTop: 5,
        padding: 5,
      }}>
      {tempUri !== 'empty' ? (
        <Image style={{width: 300, height: 220}} source={{uri: tempUri}} />
      ) : (
        <Image style={{flex: 1}} source={img} />
      )}
      <TouchableOpacity
        style={{
          ...styles.ImageCardLoginFooter,
          width: 300,
          left: 5,
          bottom: 5,
          height: 48,
        }}
        onPress={() =>
          launchImageLibrary(
            {
              mediaType: 'photo',
              quality: 1,
              maxHeight: 286,
              maxWidth: 400,
            },
            (resp: ImagePickerResponse) => {
              if (resp.didCancel) return;
              if (!resp.assets![0].uri) console.log(resp);
              setTempUri(resp.assets![0].uri!);
              dispatch(setUploadImage(resp, props.index, props.newCow));
              props.setIsUploadPhotos({
                ...props.isUploadPhotos,
                [PhotoDirectory[`${props.index}` as photoKeysEnum]]: true,
              });
            },
          )
        }></TouchableOpacity>
      <AddImageIcon bottom={5} left={10} />
    </View>
  );
};
