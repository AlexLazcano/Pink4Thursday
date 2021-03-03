import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../components/SplashScreen/SplashScreen";
import Landing from "../screens/Landing/Landing";
import Register from "../components/auth/Register/Register";

import BottomNavBar from "../components/BottomNavBar/BottomNavBar";

function Routes() {
  // const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Landing">
    //     <Stack.Screen name="Splash" component={SplashScreen} />
    //     <Stack.Screen name="Landing" component={Landing} />
    //     <Stack.Screen name="Register" component={Register} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <BottomNavBar />
  );
}

export default Routes;
