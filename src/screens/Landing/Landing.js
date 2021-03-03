import React from "react";
import { Button } from "react-native";
import { CenteredView, ColoredText } from "./styles";
import config from "../../../config";

const name = config.API_KEY;

/*
 *  TODO: Remove "BottomNavBar" from login onPress
 *        When clicking the 'Login' button, perform authentication ops based on data
 *        Send the autheticated user back to the 'AuthRouter' where it will switch navigation contexts
 */

const Landing = ({ navigation }) => {
  return (
    <CenteredView>
      <ColoredText>{name}</ColoredText>
      <Button title="Login" onPress={() => navigation.navigate("BottomNavBar")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
    </CenteredView>
  );
};

export default Landing;
