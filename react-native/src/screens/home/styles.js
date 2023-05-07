import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { DEVICE, scale } from '../../constants/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ALICE_BLUE
  },
  body: {
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: scale(20)
  },
  cardItem: {
    borderWidth: scale(1),
    borderColor: 'gray',
    borderRadius: scale(10),
    paddingHorizontal: scale(16),
    paddingVertical: scale(8)
  },
  buttonAdd: {
    backgroundColor: COLORS.TART_ORANGE,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: scale(80),
    height: scale(80),
    borderRadius: scale(9999),
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleAdd: {
    fontFamily: FONTS.MEDIUM,
    fontSize: scale(40),
    color: COLORS.WHITE
  },
  seperator: {
    height: scale(16)
  },
  list: {
    paddingHorizontal: scale(16),
    marginTop: scale(12)
  },
  listEmpty: {
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: COLORS.BLACK_50,
    width: DEVICE.WIDTH,
    height: DEVICE.HEIGHT,
    justifyContent: 'flex-end'
  },
  contentPress: {
    width: DEVICE.WIDTH,
    height: DEVICE.HEIGHT
  },
  containerContentModal: {
    backgroundColor: COLORS.WHITE,
    width: DEVICE.WIDTH,
    height: DEVICE.HEIGHT * 0.8
  }
});

export default styles;
