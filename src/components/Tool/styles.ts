import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8

  },

  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },

  title: {
    color: theme.colors.white,
    fontSize: 15,
    marginTop: 8
  },
})