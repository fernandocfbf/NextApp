import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: "space-around"
  },
  dateButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.white,
    alignSelf: 'center'
  }

})