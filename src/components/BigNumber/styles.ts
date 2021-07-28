import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: theme.colors.cyan,
        borderBottomWidth: 2,
    },

    number: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.white,
        fontSize: 30,
        borderBottomColor: theme.colors.green,
    },
    
    description:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.gray,
        fontSize: 13,
    }
    
})