import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ActiveDiscussion = ({title, time, author, text, }) => {
  return (
    <TouchableOpacity style={styles.ActiveDiscussion}>
      <Image
        style={styles.profilePicture}
        source={require("../../../assets/alex.jpg")}
      />
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text style={styles.author}>By {author}</Text>
        </View>

        <Text>
          {text}
        </Text>
        <Text style={styles.time}>{time} ago</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveDiscussion;
