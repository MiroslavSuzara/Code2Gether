import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Fire from '../Fire';

export default class UpdateProfileScreen extends Component {
  state = {
		name: 'no name',
	  about: '',
    zoom: ''
	};

  onPressUpdate = async () => {
      const user = {
        name: this.state.name,
        about: this.state.about,
        zoom: this.state.zoom
      };
      await Fire.shared.updateProfile(user);
    };

  onChangeTextName = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>
          <TextInput
            style={styles.nameInput}
            onChangeText={this.onChangeTextName}
            value={this.state.name}
          />
          <Text style={styles.description}>Laorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an.</Text>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Zoom</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onPressUpdate}
                >
              <Text>Save Profile Changes</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // console.log('!!!!!!!');
    // console.log(Fire.shared.populate());
  }

  //   Fire.shared.on(message =>
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, message),
  //     }))
  //   ,JSON.stringify(this.props.route.params.chatRoomName));
  // }
  // componentWillUnmount() {
  //   Fire.shared.off();
  // }

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:18,
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
});
