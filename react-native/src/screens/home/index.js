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

  console.log('clickSelector', clickSelector);

  return (
    <View style={styles.container}>
      <Header title={'HomeScreen'} />
      <View style={styles.body}>
        <TouchableOpacity onPress={clickAdd}>
          <Text style={styles.text}>{clickSelector}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
