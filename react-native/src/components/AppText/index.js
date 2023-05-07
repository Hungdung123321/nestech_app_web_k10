import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const AppText = ({ children, style, ...restText }) => {
  return (
    <Text style={[styles.textDefault, style]} {...restText}>
      {children}
    </Text>
  );
};

export default AppText;
