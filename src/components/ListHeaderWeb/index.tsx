import React, { ReactNode, useState } from 'react'
import { View, Text, ActivityIndicator, Switch } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api';
import { styles } from './styles'
import { theme } from "../../global/styles/theme";

import { useListSelectedInstitutions } from '../../contexts/selectedInstitutionsContext'

type Props = {
  title: string;
  subtitle: string;
}

export function ListHeaderWeb({ title, subtitle }: Props) {

  const { data } = useListSelectedInstitutions()
  const [upDate, setUpDate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(Array)

  async function handleButton() {
    setLoading(true)
    if (data.includes(1)) {
      await api.post('webScraping_social', { reconhecer: upDate }).then(resp => {
        const resposta = resp.data.replace(/ /g, '')
        if (resposta != false && resposta.length > 6) {
          const resposta_formatada = resposta.replace("[", "").replace("]", "").replaceAll("'", "").split(",")
          var new_data = searched
          for (var i = 0; i < resposta_formatada.length; i++) {
            new_data.push({
              'source': "Social Finance",
              'link': resposta_formatada[i].replace(/(\r\n|\n|\r)/gm, "")
            })
          }
          setSearched(new_data)
        }
      }).catch((err) => console.log(err))
    }
    if (data.includes(2)) {
      await api.post('webScraping_lab', { reconhecer: upDate }).then(resp => {
        const resposta = resp.data.replace(/ /g, '')
        if (resposta != false && resposta.length > 6) {
          const resposta_formatada = resposta.replace("[", "").replace("]", "").replaceAll("'", "").split(",")
          var new_data = searched
          for (var i = 0; i < resposta_formatada.length; i++) {
            new_data.push({
              'source': "Go Lab",
              'link': resposta_formatada[i].replace(/(\r\n|\n|\r)/gm, "")
            })
          }
          setSearched(new_data)
        }
      }).catch((err) => console.log(err))
    }
    if (data.includes(3)) {
      await api.post('webScraping_instiglio', { reconhecer: upDate }).then(resp => {
        const resposta = resp.data.replace(/ /g, '')
        if (resposta != false && resposta.length > 6) {
          const resposta_formatada = resposta.replace("[", "").replace("]", "").replaceAll("'", "").split(",")
          var new_data = searched
          for (var i = 0; i < resposta_formatada.length; i++) {
            new_data.push({
              'source': "Instiglio",
              'link': resposta_formatada[i].replace(/(\r\n|\n|\r)/gm, "")
            })
          }
          setSearched(new_data)
        }
      }).catch((err) => console.log(err))
    }
    if (data.includes(4)) {
      await api.post('webScraping_sector', { reconhecer: upDate }).then(resp => {
        const resposta = resp.data.replace(/ /g, '')
        if (resposta != false && resposta.length > 6) {
          const resposta_formatada = resposta.replace("[", "").replace("]", "").replaceAll("'", "").split(",")
          var new_data = searched
          for (var i = 0; i < resposta_formatada.length; i++) {
            new_data.push({
              'source': "Third Sector",
              'link': resposta_formatada[i].replace(/(\r\n|\n|\r)/gm, "")
            })
          }
          setSearched(new_data)
        }
      }).catch((err) => console.log(err))
    }
    setLoading(false)
  }

  function toggleSwitch() {
    setUpDate(!upDate)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.toggle}>
          <Switch
            trackColor={{ false: theme.colors.gray, true: theme.colors.currentLine }}
            thumbColor={upDate ? theme.colors.green : theme.colors.currentLine}
            onValueChange={toggleSwitch}
            value={upDate}
          />
          <Text
            style={[styles.toggleText, {
              color: upDate ? theme.colors.white : theme.colors.gray
            }]}>
            upDate (MongoAtlas)
          </Text>
        </View>
      </View>
      <RectButton
        style={[styles.getData, {
          backgroundColor: loading ? theme.colors.gray : theme.colors.green
        }]}
        onPress={() => { loading == false ? handleButton() : null
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