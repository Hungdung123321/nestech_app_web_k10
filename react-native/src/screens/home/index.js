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

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const clickSelector = useSelector((state) => state._click);

  const clickAdd = () => {
    dispatch(clickUpgradeHandle());
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 250, backgroundColor: 'red' }}>
        <Text style={{ color: 'blue' }}>Ghi chú</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
