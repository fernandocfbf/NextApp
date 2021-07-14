import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  content: {
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    color: theme.colors.white,
    alignSelf: 'flex-end',
  }
})