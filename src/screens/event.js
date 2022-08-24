import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function Event() {
  // Create Function Here
  function Hello(){
    alert("Hello Batch 37")
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <TouchableOpacity onPress={Hello}>Klik</TouchableOpacity>
      <TouchableOpacity onPress={()=> alert("Hello Guys")}>Guys</TouchableOpacity>
    </View>
  );
}
