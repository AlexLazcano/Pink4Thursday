import React from "react";
import { Button, Text, View } from "react-native";

const Landing = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate("Splash")} />
    </View>
  );
};

export default Landing;
