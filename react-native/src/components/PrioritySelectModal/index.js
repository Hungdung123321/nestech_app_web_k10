import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { ListPrio } from '../../constants/common'
import AppButton from '../AppButton'
const PrioritySelectModal = ({ onPressPrio }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Priority</Text>
            <View style={styles.PrioList}>
                {
                    ListPrio.map(Element => {
                        return <AppButton
                            content={Element.Label}
                            style={styles.PrioBtn}
                            onPress={() => onPressPrio(Element)} />
                    })
                }
            </View>
        </View>
    )
}

export default PrioritySelectModal
