import React from "react";
import { View, ScrollView } from "react-native";
import TrainingList from "../../components/TrainingList";
import AddTrainingForm from "../../components/AddTrainingForm";
import PageTitle from "../../components/PageTitle";

export default function AdminScreen() {
  return (
    <View>
      <PageTitle
        title="Add a New Training"
        subtitle="Enter information into the form below"
      />
      <AddTrainingForm />
      <TrainingList />
    </View>
  );
}
