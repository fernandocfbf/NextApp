import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  table: {
    marginVertical: 15,
    marginLeft: 24,
    marginRight: 24,
    padding: 5,
    borderRadius: 8,
  },
  download: {
    marginTop: 24,
    width: "100%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  downloadText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text500,
    fontSize: 16
  },
})