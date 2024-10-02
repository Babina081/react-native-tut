import React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text
        style={{
          paddingTop: 50,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
        numberOfLines={1}
      >
        Little Lemon Restaurant
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello</Text>
      </Text>
    </View>
  );
}
