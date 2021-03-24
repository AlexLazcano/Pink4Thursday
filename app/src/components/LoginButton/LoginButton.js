import React, { Component } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const LoginButton = ({onPress, title}) => {

    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>


    )
}

export default LoginButton;
