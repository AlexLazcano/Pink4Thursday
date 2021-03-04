import React from "react";
import { Button, NativeModules } from "react-native";
import { CenteredView, ColoredText } from "./styles";
import config from "../../../config"

const name = config.APPID

const Landing = ({ navigation }) => {
  return (
    <CenteredView>
      <ColoredText>{name}</ColoredText>
      <Button title="Login" onPress={() => navigation.navigate("Splash")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
    </CenteredView>
  );
};

export default Landing;
