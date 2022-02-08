import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {isUndefined} from 'lodash';
import React, {useEffect} from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {
  DispatchActionsEnum,
  DISPATCH_DIRECTORY,
} from '../constants/dispatchDirectory';
import {IAppAction} from '../store/actionCreators';
import {IAppState} from '../store/reducer';
import {styles} from '../theme/GlobalStyles';

interface IGeneralButtom {
  title: string;
  color: string;
  Icon: JSX.Element;
  titleColor?: string;
  navigateTo: string;
  dispatchAction?: DispatchActionsEnum;
}

export const GeneralButtom = (props: IGeneralButtom) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const pressAction = () => {
    navigation.navigate(props.navigateTo);
  };

  useEffect(() => {
    if (!isUndefined(props.dispatchAction)) {
      dispatch(DISPATCH_DIRECTORY[props.dispatchAction]);
    }
  });

  return (
    <TouchableNativeFeedback onPress={() => pressAction()}>
      <View
        style={[styles.GeneralButtomContainer, {backgroundColor: props.color}]}>
        <View style={styles.GeneralButtonIconPosition}>{props.Icon}</View>
        <View style={styles.GeneralButtonTitlePosition}>
          <Text style={[styles.GeneralButtomTitle, {color: props.titleColor}]}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
