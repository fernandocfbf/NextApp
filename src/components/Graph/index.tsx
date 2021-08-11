import React from 'react'
import { Text, View, Dimensions, ActivityIndicator } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { timing } from 'react-native-reanimated';

type Props = {
    graphType: number;
    title: string;
    data: Object
}

export function Graph({ graphType, title, data }: Props) {

    const chartConfig = {
        backgroundGradientFrom: theme.colors.white,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: theme.colors.white,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: true,
    };

    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    if (graphType === 1) {
        return (
            <View
                style={[styles.container, { width: windowWidth, height: windowHeight * 0.4 }]}
            >
                <Text
                    style={styles.titleGraph}
                >
                    {title}
                </Text>
                {
                    Object.keys(data).length != 0
                        ?
                        (
                            <LineChart
                                verticalLabelRotation={40}
                                withInnerLines={false}
                                withOuterLines={false}
                                data={{
                                    labels: Object.keys(data),
                                    datasets: [
                                        {
                                            data: Object.values(data),
                                            color: (opacity = 1) => theme.colors.cyan, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                }
                                }
                                width={windowWidth * 0.9}
                                height={windowHeight * 0.3}
                                chartConfig={chartConfig}
                            />
                        )
                        :
                        (
                            <View style={{height: windowHeight * 0.3, justifyContent:'center'}}>
                                <ActivityIndicator color={'#FFF'} size='large' />
                            </View>


                        )
                }
            </View>
        )
    }

    return (
        <View></View>
    )
}