import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <TodoItem
          title="Class 101 Lecture"
          done={true}
        />
        <TodoItem
          title="Reading a book"
          done={false}
        />
        <TaskModal isVisible={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
