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
import InstructorList from "../InstructorList";

export default function AddTrainingForm() {
  [name, setName] = useState("");
  [instructor, setInstructor] = useState("");
  [selected, setSelected] = useState([]);
  [visible, setVisible] = useState(false);

  const toggleModal = () => setVisible(!visible);

  const handleSaveClick = useCallback(async () => {
    const save = await DataStore.save(
      new Training({
        name: name,
        instructor: selected,
      })
    );
    console.log(save);
  }, []);

  function handleSelectInstructorClick() {
    toggleModal();
    console.log("Instructor button clicked");
  }

  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Select from the list of instructors</Text>
          <InstructorList selected={selected} setSelected={setSelected} />
        </Modal>
      </Portal>
      <View>
        <TextInput
          placeholder="Enter training name here..."
          onChangeText={setName}
          value={name}
        />
        <Button onPress={handleSelectInstructorClick} style="">
          <Text>Select Instructor</Text>
        </Button>
        <Text>Selected Instructors:</Text>
        {selected.map((item) => {
          return <Text>{item}</Text>;
        })}
        <Button onPress={handleSaveClick}>
          <Text>Save</Text>
        </Button>
        <Button
          onPress={async () => {
            await DataStore.clear();
          }}
        >
          <Text>Clear Local Data</Text>
        </Button>
      </View>
    </View>
  );
}
