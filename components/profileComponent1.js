import React ,{Component} from 'react';
import { Container, View, Thumbnail,  Content, Button, Tabs, Tab, TabHeading, Icon } from 'native-base';
import {Text, StyleSheet} from 'react-native';
import {createTabNavigator} from 'react-navigation-tabs';
import Story from './ProfileStories';
import FloatFooter from './Footercomponent';

const storyNavigator=createTabNavigator({
    
})

class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            currentTab:0
        }
    }

    static navigationOptions={
        title:'krpratik'
    }

    render(){
        return(
            <Container>
                <View style={{flex:1}}>
                <View style={{flexDirection:'row',marginLeft:5,marginRight:5}}>
                    <View style={{flex:1}}>
                        <Thumbnail large style={{height:100,width:100,borderRadius:50,marginLeft:5}} source={{uri:'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'}}/>
                    </View>
                    <View style={{flex:2,marginTop:15}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Kumar Pratik</Text>
                            <Text>@krpratik</Text>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Text style={{marginRight:20}}>1k Followers</Text>
                            <Text>1.5k Following</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:15,marginRight:10,marginLeft:4}}>
                    <View>
                    <Text style={{color:'grey',fontWeight:'bold',fontSize:15}}>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Button info style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                        <Button info style={styles.butn}>
                            <Text>Message</Text>
                        </Button>
                    </View>
                    
                </View>
                    <View style={{flex:1}}>
                    <Tabs onChangeTab={({i})=>this.setState({currentTab:i})} style={{marginVertical:10}} tabBarUnderlineStyle={{height:2,backgroundColor:'black'}} >
                    <Tab  heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name='list' style={{color:this.state.currentTab===0 ? 'black':'grey'}}/></TabHeading> }>
                        <Text>New Stories</Text>
                      <Story/>
                    </Tab>
                    <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name='person' style={{color:this.state.currentTab===1 ? 'black':'grey'}}/></TabHeading> }>
                        <Story/>
                    </Tab>
                </Tabs>
                    </View>
                </View>
                <FloatFooter/>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    butn:{
        height:30,
        width:150,
        justifyContent:'center',
        margin:10,
        marginTop:20,
        borderRadius:8

    }
})
export default Profile;