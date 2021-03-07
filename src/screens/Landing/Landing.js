import React from "react";
import { Button, Image, View, Text } from "react-native";
import styles from "./styles";

import config from "../../../config"

const name = config.PROJECTID

const Landing = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>{name}</Text>
      <Image style={{width:"50%", height:"20%", resizeMode:"contain"}} source={require("../../../assets/LogoPT.png")}></Image>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

export default Landing;
