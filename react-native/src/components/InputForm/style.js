import { StyleSheet } from 'react-native'
import { fontScale, scale } from 'react-native-utils-scale'
import { COLORS } from '../../constants/colors'


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scale(100),
        justifyContent: 'space-between'
    },
    title: {
        fontSize: fontScale(24),
        color: COLORS.BLACK,
        fontWeight: 600,
    },
    input: {
        width: '100%',
        height: scale(55),
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: COLORS.LIGHT_RED
    },
    btnText: {
        paddingLeft: scale(16),
    },
    btnContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10)
    }
})

export default styles
