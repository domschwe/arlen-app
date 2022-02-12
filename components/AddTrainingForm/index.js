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
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";
import InstructorList from "../InstructorList";

export default function AddTrainingForm() {
  // Name
  [name, setName] = useState("");

  // Instructor
  [instructor, setInstructor] = useState("");
  [selected, setSelected] = useState([]);
  [visible, setVisible] = useState(false);
  const toggleModal = () => setVisible(!visible);

  function handleSelectInstructorClick() {
    toggleModal();
    console.log("Instructor button clicked");
  }

  // Date
  [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    console.warn("A date has been picked: ", selectedDate);
    setDate(selectedDate);
    hideDatePicker();
  };

  // Save
  const handleSaveClick = useCallback(async () => {
    if (name == "") {
      console.log("No description entered");
      return;
    }

    if (selected.length == 0) {
      console.log("No instructor selected.");
      return;
    }

    const save = await DataStore.save(
      new Training({
        name: name,
        instructor: selected,
      })
    );
    console.log(save);

    setName("");
    setSelected([]);
  }, []);

  // Test Mode Stuff
  const testMode = true;

  async function handleClearLocalDataClick() {
    console.log("Clearning local data");
    await DataStore.clear();
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
          <Text>Select Instructors</Text>
        </Button>
        <View key={selected}>
          {selected.map((item) => {
            return <Text>{item}</Text>;
          })}
        </View>

        <Button title="Select Date" onPress={showDatePicker}>
          <Text>Select Date</Text>
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Button onPress={handleSaveClick}>
          <Text>Save</Text>
        </Button>

        {testMode && (
          <Button onPress={handleClearLocalDataClick} visible="false">
            <Text>Clear Local Data</Text>
          </Button>
        )}
      </View>
    </View>
  );
}
