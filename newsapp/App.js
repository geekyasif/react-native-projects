import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScienceScreen from './screens/ScienceScreen'
import BusinessScreen from './screens/BusinessScreen'
import HealthScreen from './screens/HealthScreen'
import EntertainmentScreen from './screens/EntertainmentScreen'
import SportsScreen from './screens/SportsScreen'
import TechnologyScreen from './screens/TechnologyScreen'
import HomeScreen from './screens/HomeScreen'
import testScreen from './screens/testScreen'

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}> 
      <Stack.Navigator>
        <Stack.Screen name="The Indian Express" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll'
  },
});
