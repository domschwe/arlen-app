import React, { useState, useCallback, useEffect } from "react";
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
import Instructor from "../Instructor";

export default function InstructorList() {
  const instructors = [
    { id: 1, name: "Dom Schweyer" },
    { id: 2, name: "Pastor Arlen" },
    { id: 3, name: "Ludmilla Parnell" },
  ];
  [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <View>
      {instructors.map((instructor) => {
        return (
          <View key={instructor.id}>
            <Instructor
              name={instructor.name}
              selected={selected}
              setSelected={setSelected}
            />
          </View>
        );
      })}
    </View>
  );
}
