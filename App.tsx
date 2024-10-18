/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import TodoList from './src/components/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BlinkitScreen from './src/screens/BlinkitScreen';
import SearchScreen from './src/screens/SearchScreen';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheetComponent from './src/screens/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
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
            <Stack.Screen
              name="bottomsheet"
              component={BottomSheetComponent}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
