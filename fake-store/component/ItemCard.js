import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ItemCard = ({ item }) => {
  return (
    <View key={item.id}>
      <Image
        style={{
          width: "100%",
          height: 150,
        }}
        resizeMode="contain"
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          padding: 10,
          paddingLeft: 2,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {" "}
          {item.category}
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }} numberOfLines={1}>
          {" "}
          {item.title}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#388e3c",
              borderRadius: 4,
              padding: 1,
              paddingRight: 4,
              paddingLeft: 4,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item.rating.rate}
            </Text>
            <MaterialIcons name="star-border" size={18} color="white" />
          </View>
          <Text style={{ color: "gray" }}>({item.rating.count})</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              marginRight: 10,
            }}
          >
            ${item.price}
          </Text>
          <Text
            style={{
              color: "gray",
              textDecorationLine: "line-through",
            }}
          >
            {" "}
            ${item.price + 200}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
