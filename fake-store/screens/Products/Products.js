import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductList from "../../component/RowCard";

const Products = ({ navigation }) => {
  return (
    <View>
      <ProductList navigation={navigation} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
