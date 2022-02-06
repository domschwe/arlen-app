import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default PageTitle = (props) => {
  const { title, subtitle = "" } = props;

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
