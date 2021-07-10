import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { ProfileContainer, ProfilePicture, ProTag, Name, Email, Bio } from './styles'

const ProfileComponent = ({ isPro }) => {
  return (
    <ProfileContainer style={[GlobalStyles.PrimaryBG]}>
      <ProfilePicture source={require('../../../assets/alex.jpg')} />

      {isPro && <ProTag>S|Pro</ProTag>}
      <Name>Alex Lazcano</Name>
      <Email>alex.lazcano@gmail.com</Email>

      <Bio>
        hello minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Bio>
    </ProfileContainer>
  )
}

export default ProfileComponent

