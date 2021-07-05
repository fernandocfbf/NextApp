import React from "react";
import { View, Text } from "react-native";

import { Background } from "../../components/Background";

export function Home() {
  return (
    <Background>
      <View>
        <Text>
          Home Page!
        </Text>
      </View>
    </Background>
  )
}