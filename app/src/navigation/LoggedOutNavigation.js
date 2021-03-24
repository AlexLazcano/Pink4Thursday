import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing/Landing';
import Login from '../components/auth/Login/Login';
import Register from '../components/auth/Register/Register';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';
import GraphQLTest from '../components/GraphQLTest/GraphQLTest';

const Stack = createStackNavigator();

/*
 *  TODO: Remove "BottomNavBar" as a Screen in this navigation Stack
 *        Once authentication context is found, this screen should be referenced from the 'LoggedInNavigation' Stack
 */

export default LoggedOutNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
                <Stack.Screen name="GraphQLTest" component={GraphQLTest} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}