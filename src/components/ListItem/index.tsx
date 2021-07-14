import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {
  from: string;
  date: string;
  resume: string;
}

export function ListItem({ from, date, resume }: Props) {

  function handleFromEmail(email: string){
    const cutStringIndex = email.indexOf("@")
    return email.substring(0, cutStringIndex)
  }

  return (
    <View style={styles.container}>
      <View>
        {from === "googlealerts-noreply@google.com"
          ?
          <AntDesign name="google" size={30} color={theme.colors.white} />
          :
          <AntDesign name="pluscircleo" size={30} color={theme.colors.white} />
        }
      </View>
      <View style={styles.generalInfo}>
        <Text style={styles.from}>
          {handleFromEmail(from)}
        </Text>
        <Text style={styles.date}>
          {date}
        </Text>
      </View>


    </View>
  )
}