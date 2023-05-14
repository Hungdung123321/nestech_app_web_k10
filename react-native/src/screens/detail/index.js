import React, { useState, useCallback } from 'react';
import { Image, Modal, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import InputForm from '../../components/InputForm';
import AppButton from '../../components/AppButton';
import PrioritySelectModal from '../../components/PrioritySelectModal';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../../redux/actions';
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native';


const DetailScreen = () => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [Priority, setPriority] = useState({})
  const [Visible, setVisible] = useState(false)
  const navigation = useNavigation()

  console.log([])

  const handleSelctPrio = useCallback((value) => {
    setPriority(value)
    setVisible(!Visible)
  }, [Visible])

  const handleAddTodo = useCallback(() => {
    dispatch(AddTodo({ id: uuid.v4(), nameTask: title, prio: Priority.value }))
    navigation.goBack()
  }, [title, Priority])

  const handleChangeText = useCallback((newTest) => {
    setTitle(newTest)
  }, [])

  const handlePrioFrom = useCallback(() => {
    setVisible(!Visible)
  }, [])


  return (
    <>
      <View style={styles.container}>
        <View style={[styles.circle, styles.circle_Top]} />
        <View style={[styles.circle, styles.circle_left]} />
        <AppButton style={styles.BackBtn} onPress={() => navigation.goBack()} content={true} patchImg={require('../../asset/Img/IC_BackArrow.png')} />
        <Text style={styles.title}>Tạo lịch trình cần làm mới nào !</Text>
        <Image
          style={styles.Image}
          source={require('../../asset/Img/IMG_Person.png')} />
        <View style={styles.InputList}>
          <InputForm
            title={'Tiêu đề'}
            value={title}
            onChangeText={newTest => handleChangeText(newTest)} />
          <InputForm
            title={'Độ ưu tiên'}
            Holder={Priority?.Label || 'Vui lòng chọn độ ưu tiên công việc'}
            isButtonMode={true}
            ButtonModePatch={require('../../asset/Img/IC_Arrwdown.png')}
            onPress={handlePrioFrom} />
          <InputForm
            title={'Ngày kết thúc'}
            Holder={'Vui lòng nhấn để chọn ngày kết  thúc'}
            isButtonMode={true}
            ButtonModePatch={require('../../asset/Img/IC_Calender.png')} />
        </View>
        <AppButton
          content={'Thêm'}
          contentStyle={styles.btnFont}
          style={styles.addbtn}
          onPress={() => handleAddTodo()} />
        <Modal
          animationType='slide'
          transparent={true}
          visible={Visible}
          onRequestClose={() => setVisible(!Visible)}
        >
          <TouchableOpacity
            style={styles.PrioModal}
            onPress={() => setVisible(!Visible)}>
            <TouchableHighlight>
              <PrioritySelectModal onPressPrio={(value) => handleSelctPrio(value)} />
            </TouchableHighlight>
          </TouchableOpacity>
        </Modal>
      </View>

    </>
  );
};

export default DetailScreen;
