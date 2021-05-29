import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import signupScreen from './screens/signupScreen';
import HomeScreen from './screens/homeScreen';
import addChatScreen from './screens/addChatScreen';
import enterChatScreen from './screens/enterChatScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle : { backgroundColor: '#2C6BED'},
    headerTitleStyle : { color: 'white', },
    headerTintColor: 'white',
    headerTitleAlign: 'center'
}

export default function App() {
  return (

    <NavigationContainer style={styles.container}>
          <StatusBar style="auto"/>
          <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={signupScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="addChat" component={addChatScreen} />
                <Stack.Screen name="enterChat" component={enterChatScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
