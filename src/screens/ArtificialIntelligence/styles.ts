import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  getData: {
    width: 240,
    height: 40,
    marginLeft: 24,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  getDateText:{
    color: theme.colors.white,
    fontSize: 16
  }
})