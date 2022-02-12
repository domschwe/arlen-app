import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { DataStore } from "aws-amplify";
import { Training } from "../../src/models";
import { Provider } from "react-native-paper";
import styles from "./styles";

export default function TrainingList()
{
  // Get All Trainings
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
      <View style={styles.trainingContainer}>
        {trainings.map((training) => {
          return (
            <View key={training.id} style={styles.trainingItem}>
              <Text style={styles.title}>{training.name}</Text>

              <FlatList
                data={training.instructor}
                renderItem={(item) => {
                  <Text>{item}</Text>;
                }}
              />

              <Text>{training.date}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
