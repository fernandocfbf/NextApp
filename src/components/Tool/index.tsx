import React, { ReactNode } from "react";
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'



import { styles } from "./styles";
import { theme } from '../../global/styles/theme'


type Props = {
  title: string;
  icon: ReactNode;
  screen: string
}

export function Tool({
  title,
  icon,
  screen
}: Props) {
  const navigation = useNavigation()

  function handleToolClick(screen: string) {
    navigation.navigate(screen)
  }

  const { selection, fake_background } = theme.colors

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => handleToolClick(screen)}
    >
      <LinearGradient
        style={styles.container}
        colors={[selection, fake_background]}>
        {icon}
        <Text style={styles.title}>
          {title}
        </Text>

      </LinearGradient>
    </TouchableOpacity>
  )
}