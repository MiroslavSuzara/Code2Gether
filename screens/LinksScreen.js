import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



import Fire from '../Fire';

export default class LinksScreen extends Component {
  state = {
    email: '',
    sunet: '',
    name: '',
    profile: '',
  }

  get user() {
    return {
      name: Fire.shared.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.modalContent}>
          <View style={styles.header}>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          </View>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.description}>{this.state.profile}</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>SUNet ID: {this.state.sunet}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('UpdateProfileScreen')}>
              <Text>Update Profile</Text>
              </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
  componentDidMount() {
    //Pings firebase to get the sunet (stored in result)
    //and in the callback, we set the sunet in the state!
    Fire.shared.getname(sunet_result =>
      this.setState({sunet:sunet_result}));
      Fire.shared.getname(name_result =>
        this.setState({name:name_result}));
        Fire.shared.getprofile(profile_result =>
          this.setState({profile:profile_result}));
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  body:{
    marginTop:40,
  },
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
  },
});
