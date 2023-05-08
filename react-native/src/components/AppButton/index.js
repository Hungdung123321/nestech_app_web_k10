import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

const AppButton = ({ content, contentStyle, ...rest }) => {

    const RenderContent = (content, style) => {
        if (!content) {
            return null
        }
        switch (typeof content) {
            case 'string':
            case 'number':
                return <Text style={style}>{content}</Text>
            case 'function':
                return <Text style={style}>{content?.()}</Text>
            default:
                return <View />
        }
    }

    return (
        <TouchableOpacity hitSlop={2} style={styles.BtnDefault} {...rest}>
            {RenderContent(content, contentStyle)}
        </TouchableOpacity>
    )
}

export default AppButton

