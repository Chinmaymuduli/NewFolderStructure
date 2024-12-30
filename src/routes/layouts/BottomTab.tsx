import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Private} from '@/screens';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarLabelStyle: {fontFamily: 'Montserrat-Bold'},
        // tabBarActiveTintColor: COLORS.secondary,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="HomeScreen" component={Private.HomeScreen} />
      <Tab.Screen name="SettingScreen" component={Private.SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
