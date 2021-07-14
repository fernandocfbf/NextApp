import React from "react";
import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import { RectButton } from 'react-native-gesture-handler'

import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";
import { TitleScreen } from "../../components/TitleScreen";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ListItem } from "../../components/ListItem";
import { styles } from './styles'
import { theme } from "../../global/styles/theme";
import { EmptyList } from "../../components/EmptyList";
import { ListFooter } from "../../components/ListFooter";
import { useEffect } from "react";
import { useListHeader } from "../../contexts/listHeaderContext";

export function ArtificialIntelligence() {

  const [download, setDownload] = useState(false)
  const { data, dataClassified } = useListHeader()

  return (
    <Background>
      <ScrollView>
        <SafeAreaView>
          <TitleScreen />
          <HomeDescription
            title={"Our Algorithm"}
            descripition={"Automate your email filter"}
            underline={theme.colors.purple}
            primary={theme.colors.purple}
            secondary={theme.colors.fake_background}
          />

          <View style={styles.content}>
            <View style={styles.table}>
              <ListHeader
                title={"Data to analyze"}
                subtitle={"Get Data"}
              ></ListHeader>
              {data.length > 0 ?
                <FlatList
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <ListItem
                      from={item.de}
                      resume={"Qualquer coisa"}
                      date={item.data}
                    />
                  )}
                  ItemSeparatorComponent={() => <ListDivider />}
                  showsVerticalScrollIndicator={false}
                />
                :
                <EmptyList />
              }
              <ListFooter
                currentPage={1}
                allPages={parseInt(data.length / 3) + 1}
              />
              <RectButton
                style={[styles.download, {
                  backgroundColor: download ? theme.colors.green : theme.colors.gray
                }]}
                onPress={() => console.log()}
              >
                <Text style={styles.downloadText}>
                  Download
                </Text>
              </RectButton>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Background>
  )
}