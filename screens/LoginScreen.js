import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
	Platform
} from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import Fire from '../Fire';
import {Component, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../assets/images/Code2Gether.png';


import { MonoText } from '../components/StyledText';

export default class Login extends Component {

	state = {
		name: 'Test',
		email: 'test@live.com',
		password: '123456',
		avatar: ''
	}

  onPressLogin = async () => {
		const user = {
			email: this.state.email,
			password: this.state.password,
			avatar: this.state.avatar
		};

		const response = Fire.shared.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

  loginSuccess = () => {
    this.props.navigation.navigate('Chat Rooms', {
      email: this.state.email,
      avatar: this.state.avatar
    });
  };

  loginFailed = () => {
    alert('Login failure. Please try again.');
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });


  render() {
    return (
      <View style={styles.container}>
					<Image source={require('../assets/images/Code2Gether.png')}/>
			    <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={this.onChangeTextEmail}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={this.onChangeTextPassword}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPressLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUp')}
>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
  },
});
