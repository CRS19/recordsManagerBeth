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
  ImageCardLoginFooter: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 311,
    height: 94,
    opacity: 0.38,
  },
  ImagenCardContainer: {
    width: 311,
    height: 374,
    marginRight: 11,
    justifyContent: 'flex-end',
  },
  LogInContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  LogInHeader: {
    flex: 1,
  },
  LogInBodyContainer: {
    height: 325,
    flexDirection: 'row',
  },
  LogInTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 48,
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  LogInTitleContainer: {
    justifyContent: 'center',
    marginLeft: 313,
  },
  LogInFormContainer: {
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
  LogInFooter: {
    height: 55,
    backgroundColor: '#C22321',
  },
  BorderButtom: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    height: 36,
    borderColor: 'green',
  },
  BorderButtomTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 15,
    letterSpacing: 1.25,
  },
});
