import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import styles from "./styles";

const SplashScreen = (props) => {
  return (
    <View style={styles.splashBG}>
      <Image
        source={require("../../../assets/LogoPT.png")}
        style={styles.logo}
      />
    </View>
  );
};
export default SplashScreen;
