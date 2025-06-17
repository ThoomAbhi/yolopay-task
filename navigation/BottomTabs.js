import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import GinieScreen from '../screens/GinieScreen';
import HomeScreen from '../screens/HomeScreen';
import YoloPayScreen from '../screens/YoloPayScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'home') iconName = 'home';
          else if (route.name === 'yolo pay') iconName = 'card';
          else if (route.name === 'ginie') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="yolo pay" component={YoloPayScreen} />
      <Tab.Screen name="ginie" component={GinieScreen} />
    </Tab.Navigator>
  );
}
