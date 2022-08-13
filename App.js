import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/Colors'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 55,
          backgroundColor: 'white'
        }
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray,
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, tintColor: color }}
              source={{
                uri: 'https://img.icons8.com/material-sharp/96/000000/home.png'
              }}
            />
          ),
        }}
        name="Home" component={Home} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray,
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, tintColor: color }}
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/90/000000/like--v1.png'
              }}
            />
          ),
        }}
        name="Liked" component={Liked} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray,
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, tintColor: color }}
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/90/000000/user--v1.png'
              }}
            />
          ),
        }}
        name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={MyTabs} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailScreen"
          component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;