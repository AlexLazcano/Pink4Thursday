import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavBar from '../components/BottomNavBar/BottomNavBar'

const Stack = createStackNavigator();



export default LoggedInNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}