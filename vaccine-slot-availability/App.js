import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreens'
import DataScreen from './screens/dataScreen'

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle : {backgroundColor: '#17A589'},
  headerTitleStyle : {color : '#fff'},
  headerTintColor: '#fff',
  headerTitleAlign: 'center'
}

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="light" />
        <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Data" component={DataScreen} />
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
  },
});
