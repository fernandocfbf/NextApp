import { StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200
  },
  welcome: {
    fontSize: 34,
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    marginTop: 25
  },
  form: {
    marginTop: 70,
    marginBottom: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: "70%",
    backgroundColor: theme.colors.green,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center'
  },
  loginText: {
    alignSelf: 'center',
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fonts.title500
  },
  register: {
    width: "70%",
    marginTop: 15,
    backgroundColor: theme.colors.currentLine,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    

  },
  registerText: {
    alignSelf: 'center',
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fonts.title500
  },
  newUser: {
    marginTop: 10,
    width: '70%',
    color: theme.colors.gray,
    fontFamily: theme.fonts.text400
  }


})