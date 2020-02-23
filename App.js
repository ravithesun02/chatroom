import React ,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './components/Maincomponent';
import { Container } from 'native-base';
import {StatusBar} from 'react-native';

const stackNav=createStackNavigator({
  Main:{
    screen:MainScreen
  }
},{
  defaultNavigationOptions:{
   headerShown:false 
  }
});


const AppContainer=createAppContainer(stackNav);


class App extends Component{




  render(){
    
    return(
      <Container style={{justifyContent:'center',flex:1}}>
       
          <AppContainer/>
          <StatusBar backgroundColor='white' barStyle='dark-content'/>
       </Container>
    )
  }
}



export default App;
