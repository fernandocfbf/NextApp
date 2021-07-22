import React, { ReactNode, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api';
import { styles } from './styles'
import { theme } from "../../global/styles/theme";

import { useListHeaderWeb } from '../../contexts/listHeaderWebContext'

type Props = {
  title: string;
  subtitle: string;
}

export function ListHeaderWeb({ title, subtitle }: Props) {

  const { data, loading, handleGetData, handleLoading } = useListHeaderWeb()

  async function handleButton() {
    handleLoading(true)
    //do something
    handleLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <RectButton
        style={[styles.getData, {
          backgroundColor: loading ? theme.colors.gray : theme.colors.green
        }]}
        onPress={() => {
          handleButton()
        }}
        enabled={!loading}
      >
        {
          loading == false || !data ?
            <Text style={styles.getDateText}>{subtitle}</Text>
            :
            <View style={styles.loadingButton}>
              <ActivityIndicator color="#ffff" />
            </View>
        }
      </RectButton>
    </View>

  )
}