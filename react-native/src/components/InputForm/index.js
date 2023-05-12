import React from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import styles from './style'
import AppButton from '../AppButton'
const InputForm = ({
    title,
    Holder,
    isButtonMode = false,
    ButtonModePatch,
    onChangeText,
    value,
    onPress
}) => {

    const renderIcBtn = () => {
        return <>
            <Text style={{ color: 'black' }}>{Holder || 'null'}</Text>
            <Image source={ButtonModePatch || require('../../asset/Img/IC_Trash.png')} />
        </>
    }

    const renderBtn = () => {
        return <AppButton
            content={renderIcBtn}
            contentStyle={styles.btnContent}
            style={styles.input}
            onPress={onPress} />
    }

    const renderTextInput = () => {
        return <TextInput
            placeholder='Vui lòng nhập tiêu đề công việc'
            style={styles.input}
            onChangeText={newText => onChangeText(newText)}
            value={value} />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'null'}</Text>
            {
                isButtonMode ? renderBtn() : renderTextInput()
            }
        </View>
    )
}

export default InputForm
