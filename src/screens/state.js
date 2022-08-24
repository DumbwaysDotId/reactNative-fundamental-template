import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function State() {
  // Init State
  const [counter, setCounter] = useState(0)

  //Create Function Add
  function Add(){
    return setCounter(counter + 1)
  }

  //Create Function Less
  function Less(){
    if(counter > 0){
      return setCounter(counter - 1)
    }
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>{counter}</Text>
      <TouchableOpacity onPress={Add}>Add</TouchableOpacity>
      <TouchableOpacity onPress={Less}>Less</TouchableOpacity>
    </View>
  );
}
