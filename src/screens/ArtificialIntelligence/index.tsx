import React from "react";
import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import { RectButton } from 'react-native-gesture-handler'
import { showMessage, hideMessage } from "react-native-flash-message";

import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";
import { TitleScreen } from "../../components/TitleScreen";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ListItem } from "../../components/ListItem";
import { MultiStateButton } from "../../components/MultiStateButton";
import { styles } from './styles'
import { theme } from "../../global/styles/theme";
import { EmptyList } from "../../components/EmptyList";
import { ListFooter } from "../../components/ListFooter";
import { useEffect } from "react";
import { useListHeader } from "../../contexts/listHeaderContext";

export function ArtificialIntelligence() {

  const [download, setDownload] = useState(false)
  const { data, dataClassified, loading } = useListHeader()

  function handleDonwload(dataToDownload: Array<any>) {
    if (dataToDownload.length > 0) {
      console.log("Ah", dataToDownload.length)

      showMessage({
        message: "Simple message",
        type: 'danger',
      });
    } else {
      showMessage({
        message: "Simple message",
        type: "info",
      });
    }
  }

  useEffect(() => {
    if (dataClassified.length > 0 && loading === false) {
      setDownload(true)
    }
  }, [dataClassified, loading])

  return (
    <Background>
      <ScrollView>
        <SafeAreaView>
          <TitleScreen 
            title={'NLP'}
          />
          <HomeDescription
            title={"Our Algorithm"}
            descripition={"Automate your email filter"}
            underline={theme.colors.purple}
            primary={theme.colors.purple}
            secondary={theme.colors.fake_background}
          />

          <View style={styles.content}>
            <View style={styles.table}>
              <MultiStateButton />
              <ListHeader
                title={"Data to analyze"}
                subtitle={"Get Data"}
              ></ListHeader>
              {data.length > 0 ?
                <FlatList
                  data={data.slice(0, 3)}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item }) => (
                    <ListItem
                      from={item.de}
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
                onPress={() => handleDonwload(dataClassified)}
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