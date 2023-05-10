import { StyleSheet } from 'react-native'
import { scale } from 'react-native-utils-scale'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "100%",
        height: scale(100),
        backgroundColor: 'green',
        borderRadius: 8,
        padding: scale(10)
    },
    lable: {
        width: scale(80),
        height: scale(25),
        paddingHorizontal: scale(10),
        paddingVertical: scale(14),
        backgroundColor: COLORS.LIGHT_PINK,
        borderRadius: scale(8)
    }
})

export default styles