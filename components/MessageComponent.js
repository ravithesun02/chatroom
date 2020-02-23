import React ,{Component} from 'react';
import { Text,View,StatusBar } from 'react-native';
import { Header ,Container, Tabs,Tab,Content,List,ListItem,Body,Left,Right,Thumbnail} from 'native-base';




export default class Message extends Component{


   

    render(){
        return (
            <Container>
                <Header hasTabs noShadow noLeft style={{backgroundColor:'white'}}>
                    <Body style={{margin:10}}>
                        <Text style={{fontWeight:'bold',fontSize:20,marginTop:10}}>Messaging</Text>
                    </Body>
                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor:'black',height:1}} tabContainerStyle={{elevation:0}} style={{marginTop:10}}>
                    <Tab heading="CHATS" tabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTabStyle={{backgroundColor:'white'}} activeTextStyle={{color:'black',fontWeight:'bold'}}>
                    <Content>
        <View style={{marginTop:5}}> 
                <List>
                    <ListItem avatar onPress={()=>this.props.navigation.navigate('Chatting')}>
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
                    </Tab>
                    <Tab heading="REQUEST" tabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTabStyle={{backgroundColor:'white'}} activeTextStyle={{color:'black',fontWeight:'bold'}}>
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
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}



