import React from "react";
import { Button } from "react-native";
import { CenteredView, ColoredText } from "./styles";

const Landing = ({ navigation }) => {
  return (
    <CenteredView>
      <ColoredText>PinkThursday</ColoredText>
      <Button title="Login" onPress={() => navigation.navigate("Splash")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
    </CenteredView>
  );
};

export default Landing;
