import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function List(props) {
  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <p>{props.nama}</p>
      <p>{props.alamat}</p>
    </View>
  );
}
