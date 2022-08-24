import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const socialMedia = ["Instagram","Tiktok","Tinder","Facebook"]

  return (
    <View>
      <StatusBar />
      {socialMedia.map((item, index) => {
        return(
          <Text key={index}>{item}</Text>
        )
      })}

      {/* {socialMedia.map((item, index)=> (
        <Text key={index}>{item}</Text>
      ))} */}

    </View>
  );
}
