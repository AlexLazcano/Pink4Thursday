import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from 'firebase'


import styles from "../styles";

import LoginButton from '../LoginButton/LoginButton'
import {LinearGradient} from 'expo-linear-gradient'
import GlobalStyles, { colors } from "../../GlobalStyles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    }
    this.onSignUp = this.onSignUp.bind(this);
  }


  onSignUp() {
    const {email, password, name} = this.state;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const {navigation } = this.props
    return (
      <LinearGradient colors={[colors.Back1, colors.Back2]} style={
        {flex:1}
      }>

      <View style={styles.center}>
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(name) => this.setState({ name: name })}
          />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email: email })}
          />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password: password })}
          secureTextEntry={false}
          />
        <LoginButton title="Sign Up" onPress={() => this.onSignUp()} buttonW= {150}/>
        <LoginButton title="Back" onPress={() => navigation.goBack()} buttonW={125} />
      </View>
          </LinearGradient>
    );
  }
}

export default Register;
