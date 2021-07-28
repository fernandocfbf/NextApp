import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    
    map: {
        flex: 1,
        height: 280,
        marginTop: 20
    },
    bigNumbers:{
        marginHorizontal: 24,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})