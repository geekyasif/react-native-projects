import React from "react";
import { StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DsIntro from "./ds/dsIntroScreen";
import Array from "./array/Array";
const Stack = createStackNavigator();

export default function homeScreen() {
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
    headerTitleAlign: "center",
  };
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="DsIntro" component={DsIntro} />
      <Stack.Screen name="Array" component={Array} />
      {/* <Stack.Screen name="LinkedList" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
