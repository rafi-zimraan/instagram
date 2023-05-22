import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '../screens/Search';
import Home from '../screens/Home';
import Reels from '../screens/Reels';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Status from '../screenComponents/Status';

const Tab = createBottomTabNavigator();
const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 50},

        tabBarIcon: ({focused, size, color}) => {
          let iconName: any;
          let AntDesignName: any;
          let iconnName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'ios-home-outline';
            size = focused ? size + 7 : size + 5;
          } else if (route.name === 'Search') {
            iconName = focused ? 'md-search' : 'md-search-outline';
            size = focused ? size + 9 : size + 5;
          } else if (route.name === 'Reels') {
            AntDesignName = focused ? 'plussquare' : 'plussquareo';
            size = focused ? size + 6 : size + 3;
          } else if (route.name === 'Activity') {
            iconnName = focused ? 'movie-open' : 'movie-outline';
            size = focused ? size + 9 : size + 5;
          } else if (route.name === 'profile') {
            iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline';
            size = focused ? size + 10 : size + 5;
          }

          return (
            <Icon name={iconName} size={size} color={'black'}>
              <AntDesign name={AntDesignName} size={size} color={'black'} />
              <Iconn name={iconnName} size={size} color={'black'} />
            </Icon>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
