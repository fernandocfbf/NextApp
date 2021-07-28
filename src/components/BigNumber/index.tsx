import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    bigNumber: string;
    description: string
}


export function BigNumber({ bigNumber, description }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {bigNumber}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    )
}