import React ,{Component} from 'react';
import { Text, StatusBar, View, ScrollView,StyleSheet, ImageBackground} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Content, Thumbnail,Card, CardItem, Button } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

class HomeTab extends Component{

  

    render(){
        return(
            <Container>
            <Header noShadow transparent>
                <Left/>
                <Body style={{marginLeft:-50}}>
                   <Text style={{fontSize:20,fontWeight:'bold'}}>MiWorld</Text>
                </Body>
                <Right>
                    <Button transparent onPress={()=>this.props.navigation.navigate('Message')}>
                    <Icon name='mail' style={{fontSize:20,color:'black'}}/>
                    </Button>
                </Right>
            </Header>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{margin:10}}>    
                <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                        <Button transparent noShadow onPress={()=>this.props.navigation.navigate('camera')}>
                    <Thumbnail  style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </Button>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Thumbnail style={{position:'absolute',alignSelf:'center',borderColor:'white',borderWidth:2,marginTop:95}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                   
                </ScrollView>
            </View>
            <Content>
                <View style={{marginTop:10}}>
                    <Card transparent>
                        <CardItem cardBody>
                        <ImageBackground style={{flex:1 ,height:500,width:undefined,flexDirection:'row',justifyContent:'space-between'}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:16,margin:10}} >Kumar Pratik</Text>
                      <Entypo name='dots-three-horizontal' style={{fontSize:20,color:'white',margin:10}}/>
                          </ImageBackground>
                        </CardItem>
                        <CardItem footer>
                            <Entypo name='heart' style={{fontSize:16}}/>
                            <Text> 12K Likes</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={{uri:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                            <Text> THis is Comment Section</Text>
                        </CardItem>
                    </Card>
              </View>
              <View style={{marginTop:10}}>
                    <Card transparent>
                        <CardItem cardBody>
                        <ImageBackground style={{flex:1 ,height:500,width:undefined,flexDirection:'row',justifyContent:'space-between'}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:16,margin:10}} >Kumar Pratik</Text>
                      <Entypo name='dots-three-horizontal' style={{fontSize:20,color:'white',margin:10}}/>
                          </ImageBackground>
                        </CardItem>
                        <CardItem footer>
                            <Entypo name='heart' style={{fontSize:16}}/>
                            <Text> 12K Likes</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={{uri:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                            <Text> THis is Comment Section</Text>
                        </CardItem>
                    </Card>
              </View>
              <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Button block noShadow backgroundColor='#03befc' style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                    </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Button block noShadow backgroundColor='#03befc' style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                         </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Button block noShadow backgroundColor='#03befc' style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                        </View>
                    <View style={{margin:10}}>
                    <Thumbnail style={{height:140,width:100,borderRadius:10}} large square source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    <Button block noShadow backgroundColor='#03befc' style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                         </View>
                </ScrollView>
                </View>
              <View style={{marginTop:10}}>
                    <Card transparent>
                        <CardItem cardBody>
                        <ImageBackground style={{flex:1 ,height:500,width:undefined,flexDirection:'row',justifyContent:'space-between'}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:16,margin:10}} >Kumar Pratik</Text>
                      <Entypo name='dots-three-horizontal' style={{fontSize:20,color:'white',margin:10}}/>
                          </ImageBackground>
                        </CardItem>
                        <CardItem footer>
                            <Entypo name='heart' style={{fontSize:16}}/>
                            <Text> 12K Likes</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={{uri:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                            <Text> THis is Comment Section</Text>
                        </CardItem>
                    </Card>
              </View>
              <View style={{marginTop:10}}>
                    <Card transparent>
                        <CardItem cardBody>
                        <ImageBackground style={{flex:1 ,height:500,width:undefined,flexDirection:'row',justifyContent:'space-between'}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:16,margin:10}} >Kumar Pratik</Text>
                      <Entypo name='dots-three-horizontal' style={{fontSize:20,color:'white',margin:10}}/>
                          </ImageBackground>
                        </CardItem>
                        <CardItem footer>
                            <Entypo name='heart' style={{fontSize:16}}/>
                            <Text> 12K Likes</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={{uri:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                            <Text> THis is Comment Section</Text>
                        </CardItem>
                    </Card>
              </View>
            </Content>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    butn:{
        height:30,
        width:100,
        justifyContent:'center',
        margin:10,
        marginTop:20,
        borderRadius:10,
        position:'absolute',
        alignSelf:'center',
        marginTop:109

    }
});

export default HomeTab;