import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";
import { Provider } from "react-native-paper";

export default function TrainingList() {
  [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const subTrainings = DataStore.observeQuery(Training).subscribe({
      next: ({ items, isSynced }) => {
        setTrainings(items);
        console.log(trainings);
      },
    });

    return () => subTrainings.unsubscribe();
  }, []);

  return (
    <>
      <View>
        {trainings.map((training) => {
          return (
            <View key={training.id}>
              <Text>{training.name} taught by:</Text>
              <List.Section>
                {training.instructor.map((item) => {
                  return <List.Item title={item} />;
                })}
              </List.Section>
            </View>
          );
        })}
      </View>
    </>
  );
}
