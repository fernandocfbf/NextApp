import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    table: {
        marginVertical: 30,
        marginLeft: 24,
        marginRight: 24,
        padding: 5,
        borderRadius: 8,
    },
    flatList: {
        height: 180,
    }
})