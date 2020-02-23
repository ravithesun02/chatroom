import React , {Component} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View,Text } from 'react-native';
import HomeTab from '../Homecomponent';

class HomeCamera extends Component{
    render(){
        const cameRa=()=>{
            return (<View>
                <Text>THis is camera section</Text>
            </View>)
        }
        return (

            <Swipeable renderLeftActions={cameRa} containerStyle={{flex:1}}>
                <HomeTab/>
            </Swipeable>
           
        )
    }
}

export default HomeCamera;