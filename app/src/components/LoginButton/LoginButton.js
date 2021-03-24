import React, { Component } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const LoginButton = ({onPress, title, buttonW}) => {

    return(
        <TouchableOpacity onPress={onPress} style={ [{width: buttonW}, styles.button] }>
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>


    )
}

export default LoginButton;
