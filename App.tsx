import React from "react";
import Room from './components/Room';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import{
  View,
  Text,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Room" component={Room}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;