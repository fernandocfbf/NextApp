import React from 'react'
import { useFonts } from 'expo-font'
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Lexend_500Medium, Lexend_700Bold } from '@expo-google-fonts/lexend'
import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes'
import { Background } from './src/components/Background'
import { ListHeaderContextProvider } from './src/contexts/listHeaderContext'
import { ListHeaderWebContextProvider } from './src/contexts/listHeaderWebContext'
import { MultiStateButtonContextProvider } from './src/contexts/multiStateButtonContext'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Lexend_500Medium,
    Lexend_700Bold
  })

  if (!fontsLoaded) {
    //segura no splash enquanto na carregou
    return <AppLoading></AppLoading>
  }

  return (
    <MultiStateButtonContextProvider>
      <ListHeaderWebContextProvider>
        <ListHeaderContextProvider>
          <Background>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            >
            </StatusBar>
            <Routes />
          </Background>
        </ListHeaderContextProvider>
      </ListHeaderWebContextProvider>
    </MultiStateButtonContextProvider>
  )
}