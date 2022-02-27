import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Category = ({ navigation }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Electronics",
      desc: "",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Jewelery",
      desc: "",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 3,
      title: "Men's Clothing",
      desc: "",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 4,
      title: "Women's Clothing",
      desc: "",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 1,
      title: "Electronics",
      desc: "",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Jewelery",
      desc: "",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 3,
      title: "Men's Clothing",
      desc: "",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 4,
      title: "Women's Clothing",
      desc: "",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 1,
      title: "Electronics",
      desc: "",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Jewelery",
      desc: "",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 3,
      title: "Men's Clothing",
      desc: "",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 4,
      title: "Women's Clothing",
      desc: "",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 1,
      title: "Electronics",
      desc: "",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Jewelery",
      desc: "",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 3,
      title: "Men's Clothing",
      desc: "",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 4,
      title: "Women's Clothing",
      desc: "",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}
        >
          <FlatList
            data={categories}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Category Details")}
                style={{
                  width: "48%",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  borderColor: "gray",
                  margin: 3,
                  padding: 4,
                }}
              >
                <View>
                  <Image
                    style={{
                      width: "100%",
                      height: 150,
                    }}
                    resizeMode="contain"
                    source={{ uri: item.image }}
                  />
                  <View
                    style={{
                      margin: 10,
                    }}
                  >
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({});
