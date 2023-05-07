import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { scale } from '../../constants/scale';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
    borderWidth: scale(1),
    borderColor: COLORS.ALICE_BLUE,
    backgroundColor: COLORS.ALICE_BLUE,
    borderRadius: scale(10),
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: scale(1),
      height: scale(1)
    },
    shadowOpacity: scale(0.5),
    shadowRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleCard: {
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
    fontSize: scale(16)
  },
  leftSide: {},
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: COLORS.TART_ORANGE_50
  },
  buttonDefault: {
    paddingHorizontal: scale(8)
  },
  wrapperPriority: {
    marginTop: scale(12),
    backgroundColor: COLORS.MISTY_ROSE,
    paddingVertical: scale(12),
    paddingHorizontal: scale(32),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: scale(140)
  },
  titlePriority: {
    fontSize: scale(14),
    fontFamily: FONTS.SEMIBOLD
  },
  colorLowPriority: {
    color: COLORS.INDIA_GREEN
  },
  colorMediumPriority: {
    color: COLORS.DARK_KHAKI
  },
  colorHighPriority: {
    color: COLORS.LAVA
  },
  colorDefaultPriority: {
    color: COLORS.BLACK
  }
});

export default styles;
