import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, FlatList } from 'react-native';
import MapView, { Marker, Circle } from "react-native-maps";


import { countries_coordinates } from '../../utils/countries';
import { BigNumber } from '../../components/BigNumber';
import { Background } from "../../components/Background";
import { TitleScreen } from "../../components/TitleScreen";
import { styles } from './styles';
import { darkTheme } from '../../utils/darkTheme';
import { theme } from '../../global/styles/theme';
import ImagePNG_1 from '../../assets/mapMarker_1.png'
import ImagePNG_2 from '../../assets/mapMarker_2.png'
import ImagePNG_3 from '../../assets/mapMarker_3.png'
import api from '../../services/api';
import { Graph } from '../../components/Graph';
import { graphs } from './config'



export function DataAnalysis() {
    const [contries, setContries] = useState(Array)
    const [fields, setFields] = useState(Array)
    const [years, setYears] = useState(Object)
    const [invested, setInvested] = useState(0)
    const [size, setSize] = useState(0)
    const [people, setPeople] = useState(0)

    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    function handleNumbers(number: number, divide: number, sufix: string) {
        return (number / divide).toFixed(1).toString() + sufix
    }

    async function getData() {
        await api.get('/database').then(response => {
            console.log(response.data)
            setContries(response.data.countries)
            setFields(response.data.fields)
            setSize(response.data.size)
            setPeople(response.data.peopleSum)
            setInvested(response.data.investedSum)
            setYears(response.data.years)
        })
    }

    useEffect(() => {
        if (contries == undefined || contries.length == 0) {
            console.log("Getting database info...")
            getData()
        }
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
                    zoomEnabled={true}

                >
                    {
                        contries != undefined
                            ?
                            contries.map((country, index) => {
                                if (country.sum >= 20) var image = ImagePNG_1
                                else if (country.sum < 20 && country.sum >= 10) image = ImagePNG_2
                                else if (country.sum < 10) image = ImagePNG_3
                                return (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: country.latitude,
                                            longitude: country.longitude,
                                        }}
                                        image={image}
                                    />
                                )
                            })
                            :
                            null
                    }
                </MapView>
                <View style={[styles.bigNumbers]}>
                    <BigNumber
                        bigNumber={size.toString()}
                        description={'Contracts'}
                    />
                    <BigNumber
                        bigNumber={handleNumbers(invested, 1000, 'Bi')}
                        description={'Invested'}
                    />
                    <BigNumber
                        bigNumber={handleNumbers(people, 1000000, 'M')}
                        description={'Beneficiaries'}
                    />
                </View>

                <FlatList
                    data={graphs}
                    style={{
                        flex: 1,
                        marginTop: 24,
                    }}
                    renderItem={({ item }) => {
                        return (
                            <Graph
                                key={item.id}
                                graphType={item.type}
                                title={item.title}
                                data={years}
                            ></Graph>
                        )
                    }}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </Background>

    )
}