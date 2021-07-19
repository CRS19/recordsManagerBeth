import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  BasicFooter: {
    backgroundColor: '#C22321',
    height: 49,
    marginTop: 20,
  },
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
  GeneralButtomContainer: {
    marginHorizontal: 40,
    marginTop: 13,
    height: 191,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  GeneralButtomTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    textTransform: 'uppercase',
    letterSpacing: 0.15,
  },
  GeneralButtonTitlePosition: {
    flex: 1,
    paddingVertical: 70,
    paddingLeft: 61,
  },
  GeneralButtonIconPosition: {
    paddingVertical: 19,
    paddingLeft: 64,
  },
});
