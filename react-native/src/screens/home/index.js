import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { clickUpgradeHandle } from '../../redux/actions';
import styles from './styles';

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const clickSelector = useSelector((state) => state._click);

  const clickAdd = () => {
    dispatch(clickUpgradeHandle());
  };

  return (
    <View style={styles.container}>
      {/* <Header title={'Ghi chú'} /> */}
      <View style={{ width: 200, height: 250, borderStartColor: 'red' }}>
        <Text style={styles.text}>Ghi chú</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
