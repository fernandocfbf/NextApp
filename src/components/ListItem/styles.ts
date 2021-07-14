import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 3,
  },
  generalInfo:{
    marginLeft: 5
  },
  from: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    fontSize: 12
  },
  date: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.text400,
    fontSize: 12
  }
})