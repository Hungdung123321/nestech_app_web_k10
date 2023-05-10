import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import AppButton from '../AppButton'


const CardToDo = () => {
    return (
        <View style={styles.container}>
            <Text>Đi chạy bộ</Text>
            <AppButton
                content={'Thap'}
                style={styles.lable} />
        </View>
    )
}

export default CardToDo

