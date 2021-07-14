import React, { ReactNode, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import axios from "axios";

import api from '../../services/api';
import { styles } from './styles'
import { theme } from "../../global/styles/theme";
import { useEffect } from 'react';

import { useListHeader } from '../../contexts/listHeaderContext'

type Props = {
  title: string;
  subtitle: string;
}


export function ListHeader({ title, subtitle }: Props) {

  const [loading, setLoading] = useState(false)
  const { data, dataClassified, handleGetData, handleGetDataClassified } = useListHeader()

  async function process() {
    setLoading(true)
    const data_to_send = [] //get just the html

    for (var i = 0; i < data.length; i++) {
      data_to_send.push({ "HTML": data[i]["html"] })
    }
    console.log("Enviando", data_to_send)

    var inicio = 0
    var fim = 40
    var new_data: any[] = []

    for (var i = 0; i < data_to_send.length / 40; i++) {
      await api.post('machineLearning', { manchetes: data_to_send.slice(inicio, fim) })
        .then(resp => {
          if (Math.floor(resp.status / 100) === 2) {
            if (resp.data != false) {
              new_data = new_data.concat(eval('(' + resp.data + ')'))
              handleGetDataClassified(new_data)
            }
          }
        }).catch((err) => {
          console.log(err)
        })

      inicio += 40
      fim += 40
    }
    setLoading(false)
  }

  async function handleButton() {
    setLoading(true)
    await api.get('/googleAlerts').then(response => {
      handleGetData(response.data.data)
      console.log("Chegou ->", data)

    })
    setLoading(false)
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
          data.length == 0 ? handleButton() : process()
        }}
        enabled={!loading}
      >
        {
          loading == false && data.length == 0 ?
            <Text style={styles.getDateText}>{subtitle}</Text>
          :
          loading == false && data.length > 0 ?
            <Text style={styles.getDateText}>Process</Text>
          :
            <View style={styles.loadingButton}>
              <ActivityIndicator color="#ffff" />
            </View>
        }
      </RectButton>
    </View>

  )
}