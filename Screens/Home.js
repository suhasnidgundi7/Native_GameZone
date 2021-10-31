import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Home_Style } from '../Styles/HomeStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        {
            title: 'pharetra et ultrices neque ornare',
            rating: 5,
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse. Nisi quis eleifend quam adipiscing vitae proin sagittis. Id donec ultrices tincidunt arcu non sodales. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.',
            key: 2
        },
        {
            title: 'ornare suspendisse sed nisi lacus',
            rating: 4,
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Varius morbi enim nunc faucibus.',
            key: 2
        },
        {
            title: 'turpis massa sed elementum tempus',
            rating: 3,
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo. Tincidunt ornare massa eget egestas purus. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Id diam vel quam elementum pulvinar etiam non quam.',
            key: 3
        },
        {
            title: 'lacus viverra vitae congue eu',
            rating: 2,
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dignissim enim sit amet venenatis urna cursus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sed libero enim sed faucibus.',
            key: 4
        },
    ])

    return (
        <>
            <View style={Home_Style.container}>
                <FlatList
                    data={reviews}
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity style={Home_Style.item} onPress={() => navigation.navigate('ReviewDetail', item)}>
                                <MaterialCommunityIcons
                                    name='close'
                                    size={30}
                                    style={{
                                        color: '#C6878F',
                                        margin: 5,

                                    }}
                                />
                                <Text style={Home_Style.titleText}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }
                    
                />
            </View>            
        </>
    )
}

export default Home
