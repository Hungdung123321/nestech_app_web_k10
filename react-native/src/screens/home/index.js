import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clickUpgradeHandle, removeTodo } from '../../redux/actions';
import styles from './styles';
import Header from '../../components/Header';
import AppButton from '../../components/AppButton';
import CardToDo from '../../components/CardToDo';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants/screenName';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const listTodo = useSelector(state => state._TodoList)
  const navigation = useNavigation()
  console.log(listTodo)

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index))
  }

  const handleEditTodo = (index) => {

  }

  const renderCardTodo = ({ item }) => {
    return <CardToDo
      ContentTitle={item?.nameTask}
      Prio={item?.prio}
      onRemove={() => handleRemoveTodo(listTodo.indexOf(item))}
      onEdit={() => handleEditTodo(listTodo.indexOf(item))} />
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
        data={listTodo}
        contentContainerStyle={styles.listTodo}
        renderItem={renderCardTodo}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          <Text>{'Danh sách trống'}</Text>
        }} />
      <View style={styles.paddingBottom} />
    </View>
  );
};

export default HomeScreen;
