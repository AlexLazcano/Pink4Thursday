import React from 'react'
import { View, Text } from 'react-native'
import * as Styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { withTheme } from 'styled-components'
import ProfileComponent from '../ProfileComponent/ProfileComponent'

const ProfileRoute = (props) => {
    return (
        <LinearGradient
        colors={[props.theme.Back1, props.theme.Back2]}
        style={{ flex: 1 }}
      >
        <Styles.CenteredView>
          {/* <Styles.TempPageText>ProfileRoute</Styles.TempPageText> */}
          <ProfileComponent isPro={true} />
        </Styles.CenteredView>
      </LinearGradient>
    )
  }
export default withTheme(ProfileRoute) 
