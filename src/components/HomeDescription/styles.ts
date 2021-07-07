import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container:{
    marginHorizontal: 24,
    marginTop: 35,
    height: 150,
    borderRadius: 15,
  },
  content: {
    width: "100%",
    height: "100%"
  },

  title:{
    width: 134,
    fontSize: 25,
    color: theme.colors.white,
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.green,
    fontWeight: 'bold'
  },

  text:{
    fontSize: 16,
    color: theme.colors.white,
    marginLeft: 24
  }
})