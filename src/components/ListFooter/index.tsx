import React from "react";
import { View, Text } from "react-native";

import { styles } from './styles'

type Props = {
  currentPage: number;
  allPages: number;
}

export function ListFooter({ currentPage, allPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {currentPage} / {allPages}
      </Text>
    </View>
  )
}