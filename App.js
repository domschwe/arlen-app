import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
