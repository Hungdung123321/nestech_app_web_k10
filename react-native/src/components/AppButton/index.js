import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { memo } from 'react'
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
                return <View style={style}>{content?.()}</View>
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

export default memo(AppButton)

