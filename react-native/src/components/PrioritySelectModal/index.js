import React, { memo } from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { ListPrio } from '../../constants/common'
import AppButton from '../AppButton'
import uuid from 'react-native-uuid'
const PrioritySelectModal = ({ onPressPrio }) => {
    console.log('modal')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Priority</Text>
            <View style={styles.PrioList}>
                {
                    ListPrio.map(Element => {
                        return <AppButton
                            key={uuid.v4()}
                            content={Element.Label}
                            style={styles.PrioBtn}
                            onPress={() => onPressPrio(Element)} />
                    })
                }
            </View>
        </View>
    )
}

export default memo(PrioritySelectModal)
