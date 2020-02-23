import React ,{Component} from 'react';
import { Content,List,ListItem,Thumbnail,Body,Left,Right } from 'native-base';
import {View,Text,StatusBar} from 'react-native';




export default class Chatscreen extends Component{

  constructor(props)
  {
    super(props);
  }

render(){
    return(
      
           
      <Content>
           <View style={{marginTop:5}}> 
                  <List>
                    <ListItem avatar onPress={()=>this.props.navigation.navigate('chatting')}>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                      </Left>
                      <Body>
                      <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
                        <Text note style={{color:'gray'}}>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                  </List>
            </View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
        </Content>
               
          
      
    )
}

}
