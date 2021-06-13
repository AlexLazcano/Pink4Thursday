import React, { useState } from 'react'
import { RecentActivity, TextContainer, Icon,Name } from './styles'
import { TouchableOpacity } from 'react-native'
import { colors } from '../GlobalStyles'
import { withTheme } from 'styled-components'
//TODO:
// add love Icon

const index = (props, {reaction, user}) => {
  let Respect = <Icon source={require('../../../assets/Respect.png')} />
  let Love = <Icon source={require('../../../assets/Support.png')} />
  let Support = <Icon source={require('../../../assets/Support.png')} />
  let icon = null;
  if (reaction === 'Respect') {
    icon = Respect
  } else if (reaction === 'Love') {
    icon = Love
  } else {
    icon = Support
  }

  return (
    <TouchableOpacity>
      <RecentActivity colors={[props.theme.color1, props.theme.color2]} >
        <TextContainer>
          <Name>{user}</Name> Lorem ipsum dolor it amet, Lorem ipsum dolor it amet Lorem ipsum dolor it amet
        </TextContainer>
        {icon}
      </RecentActivity>
    </TouchableOpacity>
  )
}

export default withTheme(index) 
