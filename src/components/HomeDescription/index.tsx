import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from './styles'

export function HomeDescription() {

  const { selection, fake_background, purple } = theme.colors

  return (
    <TouchableOpacity
      activeOpacity={0.6}
    >
      <LinearGradient
        style={styles.container}
        colors={[selection, fake_background]}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Get Started
          </Text>

          <Text style={styles.text}>
            Here you can use our tools {'\n'}
            to automate your routine.
          </Text>
        </View>
      </LinearGradient>

    </TouchableOpacity>

  )
}