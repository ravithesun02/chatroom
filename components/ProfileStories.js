import React ,{Component} from 'react';
import { List, ListItem, Left, Thumbnail,Body, Right, View, Content } from 'native-base';
import {Text, StyleSheet} from 'react-native';

class Story extends Component{

    render(){
        return (
            <Content>
            <List>
                <ListItem style={styles.list}>
                   
                    <Body style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        <Thumbnail style={{height:110,width:80,borderRadius:10}} square large source={{uri:'https://images.unsplash.com/photo-1579639460869-0a5aefceffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                        </View>
                        <View style={{flex:2,marginTop:10,marginLeft:-40}}>
                        <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:1}} >Learn how to sing in 30 days</Text>
                        <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}>Enrique</Text>
                        <Text style={{color:'grey'}}>23.5k views</Text>
                        </View>
                    </Body>
                  
                </ListItem>
                <ListItem style={styles.list}>
                   
                   <Body style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}>
                       <Thumbnail style={{height:110,width:80,borderRadius:10}} square large source={{uri:'https://images.unsplash.com/photo-1579639460869-0a5aefceffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                       </View>
                       <View style={{flex:2,marginTop:10,marginLeft:-40}}>
                       <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:1}} >Learn how to sing in 30 days</Text>
                       <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}>Enrique</Text>
                       <Text style={{color:'grey'}}>23.5k views</Text>
                       </View>
                   </Body>
                 
               </ListItem>
               <ListItem style={styles.list}>
                   
                   <Body style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}>
                       <Thumbnail style={{height:110,width:80,borderRadius:10}} square large source={{uri:'https://images.unsplash.com/photo-1579639460869-0a5aefceffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                       </View>
                       <View style={{flex:2,marginTop:10,marginLeft:-40}}>
                       <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:1}} >Learn how to sing in 30 days</Text>
                       <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}>Enrique</Text>
                       <Text style={{color:'grey'}}>23.5k views</Text>
                       </View>
                   </Body>
                 
               </ListItem>
               <ListItem style={styles.list}>
                   
                   <Body style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}>
                       <Thumbnail style={{height:110,width:80,borderRadius:10}} square large source={{uri:'https://images.unsplash.com/photo-1579639460869-0a5aefceffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                       </View>
                       <View style={{flex:2,marginTop:10,marginLeft:-40}}>
                       <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:1}} >Learn how to sing in 30 days</Text>
                       <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}>Enrique</Text>
                       <Text style={{color:'grey'}}>23.5k views</Text>
                       </View>
                   </Body>
                 
               </ListItem>
               <ListItem style={styles.list}>
                   
                   <Body style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}>
                       <Thumbnail style={{height:110,width:80,borderRadius:10}} square large source={{uri:'https://images.unsplash.com/photo-1579639460869-0a5aefceffde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                       </View>
                       <View style={{flex:2,marginTop:10,marginLeft:-40}}>
                       <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:1}} >Learn how to sing in 30 days</Text>
                       <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}>Enrique</Text>
                       <Text style={{color:'grey'}}>23.5k views</Text>
                       </View>
                   </Body>
                 
               </ListItem>
            </List>
            </Content>
        )
    }
}

const styles=StyleSheet.create({
    list:{
        borderBottomWidth:0
    }
})

export default Story;