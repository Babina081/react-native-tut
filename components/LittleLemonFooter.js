import React from "react";
import { Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "yellow",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, {new Date().getFullYear()}
      </Text>
    </View>
  );
}
