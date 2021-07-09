import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
} from "react-native";
import { useState, useEffect } from "react";

import avatarPng from "../../../assets/golab.png"
import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";

import { styles } from "./styles";
import { ToolSelect } from '../../components/ToolSelect'
import { theme } from "../../global/styles/theme";

export function Home() {
  const [dataNumber, setDataNumber] = useState([]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>
              Hello, Sibs!
            </Text>
          </View>
          <Image
            style={styles.avatar}
            source={avatarPng}
          />
        </View>
        <HomeDescription 
          title={"Get Started"}
          descripition={"Here you can use our tools \nto automate your routine"}
          underline={theme.colors.green}
          primary={theme.colors.green}
          secondary={theme.colors.currentLine}
        />
        <ToolSelect></ToolSelect>
      </SafeAreaView>
    </Background>
  )
}