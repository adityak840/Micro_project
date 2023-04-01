import React from "react";
import Home from "./components/Home";
import Room from './components/Room';
import Misc from './components/Misc'
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="Misc" component={Misc} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;