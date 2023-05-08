import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = ({ title, StyleTitle, StyleHeader }) => {
  return (
    <View style={[styles.container, StyleHeader]}>
      <Text style={StyleTitle}>{title}</Text>
    </View>
  );
};

export default Header;
