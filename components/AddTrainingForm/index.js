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
  const [visible, setVisible] = useState(false);

  const toggleModal = () => setVisible(!visible);

  const handleSaveClick = useCallback(async () => {
    const save = await DataStore.save(
      new Training({
        name: name,
        instructor: instructor,
      })
    );
    console.log(save);
  }, []);

  function handleSelectInstructorClick() {
    toggleModal();
    console.log("Instructor button clicked");
  }

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
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
          <InstructorList />
        </Modal>
      </Portal>
      <View>
        <TextInput
          placeholder="Enter training name here..."
          onChangeText={setName}
          value={name}
        />
        <Button onPress={handleSelectInstructorClick}>
          <Text>Select Instructor</Text>
        </Button>
        <TextInput
          placeholder="Instructor"
          onChangeText={setInstructor}
          value={instructor}
        />
        <Button onPress={handleSaveClick}>
          <Text>Save</Text>
        </Button>
      </View>
    </View>
  );
}
