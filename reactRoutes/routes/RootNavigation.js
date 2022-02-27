import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
