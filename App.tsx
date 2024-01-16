import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MyCalendar from './components/MyCalendar';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      
      <MyCalendar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#55E2E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
