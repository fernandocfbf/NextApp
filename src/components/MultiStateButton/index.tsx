import React from 'react'
import { useState } from "react";
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { dates } from './config'
import { theme } from '../../global/styles/theme';
import { useMultiStateButton } from '../../contexts/multiStateButtonContext';


export function MultiStateButton() {

  const {selected, handleSelectDate} = useMultiStateButton()

  return (
    <View style={styles.container}>
      {
        dates.map(item => (
          <RectButton
            key={item.id}
            style={[styles.dateButton, {
              backgroundColor: item.id === selected ? theme.colors.purple : theme.colors.gray,
            }]}
            onPress={() => handleSelectDate(item.id)}
          >
            <Text style={styles.text}>
              {item.text}
            </Text>
          </RectButton>
        ))
      }

    </View>
  )
}