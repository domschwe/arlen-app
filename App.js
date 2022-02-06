import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import Header from "./components/Header";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AdminScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4ffc7",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
