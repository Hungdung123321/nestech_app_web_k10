import React from 'react';
import { Text, View } from 'react-native';
import AppText from '../AppText';
import styles from './styles';

const Header = ({ title = '', styleTitleHeader, styleHeader }) => {
  return (
    <View style={[styles.container, styleHeader]}>
      <AppText style={[styles.titleHeader, styleTitleHeader]}>{title}</AppText>
    </View>
  );
};

export default Header;
