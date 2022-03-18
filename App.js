import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TasksScreen from './src/screens/Tasks';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = ({ children, title }) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.area}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1
  }
});

export default App;
