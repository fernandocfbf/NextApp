import React from "react";
import { SafeAreaView, Text, Image, View } from "react-native";


import avatarPng from "../../../assets/golab.png"
import { Background } from "../../components/Background";
import { styles } from "./styles";

export function Home() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>
              Hello, Sibs!
            </Text>
            <Text style={styles.automateText}>
              Let's automate some stuffs
            </Text>
          </View>
          <Image
            style={styles.avatar}
            source={avatarPng}
          />
        </View>
      </SafeAreaView>
    </Background>
  )
}