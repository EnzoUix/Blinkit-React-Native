/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import TodoList from './src/components/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlinkitScreen from './src/screens/BlinkitScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'blinkit'}>
        <Stack.Screen
          name="blinkit"
          component={BlinkitScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
