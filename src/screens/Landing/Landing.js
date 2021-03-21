import React from "react";
import { Button, Image } from "react-native";

import { CenteredView } from "./styles";

import config from "../../../config"

const name = config.PROJECTID

/*
 *  TODO: Remove "BottomNavBar" from login onPress
 *        When clicking the 'Login' button, perform authentication ops based on data
 *        Send the autheticated user back to the 'AuthRouter' where it will switch navigation contexts
 */

const Landing = ({ navigation }) => {
  return (
    <CenteredView>
      <Image style={{width:"50%", height:"20%", resizeMode:"contain"}} source={require("../../../assets/LogoPT.png")}></Image>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
      <Button title="Signed In View" onPress={() => navigation.navigate("BottomNavBar")} />
    </CenteredView>
  );
};

export default Landing;
