import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {
  institution: string;
  dataBaseSize: number;
  selected: boolean;
}

export function InstitutionBox({ institution, dataBaseSize, selected }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}>
      <View>
        <AntDesign name="google" size={40} color={theme.colors.white} />
      </View>
      <View style={styles.generalInfo}>
        <Text style={styles.institution}>
          {institution}
        </Text>
        <Text style={styles.dataBaseSize}>
          Data Base Size: {dataBaseSize}
        </Text>
      </View>
    </TouchableOpacity>
  )
}