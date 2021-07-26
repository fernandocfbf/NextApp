import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  toggle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggleText: {
    fontFamily: theme.fonts.text400,
    fontSize: 12
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    fontSize: 18,
  },
  getData: {
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  getDateText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text500,
    fontSize: 16
  },
  loadingButton: {
    flex: 1,
    flexDirection: 'row',
  },
})