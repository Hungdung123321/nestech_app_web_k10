import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import {
  DEVICE,
  MARGIN_TOP_HEADER,
  STATUS_BAR_HEIGHT,
  scale,
} from '../../constants/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TRANSPARENT,
    minHeight: scale(60),
    marginTop: STATUS_BAR_HEIGHT,
    paddingVertical: scale(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    color: COLORS.BLACK,
    fontSize: scale(24),
    lineHeight: scale(36),
    fontFamily: FONTS.MEDIUM,
  },
});

export default styles;
