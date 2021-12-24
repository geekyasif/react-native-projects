import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './homeRoute';
import About from './aboutRoute';

export default function drawer() {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}  />
            <Drawer.Screen name="About" component={About}  />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
