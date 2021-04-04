import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const ProfileComponent = ({isPro}) => {
  return (
    <View style={styles.profileContainer}>
      
        <Image
          style={styles.profilePicture}
          source={require("../../../assets/alex.jpg")}
        />

        <Text style={isPro ? styles.isPro : {display: 'none'}}>S|Pro</Text>
        <Text style={styles.name}>Alex Lazcano</Text>
        <Text style={styles.email}>alex.lazcano@gmail.com</Text>

        <Text style={styles.bio}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      
    </View>
  );
};

export default ProfileComponent;

{
  /* <Text style={styles.isPro}>S|Pro</Text>
<Text style={styles.name}>Alex Lazcano</Text>
<Text style={styles.email}>alex.lazcano@gmail.com</Text>

<Text style={styles.bio}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text> */
}
