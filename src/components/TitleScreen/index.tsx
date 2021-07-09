import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import { CloseButton } from "../CloseButton";

export function TitleScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>
          NLP
        </Text>
        <CloseButton></CloseButton>
      </View>
    </View>

  )
}