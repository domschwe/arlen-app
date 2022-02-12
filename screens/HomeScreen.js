import React from "react";
import { View, Button, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This site helps you track which trainings are run by Pastor Arlen and his team.</Text>
    </View>
  );
}
