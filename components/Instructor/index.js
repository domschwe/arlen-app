import React, { useState, useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  TextInput,
  Button,
  Modal,
  Portal,
  Text,
  Checkbox,
} from "react-native-paper";
import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";
import styles from "./styles";

export default function Instructor(props) {
  const { name, selected, setSelected } = props;
  const checked = selected.includes(selected);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.checkbox}>
        <Checkbox
          status={selected.includes(name) ? "checked" : "unchecked"}
          onPress={() => {
            if (selected.includes(name)) {
              const updated = selected.filter((instructor) => {
                return instructor !== name;
              });
              setSelected(updated);
            } else {
              setSelected([name, ...selected]);
            }
          }}
          uncheckedColor="#fc030b"
        />
      </View>
    </View>
  );
}
