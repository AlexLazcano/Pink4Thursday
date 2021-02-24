import React from "react";
import { Button, Text, View } from "react-native";

import styles from "./styles";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate("Splash")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

export default Landing;
