import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

export default function CustomSidebar(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "red",
          height: 200,
        }}
      ></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <View>
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Rate Us
          </Text>
        </View>
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        www.aboutreact.com
      </Text>
      <View
        style={{
          backgroundColor: "red",
          height: 200,
        }}
      ></View>
    </SafeAreaView>
  );
}
