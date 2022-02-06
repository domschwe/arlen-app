import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";

// Amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import Header from "./components/Header";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import { SafeAreaView } from "react-native-web";
import styles from "./styles";

export default function App() {
  return (
    <Provider>
      <View style={styles.appContainer}>
        <Header />
        <View style={styles.siteContainer}>
          <AdminScreen />
          <StatusBar style="auto" />
        </View>
      </View>
    </Provider>
  );
}
