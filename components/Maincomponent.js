import React ,{Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeTab from './Homecomponent';
import SearchTab from './SearchComponent';
import Message from './MessageComponent';
import Profile from './ProfileComponent';
import { Icon } from 'native-base';
import ChatView from './chattingcomponent';
import VideoUpload2 from './Video2component';
import Camera from './camera/cameracomponent';

const ChatMessage=createStackNavigator({
    Msg:{
        screen:Message
    },
    Chatting:{
        screen:ChatView
    }
},{
    defaultNavigationOptions:{
        headerShown:false
    }
});

ChatMessage.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

  const VideoSearch=createStackNavigator({
      srch:{
          screen:SearchTab
      },
      upload:{
          screen:VideoUpload2
      }
  },{
      defaultNavigationOptions:{
          headerShown:false
      }
  });
  VideoSearch.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

  const Homecamera=createStackNavigator({
      home:{
          screen:HomeTab
      },
      camera:{
          screen:Camera
      }
  },{
    defaultNavigationOptions:{
        headerShown:false
    }
});

  Homecamera.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const footer=createBottomTabNavigator({
    HomeTab:{
        screen:Homecamera,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <Icon name='home' style={{color:tintColor}}/>
            )
        }
    },
    SearchTab:{
        screen:VideoSearch,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <Icon name='search' style={{color:tintColor}}/>
            )
        }
    },
    Message:{
        screen:ChatMessage,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <Icon name='mail' style={{color:tintColor}}/>
            )
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <Icon name='person' style={{color:tintColor}}/>
            )
        }
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions: {
        style: {
            position:'absolute',
           
            borderRadius:50,
            borderTopWidth:0,
            marginBottom:20,
            width:250,
            alignSelf:'center',
            elevation:4
        },
        activeTintColor: '#000',
        inactiveTintColor: 'grey',
        showLabel:false,
        showIcon: true
    }

});

const MainNavigator=createAppContainer(footer);

class MainScreen extends Component{

    render(){
        return(
            <MainNavigator/>
        )
    }

}

export default MainScreen;