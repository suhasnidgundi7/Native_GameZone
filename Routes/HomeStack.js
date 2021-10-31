import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home'
import ReviewDetail from '../Screens/ReviewDetail';

const screen = {    
    Home: {
        screen: Home
    },
    
    ReviewDetail:{
        screen: ReviewDetail
    },    
    
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack)