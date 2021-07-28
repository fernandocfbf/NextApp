import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import MapView, { Marker, Circle } from "react-native-maps";

import { countries_coordinates } from '../../utils/countries';
import { BigNumber } from '../../components/BigNumber';
import { Background } from "../../components/Background";
import { TitleScreen } from "../../components/TitleScreen";
import { styles } from './styles';
import { darkTheme } from '../../utils/darkTheme';
import { theme } from '../../global/styles/theme';
import ImagePNG_1 from '../../assets/mapMarker.png'
import ImagePNG_2 from '../../assets/mapMarker_2.png'



export function DataAnalysis() {
    const [data, setData] = useState(Array)
    useEffect(() => {
        console.log("Getting database info...")
    })

    return (
        <Background>
            <ScrollView style={styles.content}>
                <TitleScreen
                    title={'Data Analysis'}
                />
                <MapView
                    style={styles.map}
                    customMapStyle={darkTheme}
                    zoomEnabled={false}

                >
                    {
                        countries_coordinates.map((country) => (
                            <Marker
                                coordinate={{
                                    latitude: country.latitude,
                                    longitude: country.longitude,
                                }}
                                image={ImagePNG_2}
                            />
                        ))
                    }
                </MapView>
                <View style={styles.bigNumbers}>
                    <BigNumber
                        bigNumber={'309'}
                        description={'Contracts'}
                    />
                    <BigNumber
                        bigNumber={'25M'}
                        description={'Invested'}
                    />
                    <BigNumber
                        bigNumber={'49'}
                        description={'Companies'}
                    />
                </View>

            </ScrollView>
        </Background>

    )
}