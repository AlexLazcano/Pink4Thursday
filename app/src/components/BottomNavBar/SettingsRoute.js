import React from 'react'
import { View, Text, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withTheme } from 'styled-components'
import * as Styles from './styles'

const SettingsRoute = props => {
  return (
    <LinearGradient
      colors={[props.theme.Back1, props.theme.Back2]}
      style={{ flex: 1 }}
    >
      <Styles.CenteredView>
        <Styles.TempPageText>SettingsRoute</Styles.TempPageText>
        <Button title='Logout' onPress={onLogout} />
      </Styles.CenteredView>
    </LinearGradient>
  )
}


export default withTheme(SettingsRoute) 
