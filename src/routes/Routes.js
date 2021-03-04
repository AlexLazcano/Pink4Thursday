import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from 'firebase'

import SplashScreen from "../components/SplashScreen/SplashScreen";
import Landing from "../screens/Landing/Landing";
import Register from "../components/auth/Register/Register";

import config from "../../config"



const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTHDOMAIN,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID,
  measurementId: config.MEASUREMENTID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig) 
}



function Routes() {
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

export default Routes;
