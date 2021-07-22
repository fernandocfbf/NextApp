import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    padding: 3,
    marginVertical: 3,
    borderRadius: 8,
    backgroundColor: theme.colors.selection
  },
  generalInfo:{
    marginLeft: 5
  },
  institution: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    fontSize: 16
  },
  dataBaseSize:{
    color: theme.colors.gray,
    fontFamily: theme.fonts.text400,
    fontSize: 12
  }
})