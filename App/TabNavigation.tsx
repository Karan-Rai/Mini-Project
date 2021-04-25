import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileDetail from './ProfileDetail';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileDetailStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#283747',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#283747"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ProfileDetailStackScreen = ({navigation}) => (
  <ProfileDetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#283747',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileDetailStack.Screen
      name="ProfileDetail"
      component={ProfileDetail}
      options={{
        title: 'Profile Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#283747"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileDetailStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#283747',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="ProfileDetail"
      component={ProfileDetailStackScreen}
      options={{
        tabBarLabel: 'Profile Screen',
        tabBarColor: '#283747',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default TabsScreen;
