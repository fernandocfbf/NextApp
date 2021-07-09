import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 26,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  helloText:{
    fontSize: 35,
    fontFamily: theme.fonts.title500,
    color: theme.colors.white
  },
  avatar: {
    width: 60,
    height: 60,
  }
})