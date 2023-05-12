import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clickUpgradeHandle } from '../../redux/actions';
import styles from './styles';
import Header from '../../components/Header';
import AppButton from '../../components/AppButton';
import CardToDo from '../../components/CardToDo';
import { DummyData } from '../../constants/common';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants/screenName';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const clickSelector = useSelector((state) => state._click);
  const navigation = useNavigation()
  const clickAdd = () => {
    dispatch(clickUpgradeHandle());
  };

  const renderCardTodo = ({ item }) => {
    return <CardToDo ContentTitle={item.title} Prio={item.prio} />
  }

  return (
    <View style={styles.container}>
      <Header
        title={'Ghi chú'}
        StyleTitle={styles.text}
        StyleHeader={styles.Header} />
      <AppButton
        content={'+'}
        contentStyle={styles.icAddBtn}
        onPress={() => navigation.navigate(SCREEN_NAMES.DETAIL)}
        style={styles.addBtn} />
      <FlatList
        data={DummyData}
        contentContainerStyle={styles.listTodo}
        renderItem={renderCardTodo} />
      <View style={styles.paddingBottom} />
    </View>
  );
};

export default HomeScreen;
