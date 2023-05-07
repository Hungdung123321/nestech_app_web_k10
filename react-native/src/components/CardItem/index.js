import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { IC_Pen, IC_Trash } from '../../assets/icons';
import { PRIORITY_LIST, PRIORITY_VALUE } from '../../constants/common';
import AppButton from '../AppButton';
import AppText from '../AppText';
import styles from './styles';

const CardItem = ({
  styleContainer,
  content = '',
  contentPriority = '',
  styleEdit,
  styleDelete,
  onEdit,
  onDelete
}) => {
  const labelPriority = useMemo(() => {
    return PRIORITY_LIST.find(item => item?.value === contentPriority);
  }, []);

  const colorPriority = () => {
    return labelPriority?.value === PRIORITY_VALUE.LOW
      ? styles.colorLowPriority
      : labelPriority?.value === PRIORITY_VALUE.MEDIUM
      ? styles.colorMediumPriority
      : labelPriority?.value === PRIORITY_VALUE.HIGH
      ? styles.colorHighPriority
      : styles.colorDefaultPriority;
  };

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={styles.leftSide}>
        <AppText style={styles.titleCard} numberOfLine={1}>
          {content}
        </AppText>
        <View style={styles.wrapperPriority}>
          <AppText style={[styles.titlePriority, colorPriority()]} numberOfLine={1}>
            {labelPriority?.label}
          </AppText>
        </View>
      </View>
      <View style={styles.rightSide}>
        <AppButton
          content={() => (
            <>
              <IC_Pen style={styles.icon} />
            </>
          )}
          style={[styles.buttonDefault, styleEdit]}
          onPress={typeof onEdit === 'function' ? onEdit : () => {}}
        />
        <AppButton
          content={() => (
            <>
              <IC_Trash style={styles.icon} />
            </>
          )}
          style={[styles.buttonDefault, styleDelete]}
          onPress={typeof onDelete === 'function' ? onDelete : () => {}}
        />
      </View>
    </View>
  );
};

export default CardItem;
