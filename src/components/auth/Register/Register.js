import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import styles from "./styles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp() {}

  render() {
    return (
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChange={(name) => this.setState({ name: name })}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          onChange={(email) => this.setState({ email: email })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChange={(password) => this.setState({ password: password })}
          secureTextEntry={true}
        />
        <Button title="Sign Up" onPress={() => this.onSignUp()} />
      </View>
    );
  }
}

export default Register;
