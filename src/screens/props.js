import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";
import List from '../components/list'

export default function Props() {
  // Create variable to insert link Image

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <List nama="Dandi" alamat="Bekasi"/>
      <Image source={{ uri: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" }} style={{ width: 305, height: 159 }} />
    </View>
  );
}
