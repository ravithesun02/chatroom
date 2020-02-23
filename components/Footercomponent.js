import React from 'react';
import { StyleSheet,View} from 'react-native';
import {  Button,Footer, Container } from 'native-base';
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from 'react-navigation-tabs';

class FloatFooter extends React.Component{

render(){
    return(
                  
              <View style={{position:'absolute',marginTop:550,marginLeft:25}}>
                    <Footer style={styles.footup} >
                        <View style={styles.iconRow}>
                            <EntypoIcon name="home" style={styles.icon}></EntypoIcon>
                            <EvilIconsIcon name="search" style={styles.icon2}></EvilIconsIcon>
                            <IoniconsIcon name="md-qr-scanner" style={styles.icon3}></IoniconsIcon>
                            <EntypoIcon name="mail" style={styles.icon4}></EntypoIcon>
                            <Button transparent  onPress={()=>this.props.navigation.navigate('user')} >
                            <EntypoIcon name="user" style={styles.icon5}></EntypoIcon>
                            </Button>
                    </View>
                    </Footer>
             </View>
          
        
    )
}

}
const styles=StyleSheet.create({
   
      footup:{
        margin:10,
        width:340,
        borderRadius:72,  
        backgroundColor:'white',  
        shadowOffset: {
          height: 5,
          width: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.32,
        marginBottom: 30,
        marginLeft: 12
      },
      icon: {
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        marginTop: 1,
        color:'blue'
      },
      icon2: {
        color: "rgba(0,0,0,1)",
        fontSize: 40,
        marginLeft: 17,
        marginTop: 1
      },
      icon3: {
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        marginLeft: 22,
        marginTop: 1
      },
      icon4: {
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        marginLeft: 32,
        marginTop: 1
      },
      icon5: {
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        marginLeft: 23
      },
      iconRow: {
        height: 41,
        flexDirection: "row",
        flex: 1,
        marginRight: 28,
        marginLeft: 25,
        marginTop: 7,
        justifyContent:'space-around'
      }
});

export default FloatFooter;