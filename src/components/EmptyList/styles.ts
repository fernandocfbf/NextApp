import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  empty: {
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    color: theme.colors.gray,
    alignSelf: 'center'
  }
})