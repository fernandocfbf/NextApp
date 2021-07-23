import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { institutions } from "./config";
import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";
import { TitleScreen } from "../../components/TitleScreen";
import { RectButton } from 'react-native-gesture-handler'
import { ListHeaderWeb } from "../../components/ListHeaderWeb";
import { InstitutionBox } from "../../components/InstitutionBox";
import { styles } from './styles'
import { theme } from "../../global/styles/theme";
import { useListSelectedInstitutions } from "../../contexts/selectedInstitutionsContext";
import { useEffect, useState } from "react";

export function WebScraping() {
    const [download, setDownload] = useState(false)
    const { handleClear } = useListSelectedInstitutions()

    useEffect(() => {
        handleClear()
    }, [])

    return (
        <Background>
            <ScrollView
            >
                <SafeAreaView>
                    <TitleScreen
                        title={'WEB SCRAPING'}
                    />
                    <HomeDescription
                        title={"Web Search"}
                        descripition={"Get information from external databases"}
                        underline={theme.colors.purple}
                        primary={theme.colors.purple}
                        secondary={theme.colors.fake_background}
                    />
                    <View style={styles.content}>
                        <View style={styles.table}>
                            <ListHeaderWeb
                                title={'Institutions'}
                                subtitle={'Search'}
                            />
                            <ScrollView
                                nestedScrollEnabled={true}
                                style={styles.flatList}
                            >
                                {
                                    institutions.map(item => (
                                        <InstitutionBox
                                            key={item.id}
                                            id={item.id}
                                            institution={item.institution}
                                            dataBaseSize={item.dataBaseSize}
                                        />
                                    ))
                                }
                            </ScrollView>
                            <RectButton
                                style={[styles.download, {
                                    backgroundColor: download ? theme.colors.green : theme.colors.gray
                                }]}

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