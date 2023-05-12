import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        width: scale(200),
        height: scale(200),
        backgroundColor: COLORS.LIGHT_RED,
        borderRadius: scale(100),
        position: 'absolute',
    },
    circle_Top: {
        top: scale(-122),
        left: scale(-33)
    },
    circle_left: {
        top: scale(-33),
        left: scale(-128)
    },
    title: {
        fontSize: fontScale(24),
        color: COLORS.BLACK,
        fontWeight: 400,
        alignSelf: 'center',
        position: 'relative',
        top: scale(100)
    },
    Image: {
        alignSelf: 'center',
        position: 'relative',
        top: scale(120)
    },
    InputList: {
        position: 'absolute',
        top: scale(400),
        left: scale(12),
        right: scale(12)
    },
    btnFont: {
        color: COLORS.WHITE,
        fontSize: fontScale(20),
        fontWeight: '600'
    },
    addbtn: {
        position: 'absolute',
        bottom: scale(80),
        width: scale(120),
        height: scale(50),
        backgroundColor: COLORS.PINK,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    PrioModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.OPACITY
    }
});

export default styles;
