import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import Todo from './app/components/Todo';
import TodoList from './app/components/TodoList';
import { Provider } from 'react-redux'
import { store } from './app/redux/store'

export default function App() {
  return (
  <Provider store={store}>
    <View style={styles.container}>
      <Screen>

      <TodoList />
      <StatusBar style="auto" />
      </Screen>
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
