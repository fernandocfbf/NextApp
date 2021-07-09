import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler'


import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";
import { TitleScreen } from "../../components/TitleScreen";
import { styles } from './styles'
import { theme } from "../../global/styles/theme";
import { color } from "react-native-reanimated";

export function ArtificialIntelligence() {

  const [getData, setGetData] = useState(false)

  function handleGetDate() {
    console.log("ADIS")
  }

  return (
    <Background>
      <TitleScreen />
      <HomeDescription
        title={"Our Algorithm"}
        descripition={"Automate your email filter"}
        underline={theme.colors.purple}
        primary={theme.colors.purple}
        secondary={theme.colors.fake_background}
      />
      <RectButton
        style={[styles.getData, {
          backgroundColor: getData ? theme.colors.purple : theme.colors.gray
        }]}
        onPress={() => handleGetDate()}
      >
        <Text style={styles.getDateText}>Get Data</Text>
      </RectButton>
    </Background>
  )
}