import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ReviewDetail = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    { navigation.getParam('title') }
                </Text>
                <Text style={styles.titleText}>
                    { navigation.getParam('rating') }
                </Text>
                <Text style={styles.titleText}>
                    { navigation.getParam('body') }
                </Text>
            </View>       
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#253D5B',
        borderWidth: 5,
        borderRadius: 10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 10,
    },

    titleText:{
        fontFamily: 'nunito_regular',
        fontSize: 15,
        margin: 5,        
    }
})

export default ReviewDetail
