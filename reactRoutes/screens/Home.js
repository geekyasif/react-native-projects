import { View, Text, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Button
        title="Go to Detail Page"
        onPress={() =>
          navigation.navigate("Details", { name: "Mohammad Asif" })
        }
      />
    </View>
  );
}
