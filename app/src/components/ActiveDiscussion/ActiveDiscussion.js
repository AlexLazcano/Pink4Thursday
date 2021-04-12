import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./styles";
import GlobalStyles, {colors} from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const ActiveDiscussion = ({ title, time, author, text }) => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={[colors.color1, colors.color2]} style={styles.ActiveDiscussion}>
        
        <Image
          style={styles.profilePicture}
          source={require("../../../assets/alex.jpg")}
        />
        <View style={styles.textContainer}>
          <View style={styles.header}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.author}>By {author}</Text>
          </View>

          <Text>{text}</Text>
          <Text style={styles.time}>{time} ago</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ActiveDiscussion;
