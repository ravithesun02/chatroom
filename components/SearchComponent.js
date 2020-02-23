import React ,{Component} from 'react';
import { Text ,StatusBar, StyleSheet} from 'react-native';
import { Container, Content, Button } from 'native-base';

class SearchTab extends Component{
    render(){
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.container}>
                    <Button onPress={()=>this.props.navigation.navigate('upload')}>
                        <Text>enter</Text>
                    </Button>
                </Content>
            
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SearchTab;