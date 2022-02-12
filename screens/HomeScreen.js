import React from "react";
export default function HomeScreen(navigation) {
  return (
    <Button
      title="Go to your courses"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
}
