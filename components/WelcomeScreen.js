import React from "react";
import { ScrollView, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView
      horizontal={false}
      indicatorStyle={"white"}
      style={{ flex: "1", padding: 40, backgroundColor: "green" }}
    >
      <Text
        style={{
          fontSize: 40,
          color: "black",
          textAlign: "center",
          padding: 40,
          fontWeight: "bold",
        }}
      >
        Welcome To Little Lemon
      </Text>
      <Text
        style={{
          padding: 40,
          fontSize: 40,
          color: "black",
          textAlign: "center",
          marginVertical: 8,
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}
