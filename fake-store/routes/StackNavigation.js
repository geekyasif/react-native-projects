import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../screens/Products/ProductDetails";
import CategoryDetails from "../screens/Category/CategoryDetails";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="FakeStore"
        component={TabNavigation}
      />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Category Details" component={CategoryDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
const styles = StyleSheet.create({});
