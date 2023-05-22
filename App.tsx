import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Status from './src/components/screenComponents/Status';
import BottomTabScreen from './src/components/screenComponents/BottomTabScreen';
import Login from './src/components/screens/Login';
import Splash from './src/components/screens/Splash';

export type RootStackParams = {
  Stories: undefined;
  Status: undefined;
  Post: undefined;
  Home: undefined;
  BottomTabScreen: undefined;
  Login: undefined;
  Splash: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
