import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  TopBar: {
    height: 56,
    backgroundColor: '#32AC96',
  },
  TopBarTitle: {
    flex: 1,
    fontFamily: 'Roboto',
    color: 'white',
    letterSpacing: 0.15,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  TopBarTitlePosition: {
    paddingTop: 16,
    paddingLeft: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AvatarPosition: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
