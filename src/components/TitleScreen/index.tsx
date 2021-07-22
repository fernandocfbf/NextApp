import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import { CloseButton } from "../CloseButton";

type Props = {
  title: string
}

export function TitleScreen({ title }: Props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        <CloseButton></CloseButton>
      </View>
    </View>

  )
}