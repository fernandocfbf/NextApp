import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

import logoPng from '../../../assets/logo_login.png'

import { Background } from '../../components/Background'
import { InputLogin } from '../../components/InputLogin'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.image}
            source={logoPng}
            resizeMode="stretch"
          />
          <Text style={styles.welcome}>
            Welcome Back!
          </Text>
          <View style={styles.form}>
            <InputLogin
              text={"email"}
              password={false}
            />
            <InputLogin
              text={"password"}
              password={true}
            />
          </View>
          <TouchableOpacity
            style={styles.login}
            onPress={handleSignIn}
            activeOpacity={0.6}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            onPress={() => console.log("press Register")}
            activeOpacity={0.6}
          >
            <Text style={styles.registerText}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={styles.newUser}>
            Dont't have the password? Please ask your superiors
          </Text>
        </SafeAreaView>
      </ScrollView>
    </Background>
  )
}