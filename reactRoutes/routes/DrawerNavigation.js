import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import SettingPage from "../screens/SettingPage";
import Home from "../screens/Home";
import CustomSidebar from "./CustomSidebar";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebar {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={SettingPage} />
    </Drawer.Navigator>
  );
}
