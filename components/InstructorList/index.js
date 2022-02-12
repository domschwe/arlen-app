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

export default function InstructorList(props) {
  // Get All Instructors
  [instructors, setInstructors] = useState([]);
  useEffect(() => {
    const subInstructors = DataStore.observeQuery(Instructor).subscribe({
      next: ({ items, isSynced }) => {
        setInstructors(items);
        console.log(instructors);
      },
    });

    return () => subInstructors.unsubscribe();
  }, []);

  const { selected, setSelected } = props;

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
