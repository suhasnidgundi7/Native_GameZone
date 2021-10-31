import React from 'react'
import { View, Text } from 'react-native'
import { About_Style } from '../Styles/AboutStyle'

const About = () => {
    return (
        <>
            <View style={About_Style.container}>
                <Text style={About_Style.titleText}>About Screen</Text>
            </View>            
        </>
    )
}

export default About
