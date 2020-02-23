import React ,{Component} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput,StatusBar, Keyboard} from 'react-native';
import { Container, Header, Left, Body, Thumbnail, Icon, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class ChatView extends Component{

  constructor(props){
    super(props);

    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = 20;

    var messages = [];

    for(var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(10, 120);

      var direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        direction: direction,
        text: message
      })
    }

    this.state={
      messages:messages,
      inputBarText:''
    }
  }
  componentDidMount(){

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    setTimeout(function(){
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  componentWillUnmount(){

    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e){
      this.scrollView.scrollToEnd();
  }
  keyboardDidHide(){
    this.scrollView.scrollToEnd();
  }

  componentDidUpdate(){
    setTimeout(function(){
      this.scrollView.scrollToEnd();
    }.bind(this))

  }

  sendMessage() {
    this.state.messages.push({direction: "right", text: this.state.inputBarText});

    this.setState({
      messages: this.state.messages,
      inputBarText: ''
    });
  }

  onChangeInputBarText(text) {
    this.setState({
      inputBarText: text
    });
  }

  onInputSizeChange() {
    setTimeout(function() {
      this.scrollView.scrollToEnd({animated: false});
    }.bind(this))
  }

  render(){
    var messages = [];

    this.state.messages.forEach(function(message, index) {
      messages.push(
          <MessageBubble key={index} direction={message.direction} text={message.text}/>
        );
    });
    return(
      <Container>
        <Header noShadow transparent>
          <Left>
            <Icon name='arrow-back' onPress={()=>this.props.navigation.goBack()}/>
          </Left>
          
          <Body style={{flexDirection:'row',marginLeft:-90}}>

            <Thumbnail style={{height:50,width:50}} source={{uri:'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}/>
            <View style={{margin:5}}>
              <Text style={{fontWeight:'bold'}}>Kumar Pratik</Text>
              <Text note style={{color:'grey'}}>Online</Text>
            </View>
          </Body>
        </Header>

        <View style={styles.outer}>
                  <ScrollView ref={(ref) => { this.scrollView = ref }} style={styles.messages}>
                    {messages}
                  </ScrollView>
                  <InputBar onSendPressed={() => this.sendMessage()} 
                            onSizeChange={() => this.onInputSizeChange()}
                            onChangeText={(text) => this.onChangeInputBarText(text)}
                            text={this.state.inputBarText}/>
                              
              </View>

            <StatusBar backgroundColor='white' barStyle='dark-content'/>

      </Container>
     
    )
  }
}

class MessageBubble extends Component {
  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.direction === 'left' ? null : <View style={{width: 70}}/>;
    var rightSpacer = this.props.direction === 'left' ? <View style={{width: 70}}/> : null;

    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;

    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {leftSpacer}
            <View style={bubbleStyles}>
              <Text style={bubbleTextStyle}>
                {this.props.text}
              </Text>
            </View>
            {rightSpacer}
          </View>
      );
  }
}

class InputBar extends Component{

  componentDidUpdate(nextProps){
    if(nextProps.text === '') {
      this.textInput.clear();
    }
  }
  render() {
    return (
          <View style={styles.inputBar}>
            <TextInput style={styles.textBox}
                        placeholder='Start Chatting'
                        multiline
                        ref={(ref) => { this.textInput = ref }} 
                        onChangeText={(text) => this.props.onChangeText(text)}
                        onContentSizeChange={this.props.onSizeChange}
                        value={this.props.text}/>
                        <View style={{alignSelf:'flex-end'}}>
            <Button transparent style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
                <Ionicons style={{fontSize:30}} name='ios-send'/>
            </Button>
            </View>
          </View> 
          );
  }
}

const styles = StyleSheet.create({

  //ChatView

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },

  //InputBar

  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
    
    borderTopWidth:1,
    borderColor: 'grey',
  },

  textBox: {
   
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },

  sendButton: {
    marginBottom:5,
    paddingLeft: 15,
    marginLeft: 5,
    paddingRight: 15,
    borderRadius: 5,
    
  },

  //MessageBubble

  messageBubble: {
      borderRadius: 5,
      marginTop: 8,
      marginRight: 10,
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection:'row',
      flex: 1
  },

  messageBubbleLeft: {
    backgroundColor: '#d5d8d4',
  },

  messageBubbleTextLeft: {
    color: 'black'
  },

  messageBubbleRight: {
    backgroundColor: 'white',
    elevation:4
  },

  messageBubbleTextRight: {
    color: 'black'
  },
})
