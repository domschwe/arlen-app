import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";

// Amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import Header from "./components/Header";
import CustomNavigationBar from "./components/CustomNavigationBar";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

import { SafeAreaView } from "react-native-web";
import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      {/* <View style={styles.appContainer}> */}
      {/* <Header /> */}

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />

          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{ title: "Admin" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </Provider>
  );
}
