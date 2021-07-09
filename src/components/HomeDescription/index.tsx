import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { styles } from './styles'

type Props = {
  title: string;
  descripition: string;
  underline: string;
  primary: string;
  secondary: string
}

export function HomeDescription({ title, descripition, underline, primary, secondary }: Props) {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
    >
      <LinearGradient
        style={styles.container}
        colors={[primary, secondary]}>
        <View style={styles.content}>
          <Text style={[styles.title, {borderBottomColor: underline}]}>
            {title}
          </Text>

          <Text style={styles.text}>
            {descripition}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>

  )
}