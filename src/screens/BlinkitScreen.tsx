import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Blinkit from '../components/Blinkit';

export default function BlinkitScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* <TodoList/> */}
      <FlatList
        data={[1]}
        renderItem={() => <Blinkit navigation={navigation} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
