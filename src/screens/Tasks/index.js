import React, { useState } from 'react';
import Header from '../../components/Header';
import TaskTile from './TaskTile';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

export default function TasksScreen() {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const tasks = useSelector(getTasks);

  const renderItem = ({item}) => <TaskTile task={item}/>;

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <View style={styles.countersContainer}>
              <Counter number={tasks.length} title={'Tâches créées'}/>
              <Counter number={tasks.filter(el => el.isCompleted).length} title={'Tâches effectuées'}/>
            </View>
            {isFormVisible && <TaskForm />}
          </>
        }
        contentContainerStyle={styles.flatList}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isFormVisible={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20
  }
});