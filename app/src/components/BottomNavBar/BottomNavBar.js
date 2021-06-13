import * as React from 'react'

import { BottomNavigation } from 'react-native-paper'
import firebase from 'firebase'

import * as Styles from './styles'


import ProfileRoute from './ProfileRoute'
import SettingsRoute from './SettingsRoute'
import CommunityRoute from './CommunityRoute'
onLogout = () => {
  firebase.auth().signOut()
}






const BottomNavBar = (props) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'community', title: 'Community', color: '#E43090' },
    { key: 'profile', title: 'Profile' },
    { key: 'settings', title: 'Settings' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    community: CommunityRoute,
    profile: ProfileRoute,
    settings: SettingsRoute,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={Styles.ActiveIconColor}
      inactiveColor={Styles.InactiveIconColor}
      barStyle={{ backgroundColor: Styles.BackgroundColor }}
    />
  )
}

export default BottomNavBar
