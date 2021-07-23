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
import { useListSelectedInstitutions } from "../../contexts/selectedInstitutionsContext";
import { useEffect } from "react";

export function WebScraping() {
    const { data, handleSelectInstitution, handleClear } = useListSelectedInstitutions()
    useEffect(() => {
        handleClear()
    }, [])
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
                            <ScrollView
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
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Background>
    )
}