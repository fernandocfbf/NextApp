import React from "react";
import { TextInput } from 'react-native'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {
  text: string
}

export function InputLogin({ text }: Props) {
  return (
    <TextInput
      style={styles.container} 
      placeholder={text}
      placeholderTextColor={theme.colors.gray}
      />
  )
}