import React, { useState, useCallback, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";

export default function HomeScreen() {
  [name, setName] = useState("");
  [instructor, setInstructor] = useState("");
  [trainings, setTrainings] = useState([]);

  const handleSaveClick = useCallback(async () => {
    const save = await DataStore.save(
      new Training({
        name: name,
        instructor: instructor,
      })
    );
    console.log(save);
  }, []);

  useEffect(() => {
    const subTrainings = DataStore.observeQuery(Training).subscribe({
      next: ({ items, isSynced }) => {
        setTrainings(items);
        console.log(trainings);
        // DataStore.clear();
      },
    });

    return () => subTrainings.unsubscribe();
  }, []);

  return (
    <View>
      <Text>Add a Training</Text>
      <TextInput
        placeholder="Training Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Instructor"
        onChange={setInstructor}
        value={instructor}
      />
      <TouchableOpacity onPress={handleSaveClick}>
        <Text>Save</Text>
      </TouchableOpacity>

      <View>
        {trainings.map((training) => {
          return (
            <View key={training.id}>
              <Text>
                {training.name} taught by {training.instructor}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
