import React, { useState, useCallback } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";

export default function AddTrainingForm() {
  [name, setName] = useState("");
  [instructor, setInstructor] = useState("");

  const handleSaveClick = useCallback(async () => {
    const save = await DataStore.save(
      new Training({
        name: name,
        instructor: instructor,
      })
    );
    console.log(save);
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Training Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Instructor"
        onChangeText={setInstructor}
        value={instructor}
      />
      <TouchableOpacity onPress={handleSaveClick}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
