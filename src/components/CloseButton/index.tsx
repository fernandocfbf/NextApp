import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function CloseButton({ ...rest }: RectButtonProps) {
  const navigation = useNavigation()

  function handleCloseButton() {
    navigation.navigate("Home")
  }

  return (
    <RectButton
      style={styles.container}
      {...rest}
      onPress={() => handleCloseButton()}
    >
      <MaterialCommunityIcons
        name="close"
        color={theme.colors.white}
        size={24}
      >
      </MaterialCommunityIcons>

    </RectButton>
  )
}