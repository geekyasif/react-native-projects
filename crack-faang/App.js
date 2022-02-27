import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import QuestionScreen from './screens/QuestionScreen'
import SolutionScreen from './screens/SolutionScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  
    const globalScreenOptions = {
      headerStyle : { backgroundColor: '#2C6BED'},
        headerTitleStyle : { color: 'white', },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
    }

  return (
    <NavigationContainer>
        <StatusBar style="light" />    
        <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="HomeScreen" >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
          <Stack.Screen name="SolutionScreen" component={SolutionScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

