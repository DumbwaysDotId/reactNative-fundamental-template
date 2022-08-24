import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

// Import Component
import Content from './src/components/content'
import Header from './src/components/header'

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Content />
      <Header />
    </View>
  );
}
