import React from "react";
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Tool } from "../Tool";
import { styles } from "./styles";
import { categories } from "../../utils/tools";
import { theme } from "../../global/styles/theme";

export function ToolSelect() {
  const navigation = useNavigation()

  function handleToolClick(screen: string) {
    navigation.navigate(screen)
  }

  function handleIcon(screen: string) {
    if (screen === "ArtificialIntelligence") {
      return (<FontAwesome5 name="brain" size={50} color={theme.colors.green} />)
    }

    else if (screen === "WebScraping") {
      return (<MaterialCommunityIcons name="search-web" size={50} color={theme.colors.green} />)
    }

    return (<Entypo name="database" size={50} color={theme.colors.green} />)

  }

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(tool => (
          <Tool
            key={tool.id}
            title={tool.title}
            icon={
              handleIcon(tool.screen)
            }
            onPress={() => handleToolClick(tool.screen)}
          ></Tool>
        ))
      }


    </ScrollView>
  )
}