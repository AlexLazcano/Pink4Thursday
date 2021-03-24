import React from "react";
import { ActivityIndicator } from "react-native";
import { CenteredView, LoadingColor } from "./styles";

export default () => (
    <CenteredView>
        <ActivityIndicator size="large" color={ LoadingColor }/>
    </CenteredView>
)