import React ,{Component} from 'react';
import { Text, StyleSheet,Dimensions,StatusBar } from 'react-native';
import { Container, Header, Right, Icon, Button, View ,Thumbnail} from 'native-base';
import Story from './ProfileStories';

const {height,width}=Dimensions.get('window');

class Profile extends Component{

    constructor(props){
        super(props);
        this.state={
            currentTab:0
        }
    }

    renderStories=()=>{
        if(this.state.currentTab===0)
            return(
                <Story/>
            )
        else
        {
            return( <Text>Not configured yet</Text> )
        }
    }

    render(){
        return (
            <Container>
                 
                <Header noShadow style={{backgroundColor:'white'}}>
                    <Right>
                        <Button transparent>
                        <Icon name='cog' style={{color:'black'}}/>
                        </Button>
                    </Right>
                </Header>
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
                        <Button block noShadow backgroundColor='#03befc' style={styles.butn}>
                            <Text>Follow</Text>
                        </Button>
                        <Button block noShadow backgroundColor='#03befc' style={styles.butn} onPress={()=>this.props.navigation.navigate('Message')}>
                            <Text>Message</Text>
                        </Button>
                    </View>  
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Button transparent onPress={()=>this.setState({currentTab:0})} style={{borderBottomColor:'black',borderBottomWidth:this.state.currentTab===0 ? 2:0,width:width/2,justifyContent:'center'}}>
                            <Icon name='list' style={{color:this.state.currentTab===0 ? 'black':'grey'}}/>
                        </Button>
                        <Button transparent onPress={()=>this.setState({currentTab:1})} style={{borderBottomColor:'black',borderBottomWidth:this.state.currentTab===1 ? 2:0,width:width/2,justifyContent:'center'}}>
                            <Icon name='person' style={{color:this.state.currentTab===1 ? 'black':'grey'}}/>
                        </Button>
                    </View>

                    {this.renderStories()}

                </View>
                </View>
                <StatusBar backgroundColor='white' barStyle='dark-content'/>
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
        borderRadius:5

    }
});

export default Profile;