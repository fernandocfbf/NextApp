import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  titleGraph: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    textAlign: "justify",
    marginBottom: 15
  },
  description: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.white,
    textAlign: "justify",
    marginTop: 15

  },
})