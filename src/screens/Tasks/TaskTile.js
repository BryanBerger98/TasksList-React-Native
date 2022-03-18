import React from 'react'
import { Text, Image, StyleSheet, View, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';

export default function TaskTile({task}) {

  const dispatch = useDispatch();

  const onChangeStatus = () => {
    dispatch(toggleTask(task.id));
  }

  const _onDeleteTask = () => {
    dispatch(deleteTask(task.id));
  }

  return (
    <View style={styles.container}>
        <Pressable style={styles.subContainer} onPress={onChangeStatus}>
            <Image style={styles.check} source={task.isCompleted ? require('../../../assets/icons/icon_check_circle.png') : require('../../../assets/icons/icon_circle.png')}/>
            <Text style={styles.title}>{task.title}</Text>
        </Pressable>
        <Pressable onPress={_onDeleteTask}>
          <Image style={styles.check} source={require('../../../assets/icons/icon_bin.png')}/>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 20,
        fontSize: 16
    },
    check: {
        width: 26,
        height: 26
    }
});