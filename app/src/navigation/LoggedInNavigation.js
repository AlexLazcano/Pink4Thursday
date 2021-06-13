import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import { theme } from '../components/theme'

const Stack = createStackNavigator()

export default LoggedInNavigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='BottomNavBar' component={BottomNavBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
