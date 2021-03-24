import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from 'firebase'


import styles from "../styles";
import LoginButton from "../../LoginButton/LoginButton";

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
    return (
      <View style={styles.center}>
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={(name) => this.setState({ name: name })}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(password) => this.setState({ password: password })}
          secureTextEntry={false}
        />
        <LoginButton title="Sign Up" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

export default Register;
