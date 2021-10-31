import { StyleSheet } from "react-native";

export const Home_Style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#67697C',
        borderWidth: 5,
        borderRadius: 10,
    },

    titleText: {        
        flex: 1,
        fontFamily: 'nunito_bold',
        fontSize: 20,
        margin: 10,        
    },

    item: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        borderColor: '#969696',
        borderWidth: 5,
        borderRadius: 10,
    },
});