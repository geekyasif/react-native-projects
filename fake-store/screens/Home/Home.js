import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import HomeCarousel from "../../component/HomeCarousel";
import Products from "../Products/Products";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <HomeCarousel navigation={navigation} />
          <Products navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
