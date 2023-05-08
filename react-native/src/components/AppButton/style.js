import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-utils-scale'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
    BtnDefault: {
        width: scale(120),
        height: scale(50),
        paddingHorizontal: scale(30),
        paddingVertical: scale(14),
        backgroundColor: COLORS.PINK
    }

})
export default styles