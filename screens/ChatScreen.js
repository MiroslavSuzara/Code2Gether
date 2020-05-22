// Adapted from https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c
//and https://www.bootdey.com/react-native-snippet/23/Profile-ui-example

import Fire from '../Fire';

import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Component, useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { MonoText } from '../components/StyledText';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  name?: string,
};

function Welcome(props){
  return <Text style={styles.getStartedText}>Hello, {props.name}</Text>;
}

export default class Chatscreen extends Component {

  state = {
    messages: [],
    modalOpen: false,
  }

  get user() {
    return {
      name: Fire.shared.name,
      _id: Fire.shared.uid,
    };
  }

  // //do I need this?
  //   get otheruser() {
  //     return {
  //       nameother: Fire.shared.name,
  //       _idother: Fire.shared.uid,
  //     };
  //   }

  handlePressClose() {
    this.setState({modalOpen: false})
  }

  handlePressOpen(user) {
    this.setState({modalOpen: true})
    Fire.shared.getnameother(name_result =>
      this.setState({nameother:name_result}), user);
      Fire.shared.getprofileother(profile_result =>
        this.setState({profileother:profile_result}), user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalOpen} animationType='slide'>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <MaterialIcons
                name='close'
                size={100}
                onPress = {() => this.handlePressClose()}
              />
              <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            </View>
              <View style={styles.bodyContent}>
                <Text style={styles.name}> {this.state.nameother} </Text>
                <Text style={styles.description}> {this.state.profileother} </Text>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text>Zoom</Text>
                </TouchableOpacity>
                </View>
          </View>
        </Modal>


        <Welcome style={styles.getStartedText} name={this.user.name}/>
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
          renderUsernameOnMessage={true}
          showAvatarForEveryMessage={true}
          renderAvatarOnTop={true}

          onPressAvatar = {(user) => this.handlePressOpen(user)}
          //this.props.current.currentMessage.user
        />
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    ,JSON.stringify(this.props.route.params.chatRoomName));
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
    marginBottom: 40
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:30,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  // name:{
  //   fontSize:22,
  //   color:"#FFFFFF",
  //   fontWeight:'600',
  // },
  bodyContent: {
    flex: 1,
    color:"#FFFFFF",
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  modalContent: {
    flex: 1,
  }
});
