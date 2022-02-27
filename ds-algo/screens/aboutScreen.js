import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About'

const Stack = createStackNavigator();

export default function aboutScreen() {
    const globalScreenOptions = {
        headerStyle : { backgroundColor: '#2C6BED'},
          headerTitleStyle : { color: 'white', },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
      }
    return (
        <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    )
}

