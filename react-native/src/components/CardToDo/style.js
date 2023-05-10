import { StyleSheet } from 'react-native'
import { fontScale, scale } from 'react-native-utils-scale'
import { COLORS } from '../../constants/colors'
import { FONTS } from '../../constants/Fonts'

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "100%",
        height: scale(100),
        backgroundColor: 'white',
        borderRadius: 8,
        padding: scale(10),
        justifyContent: 'space-around'
    },
    lable: {
        width: scale(80),
        height: scale(25),
        backgroundColor: COLORS.LIGHT_PINK,
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lableContent: {
        fontSize: fontScale(18),
        color: COLORS.BLACK,
        fontWeight: 400
    },
    lableFont: {
        fontSize: fontScale(16),
        fontWeight: 500
    },
    boxICs: {
        position: 'absolute',
        right: scale(10),
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        width: scale(70),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lableFontRed: {
        color: 'red'
    },
    lableFontGreen: {
        color: 'green'
    },
    lableFontYellow: {
        color: 'yellow'
    },
    lableFontColorDefault: {
        color: 'black'
    }
})

export default styles