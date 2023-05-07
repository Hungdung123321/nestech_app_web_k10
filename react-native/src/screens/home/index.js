import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import { clickUpgradeHandle } from '../../redux/actions';
import { LIST_TASK } from '../../services/dummyData';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const clickSelector = useSelector(state => state._click);
  const [openModal, setOpenModal] = useState(false);

  const clickAdd = () => {
    dispatch(clickUpgradeHandle());
  };

  const openCloseAddTask = () => {
    setOpenModal(pre => !pre);
  };

  const renderItem = ({ item, index }) => {
    return <CardItem content={item?.nameTask} contentPriority={item?.priority} />;
  };

  const renderModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.containerContentModal}>
          <View style={styles.header}>
            <View />
            <AppText>{'Thêm task mới'}</AppText>
            <AppButton content={'Close'} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal transparent visible={openModal}>
        {renderModal()}
      </Modal>
      <View style={styles.container}>
        <Header title={'Ghi chú'} />
        <FlatList
          data={LIST_TASK}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item?.id}${index}`}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <AppText>{'Danh sách trống'}</AppText>
            </View>
          )}
        />
        <AppButton
          content={'+'}
          style={styles.buttonAdd}
          styleContent={styles.titleAdd}
          onPress={openCloseAddTask}
        />
      </View>
    </>
  );
};

export default HomeScreen;
