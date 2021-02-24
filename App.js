import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV8Wd7LJge4bBWCo72J3HDqk1u8t0P0v4",
  authDomain: "pinkthursday-pink.firebaseapp.com",
  projectId: "pinkthursday-pink",
  storageBucket: "pinkthursday-pink.appspot.com",
  messagingSenderId: "502315388587",
  appId: "1:502315388587:web:a50111191d07fbea13f1ee",
  measurementId: "G-RTR16VYJCX",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import SplashScreen from "./Components/Auth/SlashScreen/SplashScreen";
import Landing from "./Components/Auth/Landing/Landing";
import Register from "./Components/Auth/Register/Register";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
