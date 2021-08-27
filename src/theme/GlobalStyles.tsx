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
  TapBarBackIcon: {
    width: 73,
    alignItems: 'center',
  },
  TopBarTitlePosition: {
    paddingTop: 16,
    flexDirection: 'row',
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
  FillButtom: {
    backgroundColor: '#6FCF97',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 172,
    height: 83,
  },
  FillButtomTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 15,
    letterSpacing: 1.25,
    color: 'white',
  },
  InfoComponent: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    width: 185,
    height: 59,
  },
  InfoIcon: {
    backgroundColor: 'red',
    height: 40,
    width: 40,
    margin: 10,
    borderRadius: 100,
  },
  InfoCardDivider: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    height: 1,
    width: 185,
    opacity: 0.1,
  },
  InfoTextContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: 'bold',
  },
  InfoComponentMargin: {
    marginVertical: 27,
    flexWrap: 'wrap',
  },
  InfoStaticCard: {
    elevation: 20,
    flexDirection: 'row',
    width: 413,
    height: 261,
    backgroundColor: '#03DAC5',
  },
  IndividualRecordsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  IndividualRecordsRigthContainer: {
    width: 450,
  },
  IndividualRecordsLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  CowCardContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.12)',
    borderRadius: 10,
    elevation: 20,
    width: 344,
    height: 382,
  },
  touchableCowCardContainer: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 344,
    height: 382,
    margin: 20,
  },
  CowCardHeader: {
    flexDirection: 'row',
    height: 72,
    width: 344,
  },
  CowCardHeaderTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15,
    color: 'black',
  },
  CowCardHeaderName: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  CowCardFoter: {
    marginVertical: 15,
    marginHorizontal: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  CowCardFooterInfoContainer: {
    width: 153,
    height: 40,
    marginRight: 2,
    marginBottom: 5,
    flexDirection: 'row',
  },
  CowCardFooterInfoIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#6FCF97',
    marginVertical: 9,
    marginLeft: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerIcon: {
    backgroundColor: 'white',
    height: 16,
    width: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CowCardTitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    color: '#2B9336',
  },
  CowCardSubTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    color: 'black',
  },
  ModalGeneralStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalSexChooseContainer: {
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
  },
  ModalOneFieldContainer: {
    backgroundColor: 'white',
    width: 320,
    height: 275,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  ModalSexTitlePosition: {
    width: 320,
    height: 275,
    paddingHorizontal: 18.5,
    paddingTop: 19,
    paddingBottom: 17,
  },
  ModalOneFieldInputPosition: {
    width: 320,
    alignItems: 'center',
  },
  ModalSexTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 18,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  ModalSexIconContainer: {
    paddingTop: 13,
    paddingHorizontal: 25.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ModalSexBottomContainer: {
    paddingVertical: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ModalSexButtom: {
    backgroundColor: '#6FCF97',
    width: 133,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ModalSexButtomTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    letterSpacing: 1.25,
    color: 'white',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  ModalOneFieldTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 18,
    letterSpacing: 0.4,
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  GenericTabContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  LeftGenericTabContainer: {
    width: 392,
  },
  RigthGenericTabContainer: {
    flex: 1,
    width: 798,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  RegisterTitleGeneric: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.15,
    textTransform: 'uppercase',
  },
  RegisterTitleUnderLine: {
    backgroundColor: '#D8B285',
    height: 3,
    width: 333,
  },
  ModalInputLogoContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInputDivider: {
    position: 'absolute',
    height: 2,
    width: 268,
    bottom: 0,
    left: 5,
    backgroundColor: '#6200EE',
  },
  ModalDatePickerContainer: {
    backgroundColor: 'white',
    width: 534,
    height: 484,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  ModalDatePickerInputPosition: {
    width: 500,
    alignItems: 'center',
  },
  ModalRazaPickerModalContainer: {
    backgroundColor: 'white',
    width: 250,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  ModalRazPickerModalPosition: {
    width: 500,
    alignItems: 'center',
  },
  ModalRazaPickerItem: {
    width: 197,
    height: 48,
    justifyContent: 'center',
  },
  ModalRazaPickerItemTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.15,
    textTransform: 'uppercase',
  },
  InputCardCaracteristic: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
