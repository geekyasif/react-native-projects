import { View, Text, Button } from "react-native";
import React from "react";

export default function DetailsPage({ route, navigation }) {
  const { name } = route.params;
  return (
    <View>
      <Text>This is Detail Page {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}
