import { Text, View } from 'react-native'
import React, { useMemo, memo } from 'react'
import styles from './style'
import AppButton from '../AppButton'
import { ListPrio, PrioValue } from '../../constants/common'


const CardToDo = (prop) => {
    const {
        ContentTitle,
        Prio,
        onEdit,
        onRemove
    } = prop

    const PrioLabelContent = useMemo(() => {
        return ListPrio.find(item => item?.value === Prio)
    }, [])

    const PrioLabelColor = () => {
        switch (PrioLabelContent?.value) {
            case PrioValue.low:
                return styles.lableFontRed
            case PrioValue.medium:
                return styles.lableFontYellow
            case PrioValue.high:
                return styles.lableFontGreen
            default:
                return styles.lableFontColorDefault
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.lableContent}>{ContentTitle || ''}</Text>
            <AppButton
                contentStyle={[styles.lableFont, PrioLabelColor()]}
                content={PrioLabelContent?.Label}
                style={styles.lable} />
            <View style={styles.boxICs}>
                <AppButton onPress={onEdit} content={true} patchImg={require('../../asset/Img/IC_Pen.png')} />
                <AppButton onPress={onRemove} content={true} patchImg={require('../../asset/Img/IC_Trash.png')} />
            </View>
        </View>
    )
}

export default memo(CardToDo)

