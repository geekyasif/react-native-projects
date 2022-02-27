import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem,DrawerSection } from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen'
import AboutScreen from './screens/aboutScreen'

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer style={styles.container}  >
      <StatusBar style="dark" />
      {/* <Drawer.Screen name="test" component={myComponent} /> */}
      <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="About" component={AboutScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
