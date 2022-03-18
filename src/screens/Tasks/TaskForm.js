import React, { useState } from 'react'
import { TextInput, StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

export default function TaskForm() {

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    setTitle(value);
  }

  const onAddNewTask = () => {
    if (title === '') return;
    dispatch(addTask(title));
    setTitle('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChangeText} value={title} placeholder='Nouvelle Tâche'/>
      <Button title='Ajouter' onPress={onAddNewTask} color='blue' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    height: 40,
    padding: 5
  }
});
