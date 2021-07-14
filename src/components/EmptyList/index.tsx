import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from "react-native";
import { styles } from "./styles";


export function EmptyList() {
  return (
    <View style={styles.container}>
      <AntDesign 
      style={{"alignSelf": 'center'}}
      name="addfolder" size={40} color="gray" />
      <Text style={styles.empty}>Empty data</Text>
    </View>
  )
}