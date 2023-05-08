import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clickUpgradeHandle } from '../../redux/actions';
import styles from './styles';
import Header from '../../components/Header';
import AppButton from '../../components/AppButton';

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const clickSelector = useSelector((state) => state._click);

  const clickAdd = () => {
    dispatch(clickUpgradeHandle());
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Ghi chú'}
        StyleTitle={styles.text}
        StyleHeader={styles.Header} />
      <AppButton
        content={'+'}
        contentStyle={styles.icAddBtn}
        style={styles.addBtn} />
    </View>
  );
};

export default HomeScreen;
