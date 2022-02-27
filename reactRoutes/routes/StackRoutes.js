import * as React from "react";
import { View, Text, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsPage from "../screens/DetailsPage";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
