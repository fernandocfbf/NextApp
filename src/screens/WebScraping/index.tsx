import React from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";

import { institutions } from "./config";
import { Background } from "../../components/Background";
import { HomeDescription } from "../../components/HomeDescription";
import { TitleScreen } from "../../components/TitleScreen";
import { ListDivider } from "../../components/ListDivider";
import { ListHeaderWeb } from "../../components/ListHeaderWeb";
import { InstitutionBox } from "../../components/InstitutionBox";
import { styles } from './styles'
import { theme } from "../../global/styles/theme";

export function WebScraping() {
    return (
        <Background>
            <ScrollView>
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
                            <FlatList
                                data={institutions}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <InstitutionBox
                                        institution={item.institution}
                                        dataBaseSize={item.dataBaseSize}
                                        selected={false}
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                            />

                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </Background>
    )
}