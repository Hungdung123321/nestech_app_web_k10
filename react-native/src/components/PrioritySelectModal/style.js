import { StyleSheet } from 'react-native'
import { fontScale, height, scale } from 'react-native-utils-scale'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        width: scale(360),
        height: scale(280),
        backgroundColor: COLORS.PINK,
        borderRadius: 10
    },
    title: {
        position: 'absolute',
        top: scale(20),
        left: scale(0),
        right: scale(0),
        textAlign: 'center',
        fontSize: fontScale(28),
        fontWeight: 600
    },
    PrioList: {
        position: 'absolute',
        top: scale(0),
        bottom: scale(0),
        left: scale(0),
        right: scale(0),
        justifyContent: 'center'
    },
    PrioBtn: {
        width: '100%',
        padding: scale(10),
        borderBottomWidth: 1,
        borderColor: COLORS.BLACK,
    },
})
export default styles
