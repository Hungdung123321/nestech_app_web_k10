import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from '../AppText';

const AppButton = ({ content, styleContent, ...restButton }) => {
  const renderContent = (content, style) => {
    if (!content) {
      return null;
    }

    switch (typeof content) {
      case 'string':
      case 'number':
        return <AppText style={style}>{content}</AppText>;

      case 'function':
        return <View style={style}>{content?.()}</View>;

      default:
        return <View />;
    }
  };

  return (
    <TouchableOpacity hitSlop={1.5} {...restButton}>
      {renderContent(content, styleContent)}
    </TouchableOpacity>
  );
};

export default AppButton;
