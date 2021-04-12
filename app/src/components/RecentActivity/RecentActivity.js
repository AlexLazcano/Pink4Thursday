import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import GlobalStyles, { colors } from "../GlobalStyles";

import styles from "./styles";

const RecentActivity = ({ User, Reaction }) => {
  var Respect = (
    <Image
      style={styles.icon}
      source={require("../../../assets/Respect.png")}
    />
  );
  var Love = (
    <Image style={styles.icon} source={require("../../../assets/icon.png")} />
  );
  var Support = (
    <Image
      style={styles.icon}
      source={require("../../../assets/Support.png")}
    />
  );
  var icon;
  if (Reaction === "Respect") {
    icon = Respect;
  } else if (Reaction === "Love") {
    icon = Love;
  } else {
    icon = Support;
  }

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[colors.color1, colors.color2]}
        style={styles.container}
      >
        <Text style={styles.textContainer}>
          <Text style={styles.highlightedText}>{User}</Text> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.{" "}
          <Text style={styles.highlightedText}>{Reaction}</Text>
        </Text>

        {icon}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RecentActivity;
