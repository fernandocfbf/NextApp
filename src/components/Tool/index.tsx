import React, { ReactNode } from "react";
import { View, Text } from 'react-native'
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient'


import { styles } from "./styles";
import { theme } from '../../global/styles/theme'


type Props = RectButtonProperties & {
  title: string;
  icon: ReactNode;
}

export function Tool({
  title,
  icon,
  ...rest
}: Props) {

  const { selection, fake_background } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[selection, fake_background]}>
        {icon}
        <Text style={styles.title}>
          {title}
        </Text>

      </LinearGradient>
    </RectButton>
  )
}