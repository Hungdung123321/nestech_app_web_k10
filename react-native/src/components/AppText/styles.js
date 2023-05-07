import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { scale } from '../../constants/scale';

const styles = StyleSheet.create({
  textDefault: {
    color: COLORS.BLACK,
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
  },
});

export default styles;
