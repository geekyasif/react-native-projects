import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import Cases from './components/cases'
import Footer from './components/footer'
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Cases/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
