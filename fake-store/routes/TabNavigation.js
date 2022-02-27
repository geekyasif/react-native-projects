import * as React from "react";
import { Text, View, Pressable } from "react-native";

// navigation import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// tab navigations screens
import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import Category from "../screens/Category/Category";
import Admin from "../screens/Admin/Admin";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            // iconName = focused
            //   ? "storefront"
            //   : "storefront";
            iconName = "store";
          } else if (route.name === "Category") {
            iconName = "shopping-bag";
          } else if (route.name === "Cart") {
            iconName = "local-grocery-store";
          } else if (route.name === "Profile") {
            iconName = "person";
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: "FakeStore",
          headerRight: () => (
            <Pressable
              style={{ marginRight: 20 }}
              onPress={() => alert("Search left")}
            >
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),
        }}
        component={Home}
      />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Admin} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
