import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from 'firebase'
import LoginButton from "../../LoginButton/LoginButton";


import styles from "../styles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
     
    }
    this.onLogin = this.onLogin.bind(this);
    
  }


  onLogin() {
    const {email, password, name} = this.state;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // console.log(result)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  onLogout() {
    console.log("logging out")

    firebase.auth().signOut()
    .then((result) => {
      // console.log(result)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Login</Text>
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
        <LoginButton title="Sign In" onPress={() => this.onLogin()}  />
        
        
      </View>
    );
  }
}

export default Register;
