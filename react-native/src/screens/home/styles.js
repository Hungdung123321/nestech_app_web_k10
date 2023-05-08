import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: fontScale(40),
    fontWeight: 600
  },
  Header: {
    paddingHorizontal: 10
  },
  icAddBtn: {
    fontSize: fontScale(50),
    fontWeight: '300',
    color: COLORS.WHITE
  },
  addBtn: {
    position: 'absolute',
    bottom: scale(20),
    right: scale(20),
    width: scale(70),
    height: scale(70),
    backgroundColor: COLORS.PINK,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'

  }
});

export default styles;
