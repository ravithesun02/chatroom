import React ,{Component} from 'react';
import { Container,Content, Header, Left, Body,Icon,Button, Thumbnail, Item, Picker,Form, ListItem ,List, Right, Switch} from 'native-base';
import {Text,View, TextInput} from 'react-native';

class VideoUpload2 extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            selected2:"key0"
        }
    }

    onValueChange2(value){
        this.setState({
            selected2:value
        })

    }

    render(){
        return(
            <Container style={{flex:1}}>
                <Header noShadow transparent>
                    <Left>
                        <Icon name='arrow-back' onPress={()=>this.props.navigation.goBack()}/>
                    </Left>
                    <Body style={{marginLeft:-100}}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>Kumar Pratik</Text>
                    </Body>
                </Header>
                <Content style={{flex:1}}>
                    <View style={{flexDirection:'row',flex:1}}>
                        <View style={{flex:2}}>
                            <TextInput style={{borderBottomColor:'grey',borderBottomWidth:1}} height={40} placeholder='Title' multiline/>
                            <TextInput placeholder='Description' style={{borderBottomColor:'grey',borderBottomWidth:1}} height={80} multiline/>

                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Thumbnail style={{height:140,width:100,borderRadius:20}} large square source={{uri:'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
                        </View>
                    </View>
                    <View>
                    <Form style={{margin:10}}>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Public" value="key0" />
                                        <Picker.Item label="Private" value="key1" />

                                    </Picker>
                                </Item>
                            </Form>
                            <TextInput style={{borderBottomColor:'grey',borderBottomWidth:1,margin:10}} height={40} placeholder='Add Location' multiline/>
                    </View>
                    <View style={{margin:10}}>
                        <List>
                            <ListItem style={{borderBottomWidth:0}}>
                                <Body>
                                    <Text>Share as a Story</Text>
                                </Body>
                                <Right>
                                    <Switch value={true}/>
                                </Right>
                            </ListItem>
                            <ListItem style={{borderBottomWidth:0}}>
                                <Body>
                                    <Text>Make visible on Discovery</Text>
                                </Body>
                                <Right>
                                    <Switch value={true}/>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                    

                </Content>
                <View style={{justifyContent:'flex-end'}}>
                        <Button style={{backgroundColor:'#86b7da',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}}>Post</Text>
                        </Button>
                    </View>
            </Container>
        )
    }
}
export default VideoUpload2;