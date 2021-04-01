import React, { Component } from "react";
import { View, TextInput, Text, Image } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import LoginButton from "../../LoginButton/LoginButton";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { email, password, name } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onLogout() {
    console.log("logging out");

    firebase
      .auth()
      .signOut()
      .then((result) => {
        // console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.center}>
        <View style={styles.inputView}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/LogoPT.png")}
          ></Image>
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
          <LoginButton title="Sign In" onPress={() => this.onLogin()} buttonW={200}/>
          <LoginButton title="Back" onPress={() => navigation.goBack()} buttonW={125} />
        </View>

        <View style={styles.registerView}>
          <Text style={{fontSize: 17}}>Don't have an account? </Text>
          <LoginButton title="Register" onPress={() => navigation.navigate('Register')} buttonW= {125} />
        </View>
      </View>
    );
  }
}

export default Register;
