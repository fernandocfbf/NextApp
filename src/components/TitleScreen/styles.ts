import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 3
  },
  title:{
    fontSize: 25,
    color: theme.colors.white,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.purple,
  }
})