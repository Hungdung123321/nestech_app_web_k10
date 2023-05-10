import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './style'

const AppButton = ({ content, contentStyle, patchImg, ...rest }) => {

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
            case 'boolean':
                return <Image style={style} source={patchImg} />
            default:
                return <View />
        }
    }

    return (
        <TouchableOpacity hitSlop={2} {...rest}>
            {RenderContent(content, contentStyle)}
        </TouchableOpacity>
    )
}

export default AppButton

