import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { ArtificialIntelligence } from '../screens/ArtificialIntelligence'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.white
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="ArtificialIntelligence"
        component={ArtificialIntelligence}
      />
    </Navigator>
  )
}