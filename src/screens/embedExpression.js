import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function Hello(){
    alert("Hello Guys")
  }

  // Create a variable Here
  const name = "Batch 37"

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>{name}</Text>
      <Text>{Hello()}</Text>
    </View>
  );
}
