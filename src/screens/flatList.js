import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const socialMedia = [
    {
      title: 'Instagram'
    },
    {
      title: 'Facebook'
    },
    {
      title: 'Tiktok'
    },
    {
      title: 'Tinder'
    },
  ]

  // const renderItem = ({item}) => (
  //   <Text>{item.title}</Text>
  // )

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <FlatList   
        data={socialMedia}
        keyExtractor={item => item.title }
        renderItem={({item}) => (
          <Text>{item.title}</Text>
        )}
      />
    
    </View>
  );
}
